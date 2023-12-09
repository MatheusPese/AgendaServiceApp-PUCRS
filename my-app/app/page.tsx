'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Verificar se o usuário está autenticado
    const isLoggedIn = /* Verificação de autenticação necessária */ false;

    // Redirecionar com base no status de login
    if (isLoggedIn) {
      router.push('/business-panel'); // Redirecionar para o painel de negócios se estiver autenticado
    } else {
      router.push('/account/login'); // Redirecionar para a página de login se não estiver autenticado
    }
  }, []);
}
