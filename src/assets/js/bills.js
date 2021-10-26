import { getData, postData } from './frontHelpers.js';
console.log("bills.js")

const form = document.getElementById("bill-form");
const token = localStorage.getItem('userToken');
console.log(token);
// const groupId = localStorage.getItem('currentGroupId');
// hardcoded for testing
const groupId = 1;

// GET /bills/:id
window.onload = async() => {
    let options = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const accountData = await getData(`bills/${groupId}`, options);
}

form.onsubmit = async (event) => {
    event.preventDefault();
    console.log('sending');
    const formData = new FormData(form);
    console.log('formData', Object.fromEntries(formData));

    let postOptions = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(Object.fromEntries(formData)),
    }
    // POST /bills/
    postData("bills", postOptions);
};