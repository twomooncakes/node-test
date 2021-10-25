const { getBills } = require('../models/billsModels');

const bills = async (req, res) => {
    console.log(req.params.id)
    const result = await getBills(req.params.id);
    res.send({msg: 'success', result})
};

module.exports = {
    bills
};