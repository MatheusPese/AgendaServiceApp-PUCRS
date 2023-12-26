"use client";

import { useState } from "react";
import PageTemplate from "@/app/_components/Globals/PageTemplate";
import FloatingMenu from "@/app/_components/Globals/FloatingMenu";
import Agenda from "@/app/_components/Agendas/AgendaCard";
import Button from "@/app/_components/Globals/Button";

export default function Home() {
  const [menuVisible, setMenuVisible] = useState(false);
  var agendas = [
    "Salão de Beleza 1",
    "Salão de Beleza 2",
    "Salão de Beleza 3",
    "Salão de Beleza 1",
    "Salão de Beleza 2",
    "Salão de Beleza 3",
    "Salão de Beleza 1",
    "Salão de Beleza 2",
    "Salão de Beleza 3",
    "Salão de Beleza 1",
    "Salão de Beleza 2",
    "Salão de Beleza 3",
  ];

  const MenuClick = () => {
    setMenuVisible(!menuVisible);
  };

  const Header = <h2 className="text-2xl">Agendas</h2>;

  const Body = (
    <div className="flex flex-col gap-2 w-full"> 
      {agendas.map((item, index) => (
        <Agenda key={index}> {item} </Agenda>
      ))}
      {menuVisible && <FloatingMenu />}
    </div>
  );

  const Footer = (
      <Button buttonText="Compartilhar" customStyle="transparent"/>
  );

  return (
    <PageTemplate classesBody="bg-[rgba(34, 34, 34, 0.3)] w-full items-start">
      {{
        Header,
        Body,
        Footer,
      }}
    </PageTemplate>
  );
}
