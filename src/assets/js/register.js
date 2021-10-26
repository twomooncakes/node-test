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
    let regData = await postData("auth/register", postOptions);
    if(regData.msg === "Registration successful!") {
        window.location.href = (`login.html`);
    } else {
        const output = document.getElementById("messageOutput");
        output.classList.add("alert");
        output.classList.add("error");
        output.innerHTML = "";
        regData.error.map(error => {
            if (error.field === "full_name") {
                console.log(1);
                output.innerHTML += `
                    Full name shouldn't be empty!<br>
                `;
            } else if (error.field === "email") {
                console.log(2);
                output.innerHTML += `
                    Email shouldn't be empty!<br>
                `;
            } else if (error.field === "password") {
                console.log(3);
                output.innerHTML += `
                    Password should be at least 6 characters long!<br>
                `;
            } else if (error.field === "password2") {
                console.log(4);
                output.innerHTML += `
                    Password fields must match!<br>
                `;
            } 
        })
    }
};
