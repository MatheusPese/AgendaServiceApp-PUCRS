// components/Button.tsx
import { format, isToday, isTomorrow } from "date-fns";
import React, { ReactNode } from "react";

const NewAppointmentCard: React.FC = () => {
  return (
    <button className="btn bg-[rgb(62,152,255)] hover:bg-[rgb(112,172,230)] flex flex-col justify-center items-center w-[6rem] h-[6rem] rounded-3xl shadow-xl p-2 overflow-hidden">
      <span className={`text-4xl font-extrabold  text-white`}>
        +
      </span>
    </button>
  );
};

export default NewAppointmentCard;
