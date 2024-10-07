// List of words
const words = [
  "abandon",
  "ability",
  "able",
  "about",
  "above",
  "abroad",
  // ... add the rest of the words here ...
];

// Create list items dynamically
const list = document.getElementById("checkbox-list");
words.forEach((word) => {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = word;
  const label = document.createElement("label");
  label.textContent = word;
  label.htmlFor = word;
  li.appendChild(checkbox);
  li.appendChild(label);
  list.appendChild(li);
});

// Store checked state in local storage
const storage = window.localStorage;
list.addEventListener("change", (event) => {
  if (event.target.type === "checkbox") {
    const id = event.target.id;
    const checked = event.target.checked;
    storage.setItem(id, checked);
  }
});

// Restore checked state from local storage
words.forEach((word) => {
  const checkbox = document.getElementById(word);
  const checked = storage.getItem(word) === "true";
  checkbox.checked = checked;
});