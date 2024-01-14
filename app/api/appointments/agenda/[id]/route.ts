import joi from 'joi';

import { appointmentOperations } from '@/app/_helpers/server';
import { apiHandler } from '@/app/_helpers/server/api';

module.exports = apiHandler({
    GET: getCurrentAgendaAppointments,
});

async function getCurrentAgendaAppointments(req: Request, { params: { id } }: any){
     return await appointmentOperations.getCurrentAgendaAppointments(id);
}

