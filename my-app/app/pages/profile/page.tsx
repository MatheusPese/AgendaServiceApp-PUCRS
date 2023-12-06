'use client'
import { useState } from "react";

import Button from "@/app/components/button/button";
import PageTemplate from "@/app/components/page-template/page-template";
import FloatingMenu from "@/app/components/floating-menu/floating-menu";


interface ProfileProps {

}

const Profile: React.FC<ProfileProps> = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const MenuClick = () => {
        setMenuVisible(!menuVisible);
    };


    const Top = (
        <div className='mx-auto text-2xl'>Perfil</div>
    );



    const Middle = (
        <div>
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

