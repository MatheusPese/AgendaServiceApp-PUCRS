import { db } from '../db';
import { headers } from 'next/headers';

const Appointment = db.Appointment;


export const appointmentOperations = {
    create,
    update,
    delete: _delete,
    getById,
    getCurrentAgendaAppointments,

}

async function create(params:any){
    // creates appointment with specified parameters
    const appointment = new Appointment(params);

    // save appointment to database
    await appointment.save();
}


async function update (id: string, params:any){
    const appointment = await Appointment.findById(id);

    // validate
    if (!appointment) throw 'Appointment not found';

    // copy params propertues to appointment
    Object.assign(appointment, params);

    // save appointment to database
    await appointment.save();
}

async function getById(id: string) {
    try {
        return await Appointment.findById(id);
    } catch {
        throw 'Appointment Not Found';
    }
}

async function getCurrentAgendaAppointments(agendaId:string){
    try{
        const agendaAppointments = await Appointment.find({agendaId:agendaId});
        return agendaAppointments;

    } catch(e) {
        return {
            request: { agendaId: agendaId },
            message: 'Error finding appointments with provided agendaId',
            statusCode: 500,
            error: e,
        };
        
    }
}

async function _delete(id: string){
    await Appointment.findByIdAndDelete(id)
}