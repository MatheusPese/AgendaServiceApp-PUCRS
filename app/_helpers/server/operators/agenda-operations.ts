import { db } from '../db';
import { headers } from 'next/headers';

const Agenda = db.Agenda;


export const agendaOperations = {
    create,
    update,
    delete: _delete,
    getById,
    getCurrentUserAgendas,
    removeParticipant,

}

async function create(params:any){
    // creates agenda with specified parameters
    const agenda = new Agenda(params);

    // save agenda to database
    await agenda.save();
}


async function update (id: string, params:any){
    const agenda = await Agenda.findById(id);

    // validate
    if (!agenda) throw 'Agenda not found';

    // copy params propertues to agenda
    Object.assign(agenda, params);

    // save agenda to database
    await agenda.save();
}

async function getById(id: string) {
    try {
        return await Agenda.findById(id);
    } catch {
        throw 'Agenda Not Found';
    }
}

async function getCurrentUserAgendas(){
    try{
        const currentUserId = headers().get('userId');
        const userAgendas = await Agenda.find({ownerId:currentUserId});
        return userAgendas;

    } catch(e) {
        throw `No agendas where found due to error: \n ${e}`;
    }
}

async function removeParticipant(id:string, participant:any) {
    try {    
    const agenda = await Agenda.findById(id);
    agenda.participants.remove(participant);

    } catch(err){
        throw(err)
    }
}

async function _delete(id: string){
    await Agenda.findByIdAndDelete(id)
}