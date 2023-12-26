'use client'
import { useEffect, useState } from "react";

import Button from "@/app/_components/Globals/Button";
import PageTemplate from "@/app/_components/Globals/PageTemplate";
import FloatingMenu from "@/app/_components/Globals/FloatingMenu";
import AccountDetailCard from "@/app/_components/Account/Profile/AccountDetailCard";
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
            <AccountDetailCard titulo='NOME' valor={`${user?.firstName} ${user?.lastName}`} onClickEdit={editName}></AccountDetailCard>
            <AccountDetailCard titulo='E-MAIL' valor={`${user?.email}`} onClickEdit={editEmail}></AccountDetailCard>
            <AccountDetailCard titulo='TELEFONE' valor={`${user?.phone}`} onClickEdit={editPhone}></AccountDetailCard>
            <AccountDetailCard titulo='SENHA' valor='************' onClickEdit={editPassword}></AccountDetailCard>
            <Button customStyle="danger" className="flex justify-center justify-self-end"
            onClick={() => userService.delete(user.id)}>
                {/* TODO: ask for confirmation before deleting user*/}
                {user.isDeleting
                    ? <span className="spinner-border spinner-border-sm">Deletando...</span>
                    : <span>Deletar Conta</span>
                }
            </Button>
        </div>)}
        {menuVisible && (
                <FloatingMenu />
            )}
        </>
    );


    const Footer = (
<></>
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

