// Handle toggling dark-light mode
const toggleButton = document.getElementById("toggle")

toggleButton.addEventListener("click", () => {
  // Grab root
  const root = document.documentElement;

  // Conditionally add or remove dark-mode
  if (root.classList.contains("dark-mode")) {
    // We are in Dark Mode
    root.classList.remove("dark-mode");
    toggleButton.textContent = "Dark";
  } else {
    // We are in Light Mode
    root.classList.add("dark-mode");
    toggleButton.textContent = "Light"
  }
})

// Handle duplication
const duplicateButton = document.getElementById("duplicate")

duplicateButton.addEventListener("click", () => {
  const parent = document.getElementsByClassName("container")[0]

  // Create the child to add 
  const child = document.createElement("span");
  child.setAttribute("class", "text");
  child.innerText = "This is text!"

  // Append
  parent.appendChild(child);
})

// Handle input & add
const input = document.getElementById("input")
const addButton = document.getElementById("add")

addButton.addEventListener("click", () => {
  // Grab parent
  const parent = document.getElementsByClassName("container")[0]
  // Create the child
  const child = document.createElement("span");
  child.setAttribute("class", "text");
  child.innerText = input.value
  parent.appendChild(child);
  // Reset
  input.value = "";
})