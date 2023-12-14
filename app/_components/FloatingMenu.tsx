'use client'
import { useRouter } from "next/navigation";
import React from "react";

interface FloatingMenuProps {
    
}


const FloatingMenu: React.FC<FloatingMenuProps> = () => {
    const router = useRouter();
    const Menu1 = () =>{
        router.push('/business-panel');
    };
    const Menu2 = () =>{
        router.push('/account/profile');
    };
    const Menu3 = () =>{
        router.push('/account/login');
    };



    return ( 
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-60 rounded-lg m-auto p-0 text-black flex-row items-center ">
        <button onClick={Menu1} className="flex p-10 text-xl font-bold">Tela Inicial</button>
        <button onClick={Menu2} className="flex p-10 text-xl font-bold">Perfil</button>
        <button onClick={Menu3} className="flex p-10 text-xl text-red-600 font-bold">Desconectar-se</button>
    </div> 
    );
}
 
export default FloatingMenu;