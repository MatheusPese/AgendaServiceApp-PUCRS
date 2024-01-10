//path: app/_services/useAppointmentService.ts

import { create } from 'zustand';

import { useRouter, useSearchParams } from 'next/navigation';
import { useFetch } from '@/app/_helpers/client';


import { IUser, useUserService } from './useUserService';
export { useAppointmentService };

export interface IAppointment {
  id: string;
  agendaId: string;
  
  client: string;
  service: string;
  timeDue: Date;
  employee: IUser | string; //accepts string in case employee does not have an associated account
}

interface IAppointmentStore {
  currentAppointment?: IAppointment;
  appointment?: IAppointment;
}

interface IAppointmentService extends IAppointmentStore {
  create: (params: Partial<IAppointment>) => Promise<void>;
  update: (id: string, params: Partial<IAppointment>) => Promise<void>;
  delete: (id: string) => Promise<void>;
  getAppointment: (id: string) => Promise<IAppointment | null>;
}

const initialState = {
  currentAppointment: undefined,
  appointment: undefined,
};

const appointmentStore = create<IAppointmentStore>(() => initialState);

function useAppointmentService(): IAppointmentService {
  const fetch = useFetch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { currentAppointment, appointment } = appointmentStore();

  return {
    currentAppointment,
    appointment,
    create: async (params: any) => {
      await fetch.post(`/api/appointment/`, params);
    },
    update: async (id: string, params: Partial<IAppointment>) => {
      await fetch.put(`/api/appointment/${id}`, params);
    },
    delete: async (id: string) => {
      await fetch.delete(`/api/appointment/${id}`);
    },

    getAppointment: async (id: string) => {
      try {
        const fetchedAppointment = await fetch.get(`/api/appointment/${id}`);
        if (fetchedAppointment !== currentAppointment) {
          appointmentStore.setState({ currentAppointment: fetchedAppointment });
        }
        return fetchedAppointment;
      } catch (error) {
        console.log('Error fetching appointment from server:', error);
        return null; // Return null in case of an error
      }
    },
  };
}
