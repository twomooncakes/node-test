const { registerUser } = require('../models/userModels');

const register = async (req, res) => {
    dbData = {
        full_name: 'Dan Brown',
        email: 'dan@mail.com',
        password: '123456asdf'
    }
    let dbResult = await registerUser(dbData);
    res.send({msg: 'registration successful', dbResult})
};

const login = (req, res) => {
    res.send({msg: 'ok'})
};

module.exports = {
    register, login
};