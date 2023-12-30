import { db } from './db';

const Agenda = db.Agenda;


export const agendaOperations = {
    create,
    update,
    delete: _delete,

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