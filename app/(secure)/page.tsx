'use client';

import { useEffect } from 'react';
import { useAgendaService, useUserService } from '@/app/_services';
import { redirect } from 'next/navigation';

export default Home;

function Home() {
    const userService = useUserService();
    const agendaService = useAgendaService();

    const user = userService.currentUser;
    const agendas = agendaService.userAgendas;

    useEffect(() => {

        const fetchData = async () => {
            await userService.getCurrent();
        }

        fetchData();    
    }, []);


    useEffect(()=>{
        const fetchData = async () => {
            await agendaService.getAll();
        }
        fetchData().then(
          () => {console.log("agendas: ", agendas);}
          )
    
    },[user])

    if (user) {
        redirect('/agendas');
    } else {
        return <p>loading... <span className="spinner-border spinner-border-sm me-1"></span></p>;
    }
}
