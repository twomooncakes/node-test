// const { getDBdata } = require('../models/userModels');

const register = async (req, res) => {
    res.send({msg: 'registration successful'})
};

const login = (req, res) => {
    res.send({msg: 'ok'})
};

module.exports = {
    register, login
};