const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});


function checkInputs() {
    //get the values from the inputs
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (fnameValue === '') {
        //show error
        //add error class
        setErrorFor(fname, 'First Name cannot be empty');
        document.getElementById("fname").placeholder = " ";

    }

    if (lnameValue === '') {
        setErrorFor(lname, 'Last Name cannot be empty');
        document.getElementById("lname").placeholder = " ";

    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be empty');
        document.getElementById("email").placeholder = " ";
    }

    if (emailValue !== mailformat) {
        setErrorFor(email, 'Looks like this is not an email');
        document.getElementById("email").placeholder = " ";
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be empty');
        document.getElementById("password").placeholder = " ";

    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;
    document.getElementById("fname").placeholder = " ";


    //add error class
    formControl.className = 'form-control error';
}