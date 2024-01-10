import joi from 'joi';

import { agendaOperations } from '@/app/_helpers/server';
import { apiHandler } from '@/app/_helpers/server/api';

module.exports = apiHandler({
    GET: getById,
    PUT: update,
    DELETE: _delete
});


async function getById(req: Request, { params: { id } }: any){
    return await agendaOperations.getById(id)
}
async function update(req: Request,  { params: { id } }:any){
      const body = await req.json();
      await agendaOperations.update(id, body);
}

async function _delete(req: Request,  { params: { id } }:any) {
      await agendaOperations.delete(id);
}

const agendaSchema = joi.object({
    name: joi.string().required(),
    participants: joi.array().items(joi.string()),
    appointments: joi.array().items(joi.string()),
});

update.schema = agendaSchema;