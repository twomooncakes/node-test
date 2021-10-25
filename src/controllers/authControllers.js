const { registerUser, checkUser } = require('../models/authModels');
const { hashValue, verifyHash } = require('../utils/hashHelper');
const jwt = require('jsonwebtoken');

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
    if(verifyHash(userData, result)) {
        const token = jwt.sign(
            {id: result[0].id, email: result[0].email}, 
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1h' },
        );    
        return res.send({msg: 'Successfully logged in!', token, email: result[0].email});
    }
    return res.status(400).send({ error: 'Incorrect email or password'})
};

module.exports = {
    register, login
};