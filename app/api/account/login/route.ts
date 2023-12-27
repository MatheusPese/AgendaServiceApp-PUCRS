import { cookies } from 'next/headers';
import joi from 'joi';

import { userOperations } from '@/app/_helpers/server';
import { apiHandler } from '@/app/_helpers/server/api';

module.exports = apiHandler({
    POST: login
});

async function login(req: Request) {

    const body = await req.json();
    const { user, token } = await userOperations.authenticate(body);

    // return jwt token in http only cookie
    cookies().set('authorization', token, { httpOnly: true, secure:true });

    return user;
}

const loginSchema = joi.object({
    identifier: joi.alternatives().try(
        joi.object({
            phone: joi.string().required(),
        }),
        joi.object({
            email: joi.string().email().required(),
        })
    ).required(),
    password: joi.string().required(),
});