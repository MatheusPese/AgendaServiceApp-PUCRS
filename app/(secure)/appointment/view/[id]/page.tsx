'use client'

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";

import { IAppointment } from "@/app/_services";
import { PageTemplate, Button } from "@/app/_components";
import { useAppointmentService } from "@/app/_services";

export default function Home({ params: { id } }: any) {
  const [menuVisible, setMenuVisible] = useState(false);
  const { handleSubmit, register, formState } = useForm();
  const [loading, setLoading] = useState(true);
  const [appointment, setAppointment] = useState<IAppointment>();

  const appointmentService = useAppointmentService();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [appointmentData] = await Promise.all([
          appointmentService.getAppointment(id),
        ]);
        if (appointmentData) {
          setAppointment(appointmentData);
        }
      } catch (error) {
        // Handle error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  let clientName:string, serviceName:string, serviceHour:string, serviceDate:string, employeeName:string, agendaId:string;

  if (appointment) {
    const { client, service, timeDue, employee, agendaId:agenda } = appointment;
    serviceHour = new Date(timeDue).toLocaleTimeString();
    serviceDate = new Date(timeDue).toLocaleDateString();
    clientName = client;
    serviceName = service;
    agendaId = agenda;

    if (typeof employee == "string") {
      employeeName = employee;
    }
  }

  const onReturn = () => {
    router.push(`/agenda/${agendaId}`);
  };

  const onClickEditar = () => {
      router.push(`/appointment/edit/${id}`);
  }

  const onClickDeleteAppointment = (id: string) => {
    console.log(id);
    // TODO: Remove window.confirm after creating a proper dialog overlay.
    const confirmDelete = window.confirm(
      "Tem certeza que deseja deletar o compromisso?\n"
    );

    if (confirmDelete) {
      deleteAppointment(id);
    }
  };

  const deleteAppointment = async (id: string) => {
      if (agendaId){
            await appointmentService.delete(id, agendaId);
      }else{
            throw new Error(`agenda not found`);
      }
  };

  const renderAppointment = () => {
      if (!appointment) return null;
      return (
      <div className="p-6 bg-white text-black rounded-md flex flex-col gap-4" >
            <div className="font-extrabold text-xl">COMPROMISSO</div>

            <div>
                  <div className="font-bold text-lg">Funcionário(a)</div>
                  <div>{employeeName}</div>
            </div>
            

            <div className="flex flex-row gap-4 justify-between">
                  <div>
                        <div className="font-bold text-lg">Cliente</div>
                        <div>{clientName}</div>
                  </div>

                  <div>
                        <div className="font-bold text-lg">Serviço</div>
                        <div>{serviceName}</div>
                  </div>
            
            </div>
            
            <div className="flex flex-row gap-4 justify-between"> 
                  <div>
                        <div className="font-bold text-lg">Horário</div>
                        <div>{serviceHour}</div>
                  </div>

                  <div>
                        <div className="font-bold text-lg">Data</div>
                        <div>{serviceDate}</div>
                  </div>

            </div>

            <button type="submit" className="flex justify-center justify-self-end text-red-500 font-bold underline"
                  onClick={() => onClickDeleteAppointment(id)}>
                  
                  {appointment.isDeleting
                        ? <span className="spinner-border spinner-border-sm"></span>
                        : <span>Deletar Compromisso</span>
                  }
            </button>
      </div>
      )
  }

  const Header = <h2>Visualizar Compromisso</h2>;

  const Body = (
    <div
      id="body-content"
      className="flex justify-center items-center h-full w-full flex-grow"
    >
      {appointment && renderAppointment()}
    </div>
  );

  const Footer = (
    <div className="flex w-full justify-between gap-3">
      <Button
        type="button"
        size="medium"
        customStyle="transparent"
        onClick={onReturn}
      >
        Voltar
      </Button>
      <Button
        type="submit"
        form="appointmentForm"
        size="medium"
        customStyle="primary"
        onClick={onClickEditar}
        >
        Editar
      </Button>
    </div>
  );

  return (
    <PageTemplate classesBody="bg-[rgba(34, 34, 34, 0.3)] w-full h-full overflow-hidden flex-col items-center flex-grow">
      {{ Header, Body, Footer }}
    </PageTemplate>
  );
}
