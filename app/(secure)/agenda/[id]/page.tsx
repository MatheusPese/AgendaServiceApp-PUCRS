"use client";

import { useEffect, useState }       from "react";

import Button             from "@/app/_components/globals/Button";
import FloatingMenu       from "@/app/_components/globals/FloatingMenu";
import PageTemplate       from "@/app/_components/globals/PageTemplate";
import AppointmentCard    from "@/app/_components/agendas/agenda/AppointmentCard";
import NewAppointmentCard from "@/app/_components/agendas/agenda/NewAppointmentCard";
import { IUser, useAgendaService } from "@/app/_services";

interface Appointment {
  _id      : string;
  time     : string;
  employee : string | IUser;
  client   : string;
  service : string;
}

export default function Home({params: {id}}:any) {
  
  
  const agendaService = useAgendaService();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {

    const fetchData = async () =>{
      await agendaService.getAgenda(id);
    }
    fetchData().then(() =>{
        setLoading(false);
    })
  }, []);

  const agenda = agendaService.currentAgenda;


  

  const [menuVisible, setMenuVisible] = useState(false);
  
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  

  const renderAppointments = () =>{
    if (agenda){
      agenda.appointments.sort((a, b) => b.timeDue.getTime() - a.timeDue.getTime());

      return agenda.appointments.map((appointment, index) => (
        <AppointmentCard
          key      = {index}
          timeDue  = {appointment.timeDue}
          employee = {appointment.employee}
          client   = {appointment.client}
          service  = {appointment.service}
        />
      ))
    }
  }
  
  // let appointments = [
  //   {
  //     _id: '1',
  //     employee: 'Alice Silva',
  //     client: 'João Oliveira',
  //     time: new Date('2023-12-22T10:00:00'),
  //     service: 'Depilação',
  //   },
  //   {
  //     _id: '2',
  //     employee: 'Carlos Santos',
  //     client: 'Joana Alcatra Acelva de Assis Vieira',
  //     time: new Date('2023-12-22T11:30:00'),
  //     service: "Pé",
  //   },
  //   {
  //     _id: '3',
  //     employee: 'Fernanda Lima',
  //     client: 'Pedro Rocha',
  //     time: new Date('2023-12-22T13:15:00'),
  //     service: "Maquiagem"
  //   },
  //   {
  //     _id: '4',
  //     employee: 'Gabriel Oliveira',
  //     client: 'Juliana Costa',
  //     time: new Date('2023-12-22T15:00:00'),
  //     service: 'Barba',
  //   },
  //   {
  //     _id: '5',
  //     employee: 'Larissa Silva',
  //     client: 'Lucas Santos',
  //     time: new Date('2023-12-22T16:45:00'),
  //     service: 'Manicure',
  //   },
  // ];
  

  
  const Header = <h2 className="text-2xl">Negócios</h2>;
  
  const Body = (
    <div className="grid gap-3 align-content-around justify-content-between content-around justify-around grid-cols-3 p-3">
      
      <NewAppointmentCard />
      
      {/*TODO: add render for appointments here */}

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