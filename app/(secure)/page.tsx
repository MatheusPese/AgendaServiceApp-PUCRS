'use client';

import { useEffect } from 'react';
import { useAgendaService, useUserService } from '@/app/_services';
import { redirect } from 'next/navigation';

export default Home;

function Home() {
  const userService = useUserService();
  const agendaService = useAgendaService();

  const user = userService.currentUser;
  const userAgendas = agendaService.userAgendas;

  useEffect(() => {
    const fetchData = async () => {
      await userService.getCurrent();
    }
      fetchData();    
  }, []);


  useEffect(()=>{
    const fetchData = async () => {
      await agendaService.getCurrentUserAgendas();
    }
  
    fetchData().then(
      () => {console.log("agendas: ", userAgendas);}
    )
  
  },[user])

  if (user) {
      redirect('/agendas');
  } else {
      return (
      <div className="flex items-center justify-center text-3xl h-screen">
        <span className="spinner-border me-2"></span> Carregando... 
      </div>
      )
  }
}
