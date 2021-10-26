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
    }
    const output = document.getElementById("messageOutput");
    output.innerHTML = "";
    regData.error.map(error => {
        if(error.field === "password2") {
            output.innerHTML += `
                <p>Password fields must match!</p>
            `;
        } else if (error.field === "password") {
            output.innerHTML += `
                <p>Password should be at least 6 characters long!</p>
            `;
        } else if (error.field === "full_name") {
            output.innerHTML += `
                <p>Full name shouldn't be empty!</p>
            `;
        } else if (error.field === "email") {
            output.innerHTML += `
                <p>Email shouldn't be empty!</p>
            `;
        }
        
    })

    
};
