"use client";

import Button from "@/app/_components/Button";
import PageTemplate from "@/app/_components/PageTemplate";
import AppointmentCard from "@/app/_components/business/AppointmentCard";
import FloatingMenu from "@/app/_components/FloatingMenu";
import { useState } from "react";
import NewAppointmentCard from "@/app/_components/business/NewAppointmentCard";

interface Appointment {
  _id: string;
  time: string;
  employee: string;
  client: string;
  services: string[];
}

export default function Home() {
  let appointments = [
    {
      _id: 1,
      time: new Date("2014-03-01T01:00:00"),
      employee: "Etiane",
      client: "Maria",
      services: ["Manicure", "Pedicure"],
    },
    {
      _id: 2,
      time: new Date(),
      employee: "Carmen",
      client: "Joana Alcatra Acelva de Assis Vieira",
      services: ["Depilação", "Pedicure"],
    },
    {
    _id: 3,
    time: new Date(),
    employee: "Carmen",
    client: "Joana Alcatra Acelva de Assis Vieira",
    services: ["Depilação", "Pedicure"],
  },
];
  appointments.sort((a, b) => b.time.getTime() - a.time.getTime());


  const [menuVisible, setMenuVisible] = useState(false);
  
  const MenuClick = () => {
    setMenuVisible(!menuVisible);
  };


  const Header = <h2 className="text-2xl">Negócios</h2>;

  const Body = (
    <div className="grid gap-3 align-content-around justify-content-between content-around justify-around grid-cols-3 p-3"> 
    <NewAppointmentCard/>
    {appointments.map((index, time ) => (
            <AppointmentCard time={index.time} employee={index.employee} client={index.client} services={index.services}/>
        ))}
              {menuVisible && <FloatingMenu />}
    </div>
  );

  const Footer = (
    <div className=" flex w-full justify-between gap-3">
      <Button onClick={MenuClick}>
        Menu
      </Button>
      <Button >Compartilhar</Button>
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