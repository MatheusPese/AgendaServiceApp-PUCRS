import React from 'react';
import DataCard from "@/app/_components/appointments/DataCard";

type Props = {
      ClientName?:string;
      ServiceName?:string;
      ServiceDate?:string;
      EmployeeName?:string;
      ServiceTime?:string;
}

const DataCardCollection: React.FC<Props> = ({ClientName="", ServiceName="", ServiceDate="", EmployeeName="", ServiceTime=""}) => {
      return(
      <div className="grid grid-cols-2 gap-4 h-full flex-grow flex-shrink items-center m-auto">

            <DataCard title="Cliente" bodyText={ClientName}/>
            <DataCard title="Serviço" bodyText={ServiceName}/>

            <DataCard title="Data" cardType="rect" bodyText={ServiceDate}/>

            <DataCard title="Funcionário" bodyText={EmployeeName}/>
            <DataCard title="Horário" bodyText={ServiceTime}/>
      </div>
      )
}

export default DataCardCollection;