/**
 * Toggle Handling Function:
 * This is my function that is going to perform the toggle
 * 
 * If the text is in the display case
 *   - Update the text to hidden
 *   - Update the src of the image to be 'plus'
 * else
 *   - Update the text to display case
 *   - Update the src of the image to be 'minus'
 */
function toggleText (button, text) {
  if (text.className == "faq-dynamic-row-content_show") {
    text.className = "faq-dynamic-row-content_hidden"
    button.setAttribute("src", "./images/icon-plus.svg")
  } else {
    text.className = "faq-dynamic-row-content_show"
    button.setAttribute("src", "./images/icon-minus.svg")
  }
}


/**
 * Loop to go from 1 to 4 -> Modified in the future
 * 
 * Grab the button, and the text
 * Add an event listener on the button, and call toggleText
 * passing in the elements we need
 */
for (let i = 1; i <= 4; i++) {
  const button = document.getElementById(`button-${i}`)
  const text = document.getElementById(`text-${i}`)
  button.addEventListener("click", () => {
    toggleText(button, text)
  })
}
