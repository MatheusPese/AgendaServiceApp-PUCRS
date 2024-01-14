"use client";

import { useEffect, useState } from "react";
import { useRouter, redirect } from 'next/navigation';

// import componnents
import Button             from "@/app/_components/globals/Button";
import FloatingMenu       from "@/app/_components/globals/FloatingMenu";
import PageTemplate       from "@/app/_components/globals/PageTemplate";
import AppointmentCard    from "@/app/_components/agendas/agenda/AppointmentCard";
import NewAppointmentCard from "@/app/_components/agendas/agenda/NewAppointmentCard";

//import services
import { useAgendaService, useAppointmentService } from "@/app/_services";

//import interfaces
import { IAppointment, IUser, IAgenda } from "@/app/_services";

export default function Home({params: {id}}:any) {
  const router = useRouter();

  const appointmentService = useAppointmentService();
  const agendaService = useAgendaService();
  const [loading, setLoading] = useState(true);
  const [appointments, setAppointments] = useState<IAppointment[]>([]);
  const [agenda, setAgenda] = useState<IAgenda|null>(null);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [agendaData, appointmentsData] = await Promise.all([
          agendaService.getAgenda(id),
          appointmentService.getCurrentAgendaAppointments(id),
        ]);  
        if (appointmentsData && agendaData){
          setAppointments(appointmentsData);
          setAgenda(agendaData)

        }
      } catch (error) {

      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);

  const createAppointment = () => {
    const url = `/appointment/new?agendaId=${id}`
    router.push( url );

  }

const openAppointment = (appointment:any) => {
  
  console.log("Testando o appointment: ", appointment);
  const url = `/appointment/view/${appointment.id}`
  router.push( url );
};


  const [menuVisible, setMenuVisible] = useState(false);
  
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  

  const renderAppointments = () =>{
    if (appointments){
      appointments.forEach(appointment => {
        appointment.timeDue = new Date(appointment.timeDue);
      });

      appointments.sort((a, b) => { 
      console.log("a.timeDue type:", typeof a.timeDue);
      console.log("b.timeDue type:", typeof b.timeDue);
        
        return b.timeDue.getTime() - a.timeDue.getTime();

      });

      return appointments.map((appointment, index) => (
        <AppointmentCard
          key      = {index}
          timeDue  = {appointment.timeDue}
          employee = {appointment.employee}
          client   = {appointment.client}
          service  = {appointment.service}
          onClick={() => openAppointment(appointment)}
        />
      ))
    }
  }
  


  
  const Header = <h2 className="text-2xl">Compromissos</h2>;
  
  const Body = (
    <div className="grid gap-3 align-content-around justify-content-between content-around justify-around grid-cols-3 p-3">
      
      <NewAppointmentCard onClick={createAppointment}/>
      
      {renderAppointments()}

      {menuVisible && <FloatingMenu />}
    
    </div>
  );
  
  const Footer = (
    <div className="flex w-full justify-between gap-3">
      <Button type="button" customStyle="transparent" size="medium" onClick={toggleMenu}>Menu</Button>
      <Button type="button" customStyle="transparent" size="medium" >Compartilhar</Button>
    </div>
  );
  
  if (!agenda && !loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center w-screen bg-[#01010131] p-4">
          <div className="text-2xl font-bold">
            <span className=" text-red-400">ERRO 404: </span> <span> Oops! Página não encontrada :(</span>
          </div>
          
          <div className="text-white">
          <p>Parece que a página da Agenda com o ID &quot;{`${id}`}&quot; não foi encontrada.</p>
          <p>Por favor, verifique se está acessando a URL correta ou se a Agenda ainda existe.</p>
          </div>
        </div>
      </div>
    );
  } 
  if (loading){
    return (
      <div className="flex items-center justify-center text-3xl h-screen">
        <span className="spinner-border me-2"></span> Carregando... 
      </div>
    );

  }
  return (
      <PageTemplate classesBody="bg-[rgba(34, 34, 34, 0.3)] w-full items-start">{{       
        Header,
        Body,
        Footer,
      }}</PageTemplate>
  );
}