"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";

import PageTemplate from "@/app/_components/globals/PageTemplate";
import Button from "@/app/_components/globals/Button";
import DataCard from "@/app/_components/appointments/DataCard";
import { IAppointment, useAppointmentService } from "@/app/_services";

export default function Home({params: {id}}:any) {
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


  const agendaId = appointment?.agendaId;

  const fields = {
      service: register("service", { required: "Service Name is required" }),
      client: register("client", { required: "Client Name is required" }),
      date: register("date", { required: "Date is required" }),
      time: register("time", { required: "Time is required"}),
      employee: register("employee", { required: "Employee is required"}),
    };


  const toggleMenu = () => {
    if (menuVisible==false) setMenuVisible(true);
  };

  const onReturn = () => {
    router.push(`/agenda/${agendaId}`);

  }
  const onSubmit = async (appointment:any) => {
      // TODO: Certificar que a agenda existe antes de criar o compromisso.
      if(agendaId){
            const timeDue = new Date(`${appointment.date}T${appointment.time}`)
            const updatedAppointment = { ...appointment, agendaId, timeDue: timeDue}
            await appointmentService.update(id,updatedAppointment);
      }
      else{
            throw `Erro, agenda não encontrada`;
      }
  };


  const renderAppointments = () => {
    if (!appointment) return null;
    return (
      <form
        id="appointmentForm"
        className="grid grid-cols-2 gap-4 h-full items-center m-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <DataCard title="Cliente" className="col-span-1">
          <input
            {...fields.client}
            defaultValue={appointment.client}
            className="form-control"
            title="Cliente"
            placeholder="Nome do Cliente"
          />
        </DataCard>
  
        <DataCard title="Serviço" className="col-span-1">
          <input
            {...fields.service}
            defaultValue={appointment.service}
            className="form-control"
            title="Serviço"
            placeholder="Nome do Serviço"
          />
        </DataCard>
  
        <DataCard title="Dia" cardType="rect" className="col-span-2">
          <input
            {...fields.date}
            defaultValue={new Date(appointment.timeDue).toISOString().split('T')[0]}
            className="form-control"
            title="Dia"
            placeholder="Dia"
            type="date"
          />
        </DataCard>
  
        <DataCard title="Funcionário" className="col-span-1">
          <input
            {...fields.employee}
            defaultValue={
              typeof appointment.employee === "string"
                ? appointment.employee
                : `${appointment.employee.firstName} ${appointment.employee.lastName}`
            }
            className="form-control"
            title="Funcionário"
            placeholder="Nome do Funcionário"
          />
        </DataCard>
  
        <DataCard title="Horário" className="col-span-1">
          <input
            {...fields.time}
            defaultValue={new Date(appointment.timeDue).toLocaleTimeString()}
            className="form-control"
            title="Hora"
            type="time"
          />
        </DataCard>
      </form>
    );
  };

  const Header = <h2>Salvar Compromisso</h2>;

  const Body = (
    <div id="body-content" className="flex justify-center items-center h-full w-full flex-grow">
      {renderAppointments()}
    </div>
  );

  const Footer = (
    <div className="flex w-full justify-between gap-3">
      
      <Button type="button" size="medium" customStyle="transparent" onClick={onReturn} >
        Voltar
      </Button>
      <Button type="submit" form="appointmentForm" size="medium" customStyle="primary" disabled={formState.isSubmitting}>
        {formState.isSubmitting && <span className="spinner-border spinner-border-sm me-1"></span>}
        Salvar
      </Button>
    </div>
  );

  return (
    <PageTemplate classesBody="bg-[rgba(34, 34, 34, 0.3)] w-full h-full overflow-hidden flex-col items-center flex-grow">
      {{ Header, Body, Footer }}
    </PageTemplate>
  );
}
