const joi = require('joi');
const jwt = require('jsonwebtoken');

async function validateUser(req, res, next) {
    console.log('validated:', req.body);

    // validate body using joi
    const schema = joi.object({
        full_name: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().min(6).required(),
        password2: joi.ref('password'),
    });
    try {
        await schema.validateAsync(req.body, { abortEarly: false });
        next();
    } catch (error) {
        console.warn(error);
        res.status(400).send({
            error: error.details.map((e) => ({
            errorMsg: e.message,
            field: e.context.key,
            })),
        });
        return false;
    }
}

function authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) return res.status(400).json({ error: "unauthorized request"});
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
        if(err) {
            return res.status(403).json({ error: "bad token"});
        }
        console.log("data in jwt", data)
        req.id = data.id;
        next();
    })
}

module.exports = {
    validateUser, authenticateToken
};