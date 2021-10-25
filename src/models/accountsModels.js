const { dbAction } = require('../utils/dbHelper');

const getAccount = async (dbData) => {
    const sql = `
        SELECT * FROM accounts
        LEFT JOIN groups
        ON accounts.group_id = groups.id
        WHERE accounts.user_id = (?)
    `;
    console.log(Object.values(dbData));
    return await dbAction(sql, [dbData]);
};

const newAccount = async (dbData) => {
    const sql = `
        INSERT INTO accounts (group_id, user_id)
        VALUES (?, ?)
    `;
    console.log(Object.values(dbData));
    return await dbAction(sql, Object.values(dbData));
};


module.exports = {
    getAccount, newAccount
};