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

const getAvailableGroups = async (dbData) => {
    const sql = `
    SELECT * FROM groups
    LEFT JOIN (SELECT accounts.group_id FROM accounts
               LEFT JOIN groups
               ON accounts.group_id = groups.id
               WHERE accounts.user_id = (?)) AS owned_groups
    ON groups.id = owned_groups.group_id
    WHERE group_id IS NULL;
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
    getAccount, getAvailableGroups, newAccount
};