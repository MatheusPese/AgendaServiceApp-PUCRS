// components/Button.tsx
import {format, isToday, isTomorrow} from 'date-fns';
import React, { ReactNode } from "react";

interface AppointmentProps {
  _id?: string;

  time: Date;

  employee: string;
  client: string;
  services: string[];

  onClick?: () => void;
  className?: string;
}

const AppointmentCard: React.FC<AppointmentProps> = ({ time, employee, client, services, onClick, className }) => {
    
    
    let when = format(time, "MM/dd");
    isToday(time) ? when = "HOJE" : when;
    isTomorrow(time) ? when = "AMANHÃ" : when;
    
    let whenTextColor = "text-black";
    isToday(time) ? whenTextColor = "text-red-400" : when;
    isTomorrow(time) ?  whenTextColor = "text-orange-400" : when;


    return (

    <button className="bg-gray-300 flex flex-col justify-between items-center w-[6rem] h-[6rem] rounded-3xl shadow-xl p-2 overflow-hidden">

        <div className={`font-semibold ${whenTextColor}`}>{`${when}`}</div>

        <div className={`text-xl font-extrabold ${whenTextColor}`}>{`${format(time, "hh:mm")}`}</div>

        <div className='text-sm text-nowrap text-center font-extrabold text-ellipsis overflow-hidden h-6 w-20 ... text-black'>{client}</div>
    
    </button>
  );
};

export default AppointmentCard;
