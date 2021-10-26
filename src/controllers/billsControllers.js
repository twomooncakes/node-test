const { getBills, newBill } = require('../models/billsModels');

const bills = async (req, res) => {
    console.log(req.params.id)
    const bills = await getBills(req.params.id);
    res.send({msg: 'success', bills})
};

const createBill = async (req, res) => {
    let dbData = req.body;
    console.log(dbData);
    const result = await newBill(dbData);
    res.send({msg: 'success', result})
};

module.exports = {
    bills, createBill
};