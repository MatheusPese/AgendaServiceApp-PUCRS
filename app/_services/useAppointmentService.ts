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
  isDeleting?: boolean;
}

interface IAppointmentStore {
  agendaAppointment?: IAppointment;
  currentAppointment?: IAppointment;
  currentAgendaAppointments?: IAppointment[];
  appointment?: IAppointment;
  
}

interface IAppointmentService extends IAppointmentStore {
  create: (params: Partial<IAppointment>) => Promise<void>;
  update: (id: string, params: Partial<IAppointment>) => Promise<void>;
  delete: (id: string, agendaId:string) => Promise<void>;
  getAppointment: (id: string) => Promise<IAppointment | null>;
  getCurrentAgendaAppointments: (agendaId:string) => Promise < IAppointment[] | null>; 
}

const initialState = {
  agendaAppointment: undefined,
  currentAppointment: undefined,
  currentAgendaAppointments: undefined,
  appointment: undefined,
};

const appointmentStore = create<IAppointmentStore>(() => initialState);

function useAppointmentService(): IAppointmentService {
  const fetch = useFetch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { agendaAppointment, currentAppointment, currentAgendaAppointments, appointment } = appointmentStore();

  return {
    agendaAppointment,
    currentAppointment,
    appointment,
    create: async (params: any) => {
      await fetch.post(`/api/appointment/`, params);
      router.push(`/agenda/${params.agendaId}`);

    },
    update: async (id: string, params: Partial<IAppointment>) => {
      await fetch.put(`/api/appointment/${id}`, params);
    },
    delete: async (id: string, agendaId:string) => {
      // set isDeleting prop to true on appointment
      appointmentStore.setState({
        appointment: { ...appointment!, isDeleting: true },
      });

      await fetch.delete(`/api/appointment/${id}`);

      router.push(`/agenda/${agendaId}`)
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

    getCurrentAgendaAppointments: async (agendaId: string) => {
        
      try {
        console.log("fetching agenda appointments")
        const fetchedAppointments = await fetch.get(`/api/appointments/agenda/${agendaId}`);
        if (fetchedAppointments !== currentAgendaAppointments) {
          
          appointmentStore.setState({ currentAgendaAppointments: fetchedAppointments });
          console.log("feched appointments: " , appointmentStore.getState().currentAgendaAppointments)
        } 
        return fetchedAppointments;

      } catch (error) {
        console.log('Error fetching appointments from server:', error);
        return null; // Return null in case of an error
      }
    }
  };
}
