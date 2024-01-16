'use client'
import { useRouter } from "next/navigation";
import React, { useRef, useEffect, useState } from "react";
import { useUserService } from "../../_services";

interface NavigationMenuProps {
    menuClosed: boolean;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ menuClosed }) => {
    const userService = useUserService();
    const router = useRouter();
    const menuRef = useRef<HTMLDivElement | null>(null);
    const [localMenuClosed, setLocalMenuClosed] = useState(false);

    useEffect(() => {
        setLocalMenuClosed(menuClosed);

        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !(menuRef.current as HTMLDivElement).contains(event.target as Node)) {
                setLocalMenuClosed(true);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef, menuClosed]);

    const Menu1 = () => {
        router.push('/agendas');
        setLocalMenuClosed(true);
    };

    const Menu2 = () => {
        router.push('/account/profile');
        setLocalMenuClosed(true);
    };

    const Menu3 = async () => {
        await userService.logout();
        setLocalMenuClosed(true);
    };

    if (localMenuClosed) {
        return null; // Hide the menu content
    }

    return (
        <div
            ref={menuRef}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-60 rounded-lg m-auto p-0 text-black flex flex-col items-stretch"
        >
            <button type="button" onClick={Menu1} className="flex-grow p-10 text-xl font-bold justify-start items-start text-left">
                Painel de Agendas
            </button>
            <button type="button" onClick={Menu2} className="flex-grow p-10 text-xl font-bold text-left">
                Perfil
            </button>
            <button type="button" onClick={Menu3} className="flex-grow p-10 text-xl text-red-600 font-bold text-left">
                Desconectar-se
            </button>
        </div>
    );
}

export { NavigationMenu };
export default NavigationMenu;