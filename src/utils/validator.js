const joi = require('joi');

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


module.exports = {
    validateUser
};