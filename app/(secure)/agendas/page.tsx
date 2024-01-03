"use client";

// #region Imports
import { useEffect, useState } from "react";
import { redirect } from 'next/navigation';
import { useAgendaService, useUserService } from "@/app/_services";
import { useForm } from "react-hook-form";


import PageTemplate from "@/app/_components/globals/PageTemplate";
import FloatingMenu from "@/app/_components/globals/FloatingMenu";
import AgendaCard from "@/app/_components/agendas/AgendaCard";
import Button from "@/app/_components/globals/Button";
import Popup from "@/app/_components/globals/Popup";

// #endregion

export default function Home() { 
  // #region CHECK IF THE USER IS LOGGED IN

  const userService = useUserService();
  const user = userService.currentUser;
  useEffect(() => {
      userService.getCurrent();
  }, [userService]);
  
  if (!user){
    redirect('/')
  }
  //#endregion

  // #region State and Hooks
  const [menuVisible, setMenuVisible] = useState(false);
  const [newAgendaOverlay, setNewAgendaOverlay] = useState(false);

  const {register, handleSubmit, formState} = useForm();
  const agendaService = useAgendaService();
  
  // #endregion

  const fields ={
    name: register("name", {required: "Name Required!"}),
    ownerId: register("ownerId")
  }


  const agendas = ["Agenda 1", "Agenda 2", "Agenda 3", "Agenda 4"]

  const createAgenda = async (props:any) => {
    if (user){
      await agendaService.create({name:props?.name, ownerId:user.id});
    }
    setNewAgendaOverlay(false)
  }


  const cancel = () => {
    setNewAgendaOverlay(false)
  };

  const MenuClick = () => {
    setMenuVisible(!menuVisible);
  };

  const ShowNewAgendaOverlay = () => {
    setNewAgendaOverlay(true);
  };
  const Header = <h2 className="text-2xl">Agendas</h2>;

  const Body = (
    <div className="flex flex-col gap-2 w-full"> 
      <AgendaCard onClick={ShowNewAgendaOverlay}>+ Nova Agenda</AgendaCard>

      {agendas.map((item, index) => (
        <AgendaCard key={index}> {item} </AgendaCard>
      ))}

      {menuVisible && <FloatingMenu />}
      
      {newAgendaOverlay && 

      
      <Popup title="Nova Agenda" confirmLabel="Criar" isSubmitting={formState.isSubmitting} onConfirm={() => handleSubmit(createAgenda)()} onDeny={cancel}>
          <input {...fields.name} type="text" className="form-control" placeholder="Nome" />
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
