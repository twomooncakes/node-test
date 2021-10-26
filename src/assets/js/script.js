import { getData, postData } from './frontHelpers.js';
console.log("script.js")

const form = document.getElementById("acc-form");
const groupsArea = document.getElementById("groups");

const token = localStorage.getItem('userToken');
console.log(token);

// GET /accounts/
window.onload = async() => {
    let options = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };
    const accountData = await getData("accounts", options);
    groupsArea.innerHTML = "";
    accountData.accounts.map(group => {
        groupsArea.innerHTML += `
            <div class="group-card">
                <h2>ID: ${group.group_id}</h2>
                <h4>${group.name}</h4>
            </div>
        `;
    });
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
    // POST /accounts/
    postData("accounts", postOptions);
};
