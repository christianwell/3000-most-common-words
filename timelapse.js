// Camera frames never leave this page. No microphone access is requested.
(() => {
  const get = (id) => document.getElementById(id);
  const preview = get("camera-preview");
  const canvas = document.createElement("canvas");
  canvas.width = 640;
  canvas.height = 480;
  const context = canvas.getContext("2d");
  let camera = null;
  let frames = [];
  let captureTimer = null;
  let recording = false;
  let exporting = false;
  let capturing = null;
  let resultURL = null;
  const MAX_FRAMES = 1800;
  const FPS = 12;

  function setStatus(message) { get("camera-status").textContent = message; }

  function releaseCamera() {
    camera?.getTracks().forEach((track) => track.stop());
    camera = null;
    preview.srcObject = null;
    preview.hidden = true;
    get("camera-placeholder").hidden = false;
    get("enable-camera").hidden = false;
    get("enable-camera").disabled = exporting;
    get("disable-camera").hidden = true;
    get("start-timelapse").disabled = true;
  }

  get("enable-camera").addEventListener("click", async () => {
    if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder || !canvas.captureStream) {
      setStatus("Camera recording isn’t supported here. Try Chrome or Edge on localhost or an HTTPS website.");
      return;
    }
    get("enable-camera").disabled = true;
    setStatus("Waiting for camera permission…");
    try {
      camera = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: "user" }, audio: false,
      });
      preview.srcObject = camera;
      preview.hidden = false;
      get("camera-placeholder").hidden = true;
      await preview.play();
      const ratio = preview.videoHeight / preview.videoWidth;
      canvas.height = Math.round(640 * ratio);
      get("enable-camera").hidden = true;
      get("disable-camera").hidden = false;
      get("start-timelapse").disabled = false;
      camera.getVideoTracks()[0].addEventListener("ended", () => {
        if (recording) stopRecording();
        else { releaseCamera(); setStatus("Your camera disconnected. Enable it again to continue."); }
      });
      setStatus("Preview only. Choose Start timelapse when you’re ready.");
    } catch (error) {
      releaseCamera();
      setStatus(error.name === "NotAllowedError" ? "Camera permission was denied. Allow camera access in your browser, then try again." : "Couldn’t open the camera. Check that it’s connected and not being used by another app.");
    } finally { get("enable-camera").disabled = false; }
  });

  get("disable-camera").addEventListener("click", () => { releaseCamera(); setStatus("Your camera is off."); });

  async function captureFrame() {
    if (!recording || capturing || document.hidden || preview.readyState < 2) return;
    context.drawImage(preview, 0, 0, canvas.width, canvas.height);
    capturing = new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.8));
    const frame = await capturing;
    capturing = null;
    if (!frame) {
      setStatus("Couldn’t capture a frame. Stopping so you can save the frames already captured.");
      stopRecording();
      return;
    }
    frames.push(frame);
    const text = `${frames.length} frames · ${(frames.length / FPS).toFixed(1)}s video`;
    get("recording-label").textContent = text;
    setStatus(`Recording · ${text}. Your camera stays on until you stop.`);
    if (frames.length >= MAX_FRAMES) stopRecording();
  }

  get("start-timelapse").addEventListener("click", () => {
    if (!camera || recording || exporting) return;
    frames = [];
    recording = true;
    get("start-timelapse").disabled = true;
    get("disable-camera").hidden = true;
    get("capture-interval").disabled = true;
    get("recording-dock").hidden = false;
    captureFrame();
    captureTimer = setInterval(captureFrame, Number(get("capture-interval").value) * 1000);
  });

  async function createVideo() {
    const mimeType = ["video/webm;codecs=vp8", "video/webm", "video/mp4"].find((type) => MediaRecorder.isTypeSupported(type));
    if (!mimeType) throw new Error("No supported video format");
    const output = canvas.captureStream(FPS);
    const chunks = [];
    const recorder = new MediaRecorder(output, { mimeType, videoBitsPerSecond: 2000000 });
    const finished = new Promise((resolve, reject) => {
      recorder.ondataavailable = (event) => { if (event.data.size) chunks.push(event.data); };
      recorder.onerror = (event) => reject(event.error || new Error("Video encoding failed"));
      recorder.onstop = () => resolve(new Blob(chunks, { type: mimeType }));
    });
    // Replay snapshots at 12 fps to produce a genuinely shortened video,
    // rather than a real-time recording containing long frozen frames.
    recorder.start();
    try {
      for (let i = 0; i < frames.length; i++) {
        const bitmap = await createImageBitmap(frames[i]);
        context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
        bitmap.close();
        setStatus(`Creating your video… ${Math.round((i + 1) / frames.length * 100)}%. Keep this tab visible.`);
        await new Promise((resolve) => setTimeout(resolve, 1000 / FPS));
      }
    } finally {
      if (recorder.state !== "inactive") recorder.stop();
      output.getTracks().forEach((track) => track.stop());
    }
    return finished;
  }

  async function stopRecording() {
    if (!recording) return;
    recording = false;
    exporting = true;
    clearInterval(captureTimer);
    captureTimer = null;
    releaseCamera();
    get("recording-dock").hidden = true;
    try {
      // Include a snapshot already being compressed when Stop was pressed.
      if (capturing) await capturing;
      if (!frames.length) { setStatus("No frames captured yet. Enable your camera and try again."); return; }
      const blob = await createVideo();
      if (resultURL) URL.revokeObjectURL(resultURL);
      resultURL = URL.createObjectURL(blob);
      get("timelapse-playback").src = resultURL;
      get("download-timelapse").href = resultURL;
      get("download-timelapse").download = `study-timelapse-${new Date().toISOString().replace(/[:.]/g, "-")}.${blob.type.startsWith("video/mp4") ? "mp4" : "webm"}`;
      get("timelapse-result").hidden = false;
      get("camera-panel").open = true;
      setStatus(`Ready: ${frames.length} frames, about ${(frames.length / FPS).toFixed(1)} seconds of video. Camera off. Download to keep it.`);
      frames = [];
    } catch {
      setStatus("Couldn’t create the video. Your frames are still here — use Retry video export. Keep this tab open.");
      get("retry-export").hidden = false;
    } finally {
      exporting = false;
      get("enable-camera").disabled = false;
      get("capture-interval").disabled = false;
    }
  }

  get("stop-timelapse").addEventListener("click", stopRecording);
  const retry = document.createElement("button");
  retry.id = "retry-export";
  retry.textContent = "Retry video export";
  retry.hidden = true;
  retry.addEventListener("click", () => { retry.hidden = true; recording = true; stopRecording(); });
  get("camera-status").after(retry);
  document.addEventListener("visibilitychange", () => {
    if (recording) setStatus(document.hidden ? "Capture paused while this tab is hidden. Your camera is still on." : "Recording resumed. Your camera is on.");
  });
  window.addEventListener("beforeunload", (event) => {
    if (recording || exporting || frames.length || resultURL) { event.preventDefault(); event.returnValue = ""; }
  });
  window.addEventListener("pagehide", () => {
    clearInterval(captureTimer);
    releaseCamera();
  });
})();
