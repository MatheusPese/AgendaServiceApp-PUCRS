"use client";

import { useState } from "react";
import PageTemplate from "@/app/_components/globals/PageTemplate";
import FloatingMenu from "@/app/_components/globals/FloatingMenu";
import AgendaCard from "@/app/_components/agendas/AgendaCard";
import Button from "@/app/_components/globals/Button";
import Popup from "@/app/_components/globals/Popup";

export default function Home() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [newAgendaOverlay, setNewAgendaOverlay] = useState(true);

  var business = [
    "Salão de Beleza 1",
    "Salão de Beleza 2",
    "Salão de Beleza 3",
    "Salão de Beleza 1",
    "Salão de Beleza 2"
  ];

  const MenuClick = () => {
    setMenuVisible(!menuVisible);
  };

  const ShowNewAgendaOverlay = () => {
    setNewAgendaOverlay(false);
  };
  const Header = <h2 className="text-2xl">Agendas</h2>;

  const Body = (
    <div className="flex flex-col gap-2 w-full"> 
      <AgendaCard onClick={ShowNewAgendaOverlay}>+ Nova Agenda</AgendaCard>

      {business.map((item, index) => (
        <AgendaCard key={index}> {item} </AgendaCard>
      ))}

      {menuVisible && <FloatingMenu />}
      
      {newAgendaOverlay && 
      <Popup title="Nova Agenda">
        <input type="text" className="form-control" placeholder="Nome" />
      </Popup>
      
      }
    </div>
  );

  const Footer = (
    <div className=" flex w-full justify-between items-between gap-3">
      <Button size="large" type="button" customStyle="transparent" onClick={MenuClick}>
        Menu
      </Button>
      <Button size="large" type="button" customStyle="transparent">
        Compartilhar
      </Button>
    </div>
  );

  return (
    <PageTemplate classesBody="bg-[rgba(34, 34, 34, 0.3)] w-full items-start">{{
      Header,
      Body,
      Footer,
    }}</PageTemplate>
  );
}
