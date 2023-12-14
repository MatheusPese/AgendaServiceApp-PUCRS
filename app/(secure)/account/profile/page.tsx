'use client'
import { useState } from "react";

import Button from "@/app/_components/Button";
import PageTemplate from "@/app/_components/PageTemplate";
import FloatingMenu from "@/app/_components/FloatingMenu";
import InfoCard from "@/app/_components/InfoCard";


function Profile()  {
    const [menuVisible, setMenuVisible] = useState(false);

    const MenuClick = () => {
        setMenuVisible(!menuVisible);
    };

    const editName = () => {
        // Implement logic for editing name
    };

    const editEmail = () => {
        // Implement logic for editing email
    };

    const editPhone = () => {
        // Implement logic for editing phone
    };

    const editPassword = () => {
        // Implement logic for editing password
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

