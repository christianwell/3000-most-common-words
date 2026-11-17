const { test, expect } = require('@playwright/test');
const { createHash } = require('node:crypto');

test('the continuous list matches every PDF headword and sense in order', async ({ page }) => {
  await page.goto('/');
  const words = await page.locator('.word').allTextContents();
  expect(words).toHaveLength(3001);
  // Independently extracted from all 11 PDF pages, expanding “a, an”.
  expect(createHash('sha256').update(words.join('\n')).digest('hex'))
    .toBe('e4419748524f1854704a35d515e3560bb260c66405cf7263524f7e8a5069cba0');
  await expect(page.getByRole('checkbox')).toHaveCount(3001);
});

test('legacy checks survive corrected labels without marking new senses known', async ({ page }) => {
  await page.addInitScript(() => {
    if (!localStorage.getItem('fixture-seeded')) {
      localStorage.setItem('be v., auxiliary', 'true');
      localStorage.setItem('light', 'true');
      localStorage.setItem('zone', 'true');
      localStorage.setItem('fixture-seeded', 'true');
    }
  });
  await page.goto('/');
  await expect(page.locator('#known-count')).toHaveText('3');
  await expect(page.getByRole('checkbox', { name: 'I know be', exact: true })).toBeChecked();
  await expect(page.getByRole('checkbox', { name: 'I know light (from the sun/a lamp)', exact: true })).toBeChecked();
  await expect(page.getByRole('checkbox', { name: 'I know light (not heavy)', exact: true })).not.toBeChecked();
  await page.getByRole('checkbox', { name: 'I know be', exact: true }).uncheck();
  await page.reload();
  await expect(page.locator('#known-count')).toHaveText('2');
  await expect(page.getByRole('checkbox', { name: 'I know be', exact: true })).not.toBeChecked();
});

test('checking, sentences, filters, and continuation work without leaving the list', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('I know abandon', { exact: true }).check();
  await page.getByLabel('I know abandon', { exact: true }).uncheck();
  await page.getByLabel('I know abandon', { exact: true }).check();
  await expect(page.locator('#today-count')).toHaveText('1');
  await page.getByLabel('Write a sentence for ability', { exact: true }).click();
  await page.getByLabel('Use “ability”', { exact: false }).fill('Her ability to learn is amazing. æøå 日本語');
  await page.reload();
  await page.getByLabel('Write a sentence for ability', { exact: true }).click();
  await expect(page.getByLabel('Use “ability”', { exact: false })).toHaveValue('Her ability to learn is amazing. æøå 日本語');
  await page.getByLabel('Filter words').selectOption('notes');
  await expect(page.locator('.word-row:visible')).toHaveCount(1);
  await page.getByRole('searchbox').fill('zzzzzz');
  await expect(page.locator('#empty-results')).toBeVisible();
  await page.getByRole('button', { name: 'Continue where I left off' }).click();
  await expect(page.getByRole('checkbox', { name: 'I know abandon', exact: true })).toBeFocused();
  await expect(page.getByRole('searchbox')).toHaveValue('');
  await expect(page.locator('.word-row:visible')).toHaveCount(3001);
});

