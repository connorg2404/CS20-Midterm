// script.js
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const amount = document.getElementById("amount").value.trim();

    // Validate name
    if (name === "") {
        alert("Please enter your full name.");
        return false;
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate donation amount
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid donation amount.");
        return false;
    }

    alert("Thank you for your donation!");
    return true;
}
