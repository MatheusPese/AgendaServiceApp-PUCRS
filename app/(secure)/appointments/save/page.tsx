"use client"

import { useState }       from "react";

import PageTemplate       from "@/app/_components/globals/PageTemplate";
import Button             from "@/app/_components/globals/Button";
import FloatingMenu       from "@/app/_components/globals/FloatingMenu";


export default function Home(){

      const ClientName = "Fulano da Silva";
      const ServiceName = "Pedicure";
      const ServiceDate = "01-01-2024";
      const EmployeeName = "Ciclano de Souza"
      const ServiceTime = "00:00"


      const [menuVisible, setMenuVisible] = useState(false);
  
      const toggleMenu = () => {
        setMenuVisible(!menuVisible);
      };


      const Header =(
            <h2>Salvar Compromisso</h2>

      );
      const Body =(
            <>
            <div>
                  <div>
                        <div>Cliente</div>
                        <div>{ClientName}</div>
                  </div>
                  <div>
                        <div>Serviço</div>
                        <div>{ServiceName}</div>
                  </div>
                  <div>
                        <div>Data</div>
                        <div>{ServiceDate}</div>
                  </div>
                  <div>
                        <div>Funcionário</div>
                        <div>{EmployeeName}</div>
                  </div>
                  <div>
                        <div>Hora</div>
                        <div>{ServiceTime}</div>
                  </div>
            </div>
            {/* TODO: Create components for each div separation of a box, following the design in Figma */}

            {menuVisible && <FloatingMenu />}
            </>
      );

      const Footer=(
            <div className="flex w-full justify-between gap-3">
                  <Button type="button" size="medium" customStyle="transparent" onClick={toggleMenu}>Menu</Button>
                  
            </div>      
      );


      return(

            <PageTemplate>
                  {{Header, Body, Footer}}
           </PageTemplate>
      );


}