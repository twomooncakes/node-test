import { getData, postData } from './frontHelpers.js';
console.log("bills.js")

const form = document.getElementById("acc-form");
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