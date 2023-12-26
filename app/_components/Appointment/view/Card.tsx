import { format, isToday, isTomorrow } from 'date-fns';
import React from 'react';

type CreateType = {
  type: 'Create';

};

type ShowType = {
  type?: 'Show';
  _id?: string;
  time: Date;
  employee: string;
  client: string;
  services: string[];
};

type CommonProps ={
  onClick?: () => void;
  className?: string;
}

type Props = (CreateType | ShowType) & CommonProps;

const AppointmentCard: React.FC<Props> = ({ type = 'Show', ...rest }) => {
  if (type === 'Create') {
    const { onClick, className } = rest as CreateType & CommonProps;

    return (
      <button className="btn bg-[rgb(62,152,255)] hover:bg-[rgb(112,172,230)] flex flex-col justify-center items-center w-[6rem] h-[6rem] rounded-3xl shadow-xl p-2 overflow-hidden">
        <span className={`text-4xl font-extrabold text-white`}>+</span>
      </button>
    );
  }

  if (type === 'Show') {
    const { _id, time, employee, client, services } = rest as ShowType & CommonProps;

    let when = format(time, 'MM/dd');
    isToday(time) ? (when = 'HOJE') : when;
    isTomorrow(time) ? (when = 'AMANHÃ') : when;

    let whenTextColor = 'text-black';
    isToday(time) ? (whenTextColor = 'text-red-400') : when;
    isTomorrow(time) ? (whenTextColor = 'text-orange-400') : when;

    return (
      <button className="bg-gray-300 flex flex-col justify-between items-center w-[6rem] h-[6rem] rounded-3xl shadow-xl p-2 overflow-hidden">
        <div className={`font-semibold ${whenTextColor}`}>{`${when}`}</div>
        <div className={`text-xl font-extrabold ${whenTextColor}`}>{`${format(time, 'hh:mm')}`}</div>
        <div className='text-sm text-nowrap text-center font-extrabold text-ellipsis overflow-hidden h-6 w-20 ... text-black'>{client}</div>
      </button>
    );
  }
};

export default AppointmentCard;
