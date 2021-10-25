const { registerUser, checkUser } = require('../models/authModels');
const { hashValue } = require('../utils/hashHelper');

const register = async (req, res) => {
    const newUser = {
        full_name: req.body.full_name,
        email: req.body.email,
        password: hashValue(req.body.password)
    }
    const result = await registerUser(newUser);
    res.send({msg: 'registration successful', result})
};

const login = async (req, res) => {
    const userData = req.body;
    const result = await checkUser(userData.email);
    if(result.length === 0) {
        return res.status(400).send({ error: 'Incorrect email or password'});
    }
    res.send({msg: 'ok', result})
};

module.exports = {
    register, login
};