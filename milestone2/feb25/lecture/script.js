
function addElement() {
  const newDiv = document.createElement("div");
  const newContent = document.createTextNode("This is a div");
  newDiv.appendChild(newContent)
  document.body.appendChild(newDiv);
}

function modifyInnerText() {
  const child = document.getElementById("child1");
  child.innerText = "This is child 1";
}

function modifyAttributes() {
  const children = Array.from(document.getElementsByClassName("normal"))
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    const originalName = child.className
    child.setAttribute("class", `${originalName}-dark`);
  }
}

function removeChildren() {
  const parent = document.getElementById("parent");
  const children = document.getElementById("parent").childNodes;
  for (let i = 0; i < children.length; i++) {
    const stringNum = children[i].textContent;
    if (stringNum.trim() !== "") {
      const num = Number(stringNum);
      if (num%2 != 0) {
        parent.removeChild(children[i])
      }
    }
  }
}

// Button handling
const button = document.getElementById("button")
button.addEventListener("click", () => {
  modifyAttributes()
})


