'use client'
import { useState } from "react";

import Button from "@/components/Button";
import PageTemplate from "@/components/PageTemplate";
import FloatingMenu from "@/components/FloatingMenu";
import InfoCard from "@/components/InfoCard";

interface ProfileProps {
    editName: () => void;
    editEmail: () => void;
    editPhone: () => void;
    editPassword: () => void;

}

const Profile: React.FC<ProfileProps> = ({editEmail, editName, editPhone, editPassword}) => {
    const [menuVisible, setMenuVisible] = useState(false);

    const MenuClick = () => {
        setMenuVisible(!menuVisible);
    };


    const Top = (
        <div className='mx-auto text-2xl'>Perfil</div>
    );



    const Middle = (
        <div className="flex-row justify-between space-y-10 ">
            
            <InfoCard titulo='NOME' valor='Fulano da Silva' onClickEdit={editName}></InfoCard>
            <InfoCard titulo='E-MAIL' valor='fulano@mail.com' onClickEdit={editEmail}></InfoCard>
            <InfoCard titulo='TELEFONE' valor='+99 99 9 9999-9999' onClickEdit={editPhone}></InfoCard>
            <InfoCard titulo='SENHA' valor='************' onClickEdit={editPassword}></InfoCard>
            <div className="flex justify-center text-red-500 font-bold underline">Deletar Conta</div>
            {menuVisible && (
                <FloatingMenu />
            )}
        </div>
    );


    const Bottom = (
        <div className='mx-auto flex w-full justify-between'>
            <Button className='flex-2 m-2' onClick={MenuClick}>
                Menu
            </Button>
        </div>
    );

    return (
        <PageTemplate>
            {{
                Top: Top,
                Middle: Middle,
                Bottom: Bottom,
            }}
        </PageTemplate>
    );
}


export default Profile;

