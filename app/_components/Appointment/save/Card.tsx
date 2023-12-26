import { format, isToday, isTomorrow } from 'date-fns';
import React from 'react';

type Props ={
  type: "square" | "rect";
  title: string;
}

const AppointmentCard: React.FC<Props> = ({ type = 'square', ...rest }) => {
  return (
    <div></div>
  );
};

export default AppointmentCard;
