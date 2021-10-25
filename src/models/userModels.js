const { dbAction } = require('../utils/dbHelper');

const getDBdata = async () => {
    const sql = `
        SELECT * FROM users
    `;
    return await dbAction(sql);
};


module.exports = {
    getDBdata,
};