const { dbAction } = require('../utils/dbHelper');

const getBills = async (id) => {
    const sql = `
        SELECT * FROM bills
        LEFT JOIN groups
        ON groups.id = bills.group_id
        WHERE bills.group_id = (?)
    `;
    return await dbAction(sql, [id]);
};

const newBill = async (dbData) => {
    const sql = `
        INSERT INTO bills (amount, description, group_id)
        VALUES (?, ?, ?)
    `;
    return await dbAction(sql, Object.values(dbData));
};


module.exports = {
    getBills, newBill
};