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


module.exports = {
    getBills
};