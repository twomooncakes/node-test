const { dbAction } = require('../utils/dbHelper');

const getDBdata = async () => {
    const sql = `
        SELECT * FROM users
    `;
    return await dbAction(sql);
};

const registerUser = async (dbData) => {
    const sql = `
        INSERT INTO users (full_name, email, password)
        VALUES (?, ?, ?)
    `;
    console.log(dbData);
    return await dbAction(sql, Object.values(dbData));
};


module.exports = {
    getDBdata, registerUser
};