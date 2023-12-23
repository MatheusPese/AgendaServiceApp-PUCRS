'use client'
import { useEffect, useState } from "react";

import Button from "@/app/_components/Button";
import PageTemplate from "@/app/_components/PageTemplate";
import FloatingMenu from "@/app/_components/FloatingMenu";
import InfoCard from "@/app/_components/InfoCard";
import { useUserService } from "@/app/_services";


function Profile()  {

    const [menuVisible, setMenuVisible] = useState(false);

    const userService = useUserService();
    const user = userService.currentUser;


    const MenuClick = () => {
        setMenuVisible(!menuVisible);
    };
    
    useEffect(() => {
        userService.getCurrent();

    }, []);

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
        <>
        {user && (  //check if user is not null
        <div className="flex flex-col w-full h-full justify-between gap-4">
            <InfoCard titulo='NOME' valor={`${user?.firstName} ${user?.lastName}`} onClickEdit={editName}></InfoCard>
            <InfoCard titulo='E-MAIL' valor={`${user?.email}`} onClickEdit={editEmail}></InfoCard>
            <InfoCard titulo='TELEFONE' valor={`${user?.phone}`} onClickEdit={editPhone}></InfoCard>
            <InfoCard titulo='SENHA' valor='************' onClickEdit={editPassword}></InfoCard>
            <button className="flex justify-center justify-self-end text-red-500 font-bold underline"
            onClick={() => userService.delete(user.id)}>
                {/* TODO: ask for confirmation before deleting user*/}
                {user.isDeleting
                    ? <span className="spinner-border spinner-border-sm"></span>
                    : <span>Deletar Conta</span>
                }
            </button>
        </div>)}
        {menuVisible && (
                <FloatingMenu />
            )}
        </>
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

