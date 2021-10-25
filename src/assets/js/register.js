import { postData } from './frontHelpers.js';
console.log("register.js")

const URL = 'http://localhost:3000/auth/register';
const form = document.getElementById("reg-form");

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
    let regData = postData("auth/register", postOptions);
};
