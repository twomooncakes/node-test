import { postData } from './frontHelpers.js';
console.log("login.js")

const form = document.getElementById("log-form");

form.onsubmit = async(event) => {
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
    let logData = await postData("auth/login", postOptions);
    if(logData.msg === "Successfully logged in!") {
        await localStorage.setItem("userToken", logData.token);
        window.location.href = (`groups.html`);
    }
};
