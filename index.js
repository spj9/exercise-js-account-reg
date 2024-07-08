const form = document.getElementById('registration-form');
const nameInput = document.getElementById('name-input');
const usernameInput = document.getElementById('username-input');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const confirmPasswordInput = document.getElementById('confirm-password-input');
const submitBtn = document.getElementById('submit-btn');

// Add event listeners to labels to focus corresponding input
Array.prototype.forEach.call(form.querySelectorAll('label'), (label) => {
    label.addEventListener('click', () => {
        label.children[1].focus();
    });
});

// Add event listeners to inputs to validate and enable/disable submit button
nameInput.addEventListener('input', validateInput);
usernameInput.addEventListener('input', validateInput);
emailInput.addEventListener('input', validateInput);
passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', validateConfirmPassword);

// Validate input fields
function validateInput() {
    if (this.value.trim() === '') {
        this.classList.add('invalid');
    } else {
        this.classList.remove('invalid');
    }
    checkFormValidity();
}

// Validate password field
function validatePassword() {
    if (this.value.length < 8) {
        this.classList.add('invalid');
    } else {
        this.classList.remove('invalid');
    }
    checkFormValidity();
}

// Validate confirm password field
function validateConfirmPassword() {
    if (this.value !== passwordInput.value) {
        this.classList.add('invalid');
    } else {
        this.classList.remove('invalid');
    }
    checkFormValidity();
}

// Check form validity and enable/disable submit button
function checkFormValidity() {
    const isValid = Array.prototype.every.call(form.querySelectorAll('input'), (input) => {
        return input.value.trim()!== '' &&!input.classList.contains('invalid');
    });
    submitBtn.disabled =!isValid;
}

Array.prototype.forEach.call(form.querySelectorAll('input'), (input) => {
    input.addEventListener('input', checkFormValidity);
});

// Add event listener to form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const registrationData = {
        name: nameInput.value,
        username: usernameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
    };
    console.log(registrationData);
    // or alert(JSON.stringify(registrationData, null, 2));
});