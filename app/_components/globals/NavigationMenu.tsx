'use client'
import { useRouter } from "next/navigation";
import React from "react";
import { useUserService } from "../../_services";

const NavigationMenu: React.FC = () => {
    const  userService = useUserService();
    const router = useRouter();

    const Menu1 = () =>{
        router.push('/agendas');
    };

    const Menu2 = () =>{
        router.push('/account/profile');
    };

    const Menu3 = async () =>{
        await userService.logout()
    };

    return ( 
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-60 rounded-lg m-auto p-0 text-black flex-row items-center ">
        <button type="button" onClick={Menu1} className="flex p-10 text-xl font-bold">
            Tela Inicial
        </button>
        <button type="button" onClick={Menu2} className="flex p-10 text-xl font-bold">
            Perfil
        </button>
        <button type="button" onClick={Menu3} className="flex p-10 text-xl text-red-600 font-bold">
            Desconectar-se
        </button>
    </div> 
    );
}

export {NavigationMenu};
export default NavigationMenu;