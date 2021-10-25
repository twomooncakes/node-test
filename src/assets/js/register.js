console.log("register.js")

const URL = 'http://localhost:3000/user/register';
const form = document.getElementById("reg-form");

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
};
