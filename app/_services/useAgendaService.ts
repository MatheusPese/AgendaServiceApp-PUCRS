//path: app/_services/useAgendaService.ts

import { create } from 'zustand';

import { useRouter, useSearchParams } from 'next/navigation';
import { useFetch } from '@/app/_helpers/client';

export { useAgendaService };

import { IAppointment } from './useAppointmentService';

export interface IAgenda {
  id: string;
  name: string;
  ownerId: string;
  participantsIds: string[];
  appointments: IAppointment[];
}

interface IAgendaStore {
  userAgendas?: IAgenda[];
  currentAgenda?: IAgenda;
  agenda?: IAgenda;
}

interface IAgendaService extends IAgendaStore {
  create: (params: Partial<IAgenda>) => Promise<void>;
  update: (id: string, params: Partial<IAgenda>) => Promise<void>;
  delete: (id: string) => Promise<void>;
  removeParticipant: (id: string, participantId: string) => Promise<void>;
  getCurrentUserAgendas: () => Promise<void>;
  getAgenda: (id: string) => Promise<IAgenda | null>; // Adjusted the return type to include null
}

const initialState = {
  userAgendas: undefined,
  currentAgenda: undefined,
  agenda: undefined,
};

const agendaStore = create<IAgendaStore>(() => initialState);

function useAgendaService(): IAgendaService {
  const fetch = useFetch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { userAgendas, currentAgenda, agenda } = agendaStore();

  return {
    userAgendas,
    currentAgenda,
    agenda,
    create: async (params: any) => {
      await fetch.post(`/api/agenda/`, params);
    },
    update: async (id: string, params: Partial<IAgenda>) => {
      await fetch.put(`/api/agenda/${id}`, params);
    },
    delete: async (id: string) => {
      await fetch.delete(`/api/agenda/${id}`);
    },

    getCurrentUserAgendas: async () => {
      console.log('trying to fetch agendas from server...');

      try {
        const fetchedUserAgendas = await fetch.get(`/api/agendas/user/current`);
        agendaStore.setState({ userAgendas: fetchedUserAgendas });
        console.log('fetch completed\n', 'useAgendas:\n', agendaStore.getState().userAgendas);
        router.push('/');
      } catch (error) {
        console.log('Error fetching user agendas from server:\n', error);
      }
    },
    getAgenda: async (id: string) => {
      try {
        const fetchedAgenda = await fetch.get(`/api/agenda/${id}`);
        if (fetchedAgenda !== currentAgenda) {
          agendaStore.setState({ currentAgenda: fetchedAgenda });
        }
        return fetchedAgenda;
      } catch (error) {
        console.log('Error fetching agenda from server:', error);
        return null; // Return null in case of an error
      }
    },
    removeParticipant: async (id: string, participantId: string) => {
      await fetch.delete(`/api/agenda/${id}/participant/${participantId}`);
    },
  };
}
