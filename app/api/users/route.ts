import joi from 'joi';

import { userOperations } from '@/app/_helpers/server';
import { apiHandler } from '@/app/_helpers/server/api';

module.exports = apiHandler({
    GET: getAll,
    POST: create
});

async function getAll() {
    return await userOperations.getAll();
}

async function create(req: Request) {
    const body = await req.json();
    await userOperations.create(body);
}

create.schema = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    username: joi.string().required(),
    password: joi.string().min(6).required(),
});