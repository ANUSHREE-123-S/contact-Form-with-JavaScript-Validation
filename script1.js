document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Stop form submission

    // Get input values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Error message elements
    let nameErr = document.getElementById("nameError");
    let emailErr = document.getElementById("emailError");
    let messageErr = document.getElementById("messageError");
    let success = document.getElementById("successMsg");

    // Clear previous messages
    nameErr.textContent = "";
    emailErr.textContent = "";
    messageErr.textContent = "";
    success.textContent = "";

    let isValid = true;

    // Name validation
    if (name === "") {
        nameErr.textContent = "Name is required.";
        isValid = false;
    }

    // Email validation using regex
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailErr.textContent = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailErr.textContent = "Enter a valid email.";
        isValid = false;
    }

    // Message validation
    if (message === "") {
        messageErr.textContent = "Message cannot be empty.";
        isValid = false;
    }

    // If valid → show success message
    if (isValid) {
        success.textContent = "Form submitted successfully! (No real sending)";
        
        // Clear fields
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    }
});
