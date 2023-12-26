import React from 'react';

interface AccountDetailProps {
  titulo: string;
  valor: string;
  onClickEdit: () => void;
}

const AccountDetailCard: React.FC<AccountDetailProps> = ({ titulo, valor, onClickEdit }) => {
  return (
    <div className="flex justify-between w-full p-4">
      <div className="flex-row items-center">
        <div className="font-bold text-xs">{titulo}</div>
        <div>{valor}</div>
      </div>
      <button onClick={onClickEdit}>
        Editar
      </button>
    </div>
  );
};

export default AccountDetailCard;
