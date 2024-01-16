'use client'
import { useRouter } from "next/navigation";
import React, { useRef, useEffect, useState } from "react";
import { useUserService } from "../../_services";

interface NavigationMenuProps {
    menuVisible: boolean;
    setMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ menuVisible, setMenuVisible }) => {
    const userService = useUserService();
    const router = useRouter();
    const menuRef = useRef<HTMLDivElement | null>(null);

    const navigateToAgendas = () => {
        router.push('/agendas');
        setMenuVisible(false);
    };

    const navigateToProfile = () => {
        router.push('/account/profile');
        setMenuVisible(false);
    };

    const logoutAndNavigate = async () => {
        await userService.logout();
        setMenuVisible(false);
    };

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            event.stopPropagation();
            // Check if the click occurred on the overlay div
            setMenuVisible(false);
        }
    };

    return (
        <>
            {menuVisible && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-[rgba(1,1,1,0.2)] z-50 backdrop-blur-[2px]"
                    onClick={handleOverlayClick}
                >
                                <div
                ref={menuRef}
                className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-60 rounded-lg m-auto p-0 text-black flex flex-col items-stretch ${
                    menuVisible ? "" : "invisible"
                }`}
            >
                <button
                    type="button"
                    onClick={navigateToAgendas}
                    className="flex-grow p-10 text-xl font-bold justify-start items-start text-left"
                >
                    Painel de Agendas
                </button>
                <button type="button" onClick={navigateToProfile} className="flex-grow p-10 text-xl font-bold text-left">
                    Perfil
                </button>
                <button
                    type="button"
                    onClick={logoutAndNavigate}
                    className="flex-grow p-10 text-xl text-red-600 font-bold text-left"
                >
                    Desconectar-se
                </button>
            </div>
            
                </div>
            )}


        </>
    );
}

export { NavigationMenu };
export default NavigationMenu;