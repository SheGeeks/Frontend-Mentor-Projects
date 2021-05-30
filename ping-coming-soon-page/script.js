const form = document.getElementById('form');
const email = document.getElementById('email');

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form success';
}

// Check email is valid 
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Please provide a valid email address');
    }
}
// Event Listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkEmail(email);
});