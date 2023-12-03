
function validateLogin() {
    var username = document.getElementById("Username").value;
    var password = document.getElementById("password").value;

    // Check if credentials are valid
    if (username === "user" && password === "P@ssw0rd123") {
        // Redirect to the pizza page (replace 'pizza.html' with the actual page)
        window.location.href = 'Homepage.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
}
function togglePasswordVisibility() {
var passwordInput = document.getElementById("password");
var eyeIcon = document.getElementById("eyeIcon");

// Toggle the password field's type between "password" and "text"
passwordInput.type = passwordInput.type === "password" ? "text" : "password";

// Change the eye icon based on the password field's type
eyeIcon.className = passwordInput.type === "password" ? "fas fa-eye" : "fas fa-eye-slash";
}
