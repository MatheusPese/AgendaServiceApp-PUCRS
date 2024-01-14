// components/Button.tsx
import { IUser } from '@/app/_services';
import { format, isToday, isTomorrow} from 'date-fns';
import React, { ReactNode } from "react";

interface AppointmentProps {
  _id?: string;

  timeDue: Date;
  employee: IUser | string ;
  client: string;
  service: string;

  onClick?: () => void;
  className?: string;
}

const AppointmentCard: React.FC<AppointmentProps> = ({ timeDue, employee, client, service, onClick, className }) => {
    let when = format(timeDue, "MM/dd");

    isToday(timeDue) ? when = "HOJE" : when;
    isTomorrow(timeDue) ? when = "AMANHÃ" : when;
    
    let whenTextColor = "text-black";
    isToday(timeDue) ? whenTextColor = "text-red-400" : when;
    isTomorrow(timeDue) ?  whenTextColor = "text-orange-400" : when;

    return (
    <button type="submit" onClick={onClick} className="bg-gray-300 flex flex-col justify-between items-center w-[6rem] h-[6rem] rounded-3xl shadow-xl p-2 overflow-hidden">
        <div className={`font-semibold ${whenTextColor}`}>{`${when}`}</div>
        <div className={`text-xl font-extrabold ${whenTextColor}`}>{`${format(timeDue, "hh:mm")}`}</div>
        <div className='text-sm text-nowrap text-center font-extrabold text-ellipsis overflow-hidden h-6 w-20 ... text-black'>{client}</div>
    </button>
  );
};

export default AppointmentCard;
