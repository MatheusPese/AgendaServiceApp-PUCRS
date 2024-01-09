import joi from 'joi';

import { agendaOperations } from "@/app/_helpers/server";
import { apiHandler } from "@/app/_helpers/server/api";

module.exports = apiHandler({
      GET: getCurrentUserAgendas,
  });


async function getCurrentUserAgendas() {
  return await agendaOperations.getCurrentUserAgendas();
}


const agendaSchema = joi.object({
      name: joi.string().required(),
      ownerId: joi.string().required(),
      participants: joi.array().items(joi.string()),
      appointments: joi.array().items(joi.string()),
});  