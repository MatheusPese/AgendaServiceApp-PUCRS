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


    const Header = (
        <div className='text-2xl'>Perfil</div>
    );



    const Body = (
        <div className="flex flex-col w-full h-full justify-between gap-4">
            <InfoCard titulo='NOME' valor='Fulano da Silva' onClickEdit={editName}></InfoCard>
            <InfoCard titulo='E-MAIL' valor='fulano@mail.com' onClickEdit={editEmail}></InfoCard>
            <InfoCard titulo='TELEFONE' valor='+99 99 9 9999-9999' onClickEdit={editPhone}></InfoCard>
            <InfoCard titulo='SENHA' valor='************' onClickEdit={editPassword}></InfoCard>
            <div className="flex justify-center justify-self-end text-red-500 font-bold underline">Deletar Conta</div>
            {menuVisible && (
                <FloatingMenu />
            )}
        </div>
    );


    const Footer = (
        <div className='flex w-full justify-between'>
            <Button className='flex-2' onClick={MenuClick}>
                Menu
            </Button>
        </div>
    );

    return (
        <PageTemplate>
            {{
                Header,
                Body,
                Footer,
            }}
        </PageTemplate>
    );
}


export default Profile;

