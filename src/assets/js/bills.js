import { getData, postData } from './frontHelpers.js';
console.log("bills.js")

const billsArea = document.getElementById("bills");
const form = document.getElementById("bill-form");
const token = localStorage.getItem('userToken');
console.log(token);
const groupId = localStorage.getItem('currentGroupId');

// GET /bills/:id
window.onload = async() => {
    let options = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const billData = await getData(`bills/${groupId}`, options);
    if(!billData.bills) {
        // redirect if token expires
        if(billData.error === "bad token") window.location.href = (`login.html`);
        billsArea.innerHTML = `
            <div class="alert warning">
                <p>${billData.msg}</p>
            </div>
        `;
        return;
    }
    // Display Bills
    await billData.bills.map(bill => {
        document.querySelector("tbody").innerHTML += `
            <tr>
                <td>${bill.id}</td>
                <td>${bill.description}</td>
                <td>${bill.amount}</td>
            </tr>
        `;
    });
}

form.onsubmit = async (event) => {
    event.preventDefault();
    console.log('sending');
    const formData = new FormData(form);
    console.log('formData', Object.fromEntries(formData));
    const body = Object.fromEntries(formData);
    body.group_id = groupId;

    let postOptions = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(body),
    }
    // POST /bills/
    const createBillData = await postData("bills", postOptions);
    
    if(!createBillData.result) {
        billsArea.innerHTML = `
            <div class="alert error">
                <p>${createBillData.msg}</p>
            </div>
        `;
        return;
    }
    location.reload();
};