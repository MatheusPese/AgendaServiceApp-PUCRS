"use client";

import { useState }       from "react";

import Button             from "@/app/_components/globals/Button";
import FloatingMenu       from "@/app/_components/globals/FloatingMenu";
import PageTemplate       from "@/app/_components/globals/PageTemplate";
import AppointmentCard    from "@/app/_components/business/AppointmentCard";
import NewAppointmentCard from "@/app/_components/business/NewAppointmentCard";

interface Appointment {
  _id      : string;
  time     : string;
  employee : string;
  client   : string;
  services : string[];
}

export default function Home() {
  
  const [menuVisible, setMenuVisible] = useState(false);
  
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  
  let appointments = [
    {
      _id: '1',
      employee: 'Alice Silva',
      client: 'João Oliveira',
      time: new Date('2023-12-22T10:00:00'),
      services: ['Depilação', 'Manicure'],
    },
    {
      _id: '2',
      employee: 'Carlos Santos',
      client: 'Joana Alcatra Acelva de Assis Vieira',
      time: new Date('2023-12-22T11:30:00'),
      services: ['Coloração de Cabelo', 'Corte de Cabelo', 'Escova Progressiva'],
    },
    {
      _id: '3',
      employee: 'Fernanda Lima',
      client: 'Pedro Rocha',
      time: new Date('2023-12-22T13:15:00'),
      services: ['Maquiagem', 'Pedicure'],
    },
    {
      _id: '4',
      employee: 'Gabriel Oliveira',
      client: 'Juliana Costa',
      time: new Date('2023-12-22T15:00:00'),
      services: ['Corte Masculino', 'Barba'],
    },
    {
      _id: '5',
      employee: 'Larissa Silva',
      client: 'Lucas Santos',
      time: new Date('2023-12-22T16:45:00'),
      services: ['Escova Progressiva', 'Manicure'],
    },
  ];
  
  
  appointments.sort((a, b) => b.time.getTime() - a.time.getTime());
  
  
  

  
  const Header = <h2 className="text-2xl">Negócios</h2>;
  
  const Body = (
    <div className="grid gap-3 align-content-around justify-content-between content-around justify-around grid-cols-3 p-3">
      
      <NewAppointmentCard />
      
      {appointments.map((appointment, index) => (
        <AppointmentCard
          key      = {index}
          time     = {appointment.time}
          employee = {appointment.employee}
          client   = {appointment.client}
          services = {appointment.services}
        />
      ))}
      
      {menuVisible && <FloatingMenu />}
    
    </div>
  );
  
  const Footer = (
    <div className="flex w-full justify-between gap-3">
      <Button onClick={toggleMenu}>Menu</Button>
      <Button>Compartilhar</Button>
    </div>
  );
  
  return (
    <>
      <PageTemplate classesBody="bg-[rgba(34, 34, 34, 0.3)] w-full items-start">
        {{
          Header,
          Body,
          Footer,
        }}
      </PageTemplate>
    </>
  );
}