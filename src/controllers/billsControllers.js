const { getBills, newBill } = require('../models/billsModels');

const bills = async (req, res) => {
    console.log(req.params.id)
    const bills = await getBills(req.params.id);
    if(bills.length === 0) {
        return res.send({msg: 'You have no bills yet. Add a bill in the form below!'});
    }
    res.send({msg: 'success', bills})
};

const createBill = async (req, res) => {
    let dbData = req.body;
    console.log(dbData);
    const result = await newBill(dbData);
    if(!result) {
        res.send({msg: 'Something went wrong.'});
    }
    res.send({msg: 'success', result})
};

module.exports = {
    bills, createBill
};