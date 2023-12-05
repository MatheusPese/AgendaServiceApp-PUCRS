'use client'

import React, { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface LoginFormProps {
  //transformar elementos do formulario em props
}

const LoginForm: React.FC<LoginFormProps> = () => {
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    router.push('/business-panel'); // Replace '/redirect-path' with your desired path
  };

  return (
    <div className='flex-row pt-10 pb-11 px-7 bg-black bg-opacity-20 rounded-lg z-0'>
      <div className='text-white z-10 mb-5'>Conectar</div>
      <form onSubmit={handleSubmit}>
        <input
          id='phone-or-mail'
          name='phone-or-mail'
          type='text'
          autoComplete='phone-or-mail'
          required
          placeholder='E-mail ou Telefone'
          className='block w-full rounded-md border-0 py-1.5 mb-5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        />
        <input
          id='password'
          name='password'
          type='password'
          autoComplete='password'
          required
          placeholder='Senha'
          className='block w-full rounded-md border-0 py-1.5 mb-5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        />
        <button
          type='submit'
          className='block p-2 bg-black bg-opacity-20 text-white px-14 py-2 mx-auto'
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
