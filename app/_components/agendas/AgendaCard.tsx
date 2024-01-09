import React, { ReactNode } from 'react';
import { Trash2 } from 'react-feather';

interface ButtonProps {
  agendaName?: string;
  onClickCreate?: () => void;
  onClickDelete?: () => void;
  className?: string; // Add className prop
  buttonType: "create" | "view";

}

const AgendaCard: React.FC<ButtonProps> = ({ agendaName, onClickCreate, onClickDelete, className = "", buttonType }) => {
  return (
    <div className={`${className} flex flex-row justify-between flex-1 w-full justify-center bg-[rgba(0,0,0,0.3)] text-left`}>
      
      {buttonType === "create" && (
        <button title="Criar nova Agenda" type="button" className="flex flex-1 justify-start p-5" onClick={onClickCreate}>
          + Nova Agenda
        </button>
      )}

      {buttonType === "view" && (
        <button title={`Abrir Agenda "${agendaName}"`} type="button" className="flex flex-1 justify-start p-5">
          {agendaName}
        </button>
      )}

      {buttonType === "view" && (
        <button title="Deletar Agenda" className="p-5" type="button" onClick={onClickDelete}>
          <Trash2 color='white' size={24}/>
        </button>
      )}

    </div>
  );
};

export default AgendaCard;
