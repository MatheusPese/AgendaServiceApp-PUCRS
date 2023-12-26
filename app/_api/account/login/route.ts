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
    cookies().set('authorization', token, { httpOnly: true });

    return user;
}

login.schema = joi.object({
    email: joi.string().required(),
    password: joi.string().required()
});