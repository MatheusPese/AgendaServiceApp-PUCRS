import { db } from '../db';
import { headers } from 'next/headers';

const Appointment = db.Appointment;


export const appointmentOperations = {
    create,
    update,
    delete: _delete,
    getById,

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

async function getAgendaAppointments(){
    try{
        const agendaId = headers().get('userId');
        const agendaAppointments = await Appointment.find({ownerId:agendaId});
        return agendaAppointments;

    } catch(e) {
        throw `No appointments where found due to error: \n ${e}`;
    }
}

async function _delete(id: string){
    await Appointment.findByIdAndDelete(id)
}