const { registerUser } = require('../models/userModels');

const register = async (req, res) => {
    const dbData = {
        full_name: req.body.full_name,
        email: req.body.email,
        password: req.body.password
    }
    let result = await registerUser(dbData);
    res.send({msg: 'registration successful', result})
};

const login = (req, res) => {
    res.send({msg: 'ok'})
};

module.exports = {
    register, login
};