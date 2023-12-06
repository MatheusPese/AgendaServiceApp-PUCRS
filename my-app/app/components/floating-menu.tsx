import React from "react";

interface FloatingMenuProps {
    
}
 
const FloatingMenu: React.FC<FloatingMenuProps> = () => {
    return ( 
    <div className="bg-white w-20 h-20 m-auto">
        <button>Tela Inicial</button>
        <button>Perfil</button>
        <button>Desconectar-se</button>
    </div> 
    );
}
 
export default FloatingMenu;