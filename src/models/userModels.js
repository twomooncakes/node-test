const { dbAction } = require('../utils/dbHelper');

const registerUser = async (dbData) => {
    const sql = `
        INSERT INTO users (full_name, email, password)
        VALUES (?, ?, ?)
    `;
    console.log(Object.values(dbData));
    return await dbAction(sql, Object.values(dbData));
};

const checkUser = async (email) => {
    const sql = `
        SELECT * FROM users
        WHERE email = (?)
    `;
    return await dbAction(sql, [email]);
};


module.exports = {
    registerUser, checkUser
};