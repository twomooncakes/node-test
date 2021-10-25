const { registerUser } = require('../models/userModels');
const { hashValue } = require('../utils/hashHelper');

const register = async (req, res) => {
    const newUser = {
        full_name: req.body.full_name,
        email: req.body.email,
        password: hashValue(req.body.password)
    }
    let result = await registerUser(newUser);
    res.send({msg: 'registration successful', result})
};

const login = (req, res) => {
    res.send({msg: 'ok'})
};

module.exports = {
    register, login
};