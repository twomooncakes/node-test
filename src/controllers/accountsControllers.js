const { getAccount, newAccount } = require('../models/accountsModels');

const getData = async (req, res) => {
    let accounts = await getAccount(req.id);
    res.send({msg: 'ok', accounts})
};

const createAccount = async (req, res) => {
    let dbData = {
        group_id: parseInt(req.body.group_id),
        user_id: req.id,
    }
    let accounts = await newAccount(dbData);
    res.send({msg: 'ok', accounts})
};



module.exports = {
    getData, createAccount
};