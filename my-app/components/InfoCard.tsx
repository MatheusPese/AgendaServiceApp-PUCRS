import React from 'react';

interface InfoCardProps {
  titulo: string;
  valor: string;
  onClickEdit: () => void;
}

const InfoCard: React.FC<InfoCardProps> = ({ titulo, valor, onClickEdit }) => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex-row items-center p-4 mx-5">
        <div className="font-bold text-xs">{titulo}</div>
        <div>{valor}</div>
      </div>
      <button className="p-5 mx-5" onClick={onClickEdit}>
        Editar
      </button>
    </div>
  );
};

export default InfoCard;
