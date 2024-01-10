import joi from 'joi';

import { appointmentOperations } from '@/app/_helpers/server';
import { apiHandler } from '@/app/_helpers/server/api';

module.exports = apiHandler({
    POST: create,
});

async function create(req: Request) {
    const body = await req.json();
    await appointmentOperations.create(body);
}


const appointmentSchema = joi.object({
      agendaId: joi.string().required(),
      
      client: joi.string().required(),
      service: joi.string().required(),
      employee: joi.string().required(),
      time: joi.string().required(),
});

create.schema = appointmentSchema;
