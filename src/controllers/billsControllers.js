const { getBills, newBill } = require('../models/billsModels');

const bills = async (req, res) => {
    console.log(req.params.id)
    const result = await getBills(req.params.id);
    res.send({msg: 'success', result})
};

const createBill = async (req, res) => {
    let dbData = req.body;
    // hardcoded for testing
    dbData.group_id = 5;
    console.log(dbData);
    const result = await newBill(dbData);
    res.send({msg: 'success', result})
};

module.exports = {
    bills, createBill
};