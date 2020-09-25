
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confpassword = document.getElementById('confpassword');


// click submit btn

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();

})
// more email

const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf('@');
    if (atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if (dot <= atSymbol + 2) return false;
    if (dot === emailVal.length - 1) return false;
    return true;
}

// create validate function

const validate = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const confpasswordVal = confpassword.value.trim();


    // validate for username

    if (usernameVal === "") {
        setErrorMsg(username, 'username cannot be blank');
    } else if (usernameVal.length <= 3) {
        setErrorMsg(username, 'username min 3 char');
    } else {
        setSuccessMsg(username)
    }

    // for email validation

    if (emailVal === "") {
        setErrorMsg(email, 'email can not be blank');
    } else if (!isEmail(emailVal)) {
        setErrorMsg(email, 'email are not valid')
    } else {
        setSuccessMsg(email);
    }

    // for phone
    if (phoneVal === "") {
        setErrorMsg(phone, 'phone number can not be blank');
    } else if (phoneVal.length <= 9) {
        setErrorMsg(phone, 'phone number are not valid')
    } else {
        setSuccessMsg(phone);
    }

    // for password

    if (passwordVal === "") {
        setErrorMsg(password, 'password can not be blank');
    } else if (passwordVal.length <= 5) {
        setErrorMsg(password, 'password are not valid')
    } else {
        setSuccessMsg(password);
    }

    if (confpasswordVal === "") {
        setErrorMsg(confpassword, 'confirm password can not be blank');
    } else if (confpasswordVal != passwordVal) {
        setErrorMsg(confpassword, 'password are not matched')
    } else {
        setSuccessMsg(confpassword);
    }


}
function setErrorMsg(input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}

function setSuccessMsg(input) {
    const formControl = input.parentElement;

    formControl.className = "form-control success";

}
