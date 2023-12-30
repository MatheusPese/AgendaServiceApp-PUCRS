import {create} from 'zustand';
import { IUser } from '@/app/_services/useUserService';
import { useFetch } from '@/app/_helpers/client';

export { useAgendaService }

interface IAgenda{
    id: string,
    name: string,
    ownerId: string,
    participants: IUser[]
}

interface IAgendaStore{
    agendas?: IAgenda[],
    agenda?: IAgenda,
}

interface IAgendaService extends IAgendaStore{
    create: (params: Partial<IAgenda>) => Promise<void>;
    update: (id:string, params: Partial<IAgenda>) => Promise<void>;
    delete: (id:string) => Promise<void>;
    removeParticipant: (id:string, participantId: string) => Promise<void>;
}

const initialState ={
    agendaas: undefined,
    user: undefined,
}

const agendaStore = create<IAgendaStore>(() => initialState);

function useAgendaService(): IAgendaService{
    const fetch = useFetch();

return {
    agendas: undefined,
    agenda: undefined,
    create: async (params:any) => {
        await fetch.post(`/api/agendas/`, params);
    },
    update: async (id:string, params: Partial<IAgenda>) => {
        await fetch.put(`/api/agendas/${id}`, params);
    },
    delete: async (id:string) => {
        await fetch.delete(`/api/agendas/${id}`);
    },
    removeParticipant: async (id:string, participantId: string) => {
        await fetch.delete(`/api/agendas/${id}/participants/${participantId}`);
    }
}
}


