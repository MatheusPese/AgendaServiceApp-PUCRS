import joi from 'joi';

import { appointmentOperations } from '@/app/_helpers/server';
import { apiHandler } from '@/app/_helpers/server/api';

module.exports = apiHandler({
    GET: getById,
    PUT: update,
    DELETE: _delete
});


async function getById(req: Request, { params: { id } }: any){
    return await appointmentOperations.getById(id)
}
async function update(req: Request,  { params: { id } }:any){
      const body = await req.json();
      await appointmentOperations.update(id, body);
}

async function _delete(req: Request,  { params: { id } }:any) {
      await appointmentOperations.delete(id);
}

const agendaSchema = joi.object({
    name: joi.string().required(),
    participants: joi.array().items(joi.string()),
});

update.schema = agendaSchema;