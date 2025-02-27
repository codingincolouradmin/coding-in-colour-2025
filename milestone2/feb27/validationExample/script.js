document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const fullName = document.getElementById("fullname");
  const lastName = document.getElementById("lastname");
  const submitBtn = document.getElementById("submitBtn");

  function validateInput(element, regex, message) {
      const errorSpan = element.nextElementSibling;
      if (regex.test(element.value)) {
          errorSpan.textContent = ""; // Clear error message
          element.style.borderColor = "grey";
          return true;
      } else {
          errorSpan.textContent = message; // Show error message
          errorSpan.style.color = "red";
          element.style.borderColor = "red";
          return false;
      }
  }

  submitBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission
    
    const isFullNameValid = validateInput(fullName, /^[A-Za-z\s]+$/, "Full Name must contain only letters and spaces.");
    const isLastNameValid = validateInput(lastName, /^[A-Za-z]+$/, "Last Name must contain only letters.");

    if (isFullNameValid && isLastNameValid) {
        console.log("Form submitted successfully!");
    } else {
        console.log("Form validation failed!");
    }
});
});
