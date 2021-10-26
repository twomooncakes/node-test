import { getData, postData } from './frontHelpers.js';
console.log("script.js")

const form = document.getElementById("acc-form");
const groupsArea = document.getElementById("output");

const token = localStorage.getItem('userToken');
console.log(token);

// GET /accounts/
window.onload = async() => {
    let options = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };

    // GET /accounts/available-groups for dropdown
    const availableGroupData = await getData("accounts/available-groups", options);

    // redirect if token expires
    if(availableGroupData.error === "bad token") window.location.href = (`login.html`);
    
    const dropdown = document.getElementById("group-select");
    availableGroupData.groups.map(group => {
        dropdown.innerHTML += `
            <option value="${group.id}">${group.id} - ${group.name}</option>
        `;
    })

    // GET /accounts/
    const accountData = await getData("accounts", options);
    groupsArea.innerHTML = "";

    if(!accountData.accounts) {
        groupsArea.innerHTML = `
            <div class="alert warning">
                <p>${accountData.msg}</p>
            </div>
        `;
        return;
    } 
    // if no errors, use grid styling
    groupsArea.id = "groups";

    // Display Group Cards
    await accountData.accounts.map(group => {
        groupsArea.innerHTML += `
            <div class="group-card" id="${group.group_id}">
                <h2>ID: ${group.group_id}</h2>
                <h4>${group.name}</h4>
            </div>
        `;
    });

    // Click Event for Group
    const groupCards = document.querySelectorAll(".group-card");
    for(let card of groupCards) {
        card.onclick = (event) => {
            console.log(event.target.id);
            localStorage.setItem('currentGroupId', event.target.id);
            window.location.href = (`bills.html`);
        }
    }
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
    const createAccountData = await postData("accounts", postOptions);

    if(!createAccountData.result) {
        groupsArea.innerHTML = `
            <div class="alert error">
                <p>${createAccountData.msg}</p>
            </div>
        `;
        return;
    }
    location.reload();
};
