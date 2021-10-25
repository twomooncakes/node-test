console.log("login.js")

const URL = 'http://localhost:3000/auth/login';
const form = document.getElementById("log-form");

form.onsubmit = async (event) => {
    event.preventDefault();
    console.log('sending');
    const formData = new FormData(form);
    console.log('formData', Object.fromEntries(formData));

    const res = await fetch(`${URL}`, {
        method: 'POST',
        headers: {
        'Content-type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
    });
    const data = await res.json();
    console.log('data', data);
    if(data.msg === "Successfully logged in!") {
        localStorage.setItem("userToken", data.token);
    }
};
