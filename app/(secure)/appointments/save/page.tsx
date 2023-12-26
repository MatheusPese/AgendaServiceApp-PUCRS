"use client";

import PageTemplate       from "@/app/_components/Globals/PageTemplate";
import Card from "@/app/_components/Appointment/save/Card";


export default function Home() {
  
  let appointment = 
    {
      _id: '1',
      employee: 'Alice Silva',
      client: 'João Oliveira',
      time: new Date('2023-12-22T10:00:00'),
      services: ['Depilação', 'Manicure'],
    };
  
  
  const Header = <h2 className="text-2xl">Salvar Compromisso</h2>;
  
  const Body = (
    <div className="grid gap-3 align-content-around justify-content-between content-around justify-around grid-cols-3 p-3">
      <Card title="Cliente"     type="square"></Card>
      <Card title="Serviço"     type="square"></Card>
      <Card title="Data"        type="rect"></Card>
      <Card title="Funcionario" type="square"></Card>
      <Card title="Hora"        type="square"></Card>


    </div>
  );
  
  const Footer = (<></>
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