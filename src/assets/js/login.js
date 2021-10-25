import { postData } from './frontHelpers.js';
console.log("script.js")
console.log("login.js")

const URL = 'http://localhost:3000/auth/login';
const form = document.getElementById("log-form");

form.onsubmit = async (event) => {
    event.preventDefault();
    console.log('sending');
    const formData = new FormData(form);
    console.log('formData', Object.fromEntries(formData));

    let postOptions = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
    }
    // POST /auth/login/
    let logData = postData("auth/login", postOptions);
    if(logData.msg === "Successfully logged in!") {
        localStorage.setItem("userToken", logData.token);
    }
};
