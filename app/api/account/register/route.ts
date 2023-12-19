import joi from 'joi';

import { userOperations } from '@/app/_helpers/server';
import { apiHandler } from '@/app/_helpers/server/api';

module.exports = apiHandler({
    POST: register
});

async function register(req: Request) {
    const body = await req.json();
    await userOperations.create(body);
}

register.schema = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    email: joi.string().required(),
    phone: joi.string().required(),
    password: joi.string().min(6).required(),

});