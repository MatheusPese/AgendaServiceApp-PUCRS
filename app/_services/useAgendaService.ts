//path: app/_services/useAgendaService.ts

import {create} from 'zustand';

import { useRouter, useSearchParams } from 'next/navigation';
import { useFetch } from '@/app/_helpers/client';

export { useAgendaService }

interface IAgenda{
    id: string,
    name: string,
    ownerId: string,
    participantsIds: string[]
}

interface IAgendaStore{
    userAgendas?: IAgenda[],
    agenda?: IAgenda,
}

interface IAgendaService extends IAgendaStore{
    create: (params: Partial<IAgenda>) => Promise<void>;
    update: (id:string, params: Partial<IAgenda>) => Promise<void>;
    delete: (id:string) => Promise<void>;
    removeParticipant: (id:string, participantId: string) => Promise<void>;
    getCurrentUserAgendas: () => Promise<void>;
}

const initialState ={
    userAgendas: undefined,
    agenda: undefined,
}

const agendaStore = create<IAgendaStore>(() => initialState);

function useAgendaService(): IAgendaService{
    const fetch = useFetch();
    const router = useRouter();
    const searchParams = useSearchParams();
    const { userAgendas, agenda } = agendaStore();

    return {
        userAgendas,
        agenda,
        create: async (params:any) => {
            await fetch.post(`/api/agenda/`, params);
            router.push('/');
        },
        update: async (id:string, params: Partial<IAgenda>) => {
            await fetch.put(`/api/agenda/${id}`, params);
        },
        delete: async (id:string) => {
            await fetch.delete(`/api/agenda/${id}`);
            router.push('/');
        },

        getCurrentUserAgendas: async () => {
            console.log("trying to fetch agendas from server...")

            try {
                agendaStore.setState({ userAgendas: await fetch.get(`/api/agendas/user/current`) });
                console.log("fetch completed\n", "useAgendas:\n", agendaStore.getState().userAgendas) 
                router.push('/');
                
            } catch (error) {
                console.log('Error fetching user agendas from server:\n', error);
            }
        },
        
        removeParticipant: async (id:string, participantId: string) => {
            await fetch.delete(`/api/agenda/${id}/participant/${participantId}`);
        }
    }
}