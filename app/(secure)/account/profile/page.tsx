'use client'

import { useEffect, useState } from "react";
import { redirect } from 'next/navigation'
import Button from "@/app/_components/globals/Button";
import PageTemplate from "@/app/_components/globals/PageTemplate";
import NavigationMenu from "@/app/_components/globals/NavigationMenu";
import CredentialCard from "@/app/_components/account/profile/CredentialCard";
import { useUserService } from "@/app/_services";


function Profile()  {

    const [menuVisible, setMenuVisible] = useState(false);

    const userService = useUserService();
    const user = userService.currentUser;


    const MenuClick = () => {
        if (menuVisible==false) setMenuVisible(true);    };
    
    useEffect(() => {
        userService.getCurrent();
    },[]);

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
            <CredentialCard titulo='NOME' valor={`${user?.firstName} ${user?.lastName}`} onClickEdit={editName}></CredentialCard>
            <CredentialCard titulo='E-MAIL' valor={`${user?.email}`} onClickEdit={editEmail}></CredentialCard>
            <CredentialCard titulo='TELEFONE' valor={`${user?.phone}`} onClickEdit={editPhone}></CredentialCard>
            <CredentialCard titulo='SENHA' valor='************' onClickEdit={editPassword}></CredentialCard>
            <button type="submit" className="flex justify-center justify-self-end text-red-500 font-bold underline"
            onClick={() => {  
                userService.delete(user.id)
            }}>
                {/* TODO: ask for confirmation before deleting user*/}
                {user.isDeleting
                    ? <span className="spinner-border spinner-border-sm"></span>
                    : <span>Deletar Conta</span>
                }
            </button>
        </div>)}
        
                <NavigationMenu setMenuVisible={setMenuVisible} menuVisible={menuVisible}/>
        
        </>
    );


    const Footer = (
        <div className='flex w-full justify-between'>
            <Button size="large" type="button" customStyle="transparent" className='flex-2' onClick={MenuClick}>
                Menu
            </Button>
        </div>
    );

    if (user){
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
    else{
        return (
        <div className="flex items-center justify-center text-3xl h-screen">
            <span className="spinner-border me-2"></span> Carregando... 
        </div>
            )
    }

    
}


export default Profile;

