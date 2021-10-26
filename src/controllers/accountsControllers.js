const { getAccount, newAccount } = require('../models/accountsModels');

const getData = async (req, res) => {
    let accounts = await getAccount(req.id);
    if(accounts.length === 0) {
        return res.send({msg: 'You have no groups associated with your account. Add a group in the form below!'});
    }
    res.send({msg: 'ok', accounts});
};

const createAccount = async (req, res) => {
    let dbData = {
        group_id: parseInt(req.body.group_id),
        user_id: req.id
    }
    let result = await newAccount(dbData);
    if(!result) {
        res.send({msg: 'Something went wrong.'});
    }
    res.send({msg: 'ok', result});
};



module.exports = {
    getData, createAccount
};