test('double-click opens the selected dictionary, without checking the word', async ({ page, context }) => {
  await context.route(/https:\/\/(www\.)?(ordbogen|oxfordlearnersdictionaries|merriam-webster|thesaurus)\.com\//, (route) => route.fulfill({ body: 'Dictionary navigation fixture' }));
  await page.goto('/');
  await page.getByRole('searchbox').fill('bank (river)');
  const destinations = [
    ['ordbogen', 'https://www.ordbogen.com/search?query=bank'],
    ['oxford', 'https://www.oxfordlearnersdictionaries.com/search/english/?q=bank'],
    ['merriam', 'https://www.merriam-webster.com/dictionary/bank'],
    ['thesaurus', 'https://www.thesaurus.com/browse/bank'],
  ];
  for (const [dictionary, url] of destinations) {
    await page.getByLabel('Double-click to look up in').selectOption(dictionary);
    const popupPromise = context.waitForEvent('page');
    await page.locator('.word-row:not([hidden])').getByRole('button', { name: 'bank (river)', exact: true }).dblclick();
    const popup = await popupPromise;
    await expect(popup).toHaveURL(url);
    await popup.close();
    await expect(page.getByLabel('I know bank (river)', { exact: true })).not.toBeChecked();
  }
  await page.getByRole('searchbox').fill('according to');
  await expect(page.getByRole('link', { name: 'Look up according to (new tab)', exact: true })).toHaveAttribute('href', 'https://www.thesaurus.com/browse/according%20to');
  await page.reload();
  await expect(page.getByLabel('Double-click to look up in')).toHaveValue('thesaurus');
});

test('ETA learns the active pace and excludes pauses', async ({ page }) => {
  await page.clock.install({ time: new Date('2026-11-17T11:59:00+01:00') });
  await page.goto('/');
  await page.clock.pauseAt(new Date('2026-11-17T12:00:00+01:00'));
  await expect(page.locator('#eta-count')).toHaveText('25h 1m');
  await page.getByRole('button', { name: 'Start timer', exact: true }).click();
  await page.clock.runFor(10000);
  await page.getByLabel('I know a', { exact: true }).check();
  await page.clock.runFor(10000);
  await page.getByLabel('I know an', { exact: true }).check();
  await page.clock.runFor(10000);
  await page.getByLabel('I know abandon', { exact: true }).check();
  await expect(page.locator('#eta-caption')).toHaveText('10 sec / word · your pace');
  await expect(page.locator('#eta-count')).toHaveText('8h 20m');
  await expect(page.locator('#finish-time')).toContainText('17 Nov, 20:20');
  await page.getByRole('button', { name: 'Pause timer', exact: true }).click();
  await page.clock.runFor(60000);
  await expect(page.locator('#timer-value')).toHaveText('00:30');
  await expect(page.locator('#eta-count')).toHaveText('8h 20m');
  await page.getByRole('button', { name: 'Resume timer', exact: true }).click();
  await page.clock.runFor(5000);
  await expect(page.locator('#timer-value')).toHaveText('00:35');
});

test('mobile checklist and optional sentence/camera panels fit without horizontal scrolling', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  await page.getByRole('searchbox').fill('light (from the sun/a lamp)');
  await page.getByRole('button', { name: 'Write a sentence for light (from the sun/a lamp)', exact: true }).click();
  await expect(page.getByRole('textbox', { name: 'Use “light' })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.locator('#camera-panel summary').click();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test('ETA follows the list on desktop and mobile and stays in sync', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#sticky-eta')).toBeHidden();
  await page.getByLabel('I know abandon', { exact: true }).check();
  for (const width of [1280, 375]) {
    await page.setViewportSize({ width, height: 812 });
    await page.evaluate(() => window.scrollTo(0, 1600));
    await expect(page.locator('#sticky-eta')).toBeInViewport();
    await expect(page.locator('#sticky-eta-value')).toHaveText(await page.locator('#eta-count').textContent());
    await expect(page.locator('#sticky-finish-time')).toContainText('Done around');
    expect(await page.locator('#sticky-eta').evaluate((el) => el.getBoundingClientRect().top)).toBeLessThan(20);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await expect(page.locator('#sticky-eta')).toBeHidden();
});

test('denied camera permission leaves the camera off and checklist usable', async ({ page }) => {
  await page.addInitScript(() => {
    navigator.mediaDevices.getUserMedia = async () => { throw new DOMException('Denied', 'NotAllowedError'); };
  });
  await page.goto('/');
  await page.locator('#camera-panel summary').click();
  await page.getByRole('button', { name: 'Enable camera', exact: true }).click();
  await expect(page.locator('#camera-status')).toContainText('Camera permission was denied');
  await expect(page.getByRole('button', { name: 'Start timelapse', exact: true })).toBeDisabled();
  await page.getByRole('checkbox', { name: 'I know a', exact: true }).check();
  await expect(page.locator('#known-count')).toHaveText('1');
});

test.describe('camera with a synthetic device, never the user’s webcam', () => {
  test('records frames, stops the camera, exports a shortened playable video, and downloads it', async ({ page }) => {
    await page.goto('/');
    await page.locator('#camera-panel summary').click();
    await expect(page.locator('#camera-placeholder')).toBeVisible();
    await page.getByRole('button', { name: 'Enable camera', exact: true }).click();
    await expect(page.locator('#camera-status')).toContainText('Preview only');
    // Hold the actual browser video track to verify it ends after Stop.
    await page.evaluate(() => { window.testTrack = document.getElementById('camera-preview').srcObject.getVideoTracks()[0]; });
    await page.getByLabel('Take a frame every').selectOption('1');
    await page.getByRole('button', { name: 'Start timelapse', exact: true }).click();
    await expect(page.locator('#recording-label')).toContainText('4 frames', { timeout: 7000 });
    await page.getByRole('button', { name: 'Stop & create video', exact: true }).click();
    await expect(page.locator('#camera-status')).toContainText('Ready:', { timeout: 10000 });
    expect(await page.evaluate(() => window.testTrack.readyState)).toBe('ended');
    await expect(page.locator('#camera-placeholder')).toBeVisible();
    const playback = await page.locator('#timelapse-playback').evaluate(async (video) => {
      const ended = new Promise((resolve, reject) => {
        video.onended = () => resolve({ time: video.currentTime, width: video.videoWidth });
        video.onerror = () => reject(new Error('Video failed to decode'));
      });
      video.muted = true;
      await video.play();
      return ended;
    });
    expect(playback.width).toBe(640);
    expect(playback.time).toBeGreaterThan(0.1);
    expect(playback.time).toBeLessThan(1.5);
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download timelapse', exact: true }).click();
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toMatch(/^study-timelapse-.*\.(webm|mp4)$/);
    expect(await download.failure()).toBeNull();
  });
});
