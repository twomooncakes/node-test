const URL = 'http://localhost:3000/';

// GET Universal fetch with or without token
export async function getData(endpoint, options = {}) {
    const res = await fetch(URL + `${endpoint}/`, options);
    const data = await res.json();
    console.log(data);
    return data;
}

// POST Universal fetch with or without token
export async function postData(endpoint, options) {
    const res = await fetch(URL + `${endpoint}/`, options);
    const data = await res.json();
    console.log(data);
}
