"use client"

import { useState }       from "react";

import PageTemplate       from "@/app/_components/globals/PageTemplate";
import Button             from "@/app/_components/globals/Button";
import FloatingMenu       from "@/app/_components/globals/FloatingMenu";
import DataCardCollection from "@/app/_components/appointments/DataCardCollection";

export default function Home(){
      const [menuVisible, setMenuVisible] = useState(false);
  
      const toggleMenu = () => {
        setMenuVisible(!menuVisible);
      };


      const Header =(
            <h2>Salvar Compromisso</h2>

      );
      const Body = (
        <div id="body-content" className="flex justify-center items-center h-full w-full flex-grow">
          <DataCardCollection/>
          
          {menuVisible && <FloatingMenu />}
        </div>
      );

      const Footer=(
            <div className="flex w-full justify-between gap-3">
                  <Button type="button" size="medium" customStyle="transparent" onClick={toggleMenu}>Menu</Button>        
            </div>      
      );


      return(
            <PageTemplate classesBody="bg-[rgba(34, 34, 34, 0.3)] w-full h-full overflow-hidden flex-col items-center flex-grow">
                  {{Header, Body, Footer}}
           </PageTemplate>
      );


}