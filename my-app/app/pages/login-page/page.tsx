'use client'

import React from 'react';
import { useRouter } from 'next/navigation';

// Extracted styles as constants
const buttonStyles = 'block p-2 bg-black bg-opacity-20 text-white px-14 py-2 mx-auto';
const inputStyles = 'block w-full rounded-md border-0 py-1.5 mb-5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6';
const backgroundStyles = 'bg-gradient-to-bl from-blue-400 via-teal-600 to-teal-300';
const formContainerStyles = 'm-auto pt-10 pb-11 px-7 bg-black bg-opacity-20 rounded-lg';
const connectTextStyles = 'text-white mb-5';

const LoginButton: React.FC = () => {
  return (
    <button
      id='entrar'
      type='submit'
      className={buttonStyles}
    >
      Entrar
    </button>
  );
};

const IdInput: React.FC = () => {
  return (
    <input
      id='phone-or-mail'
      name='phone-or-mail'
      type='text'
      autoComplete='phone-or-mail'
      required
      placeholder='E-mail ou Telefone'
      className={inputStyles}
    />
  );
};

const PasswordInput: React.FC = () => {
  return (
    <input
      id='password'
      name='password'
      type='password'
      autoComplete='password'
      required
      placeholder='Senha'
      className={inputStyles}
    />
  );
};

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('/business-panel');
  };

  return (
    <main className={`${backgroundStyles} flex min-h-screen flex-col items-center justify-between`}>
      <div className={formContainerStyles}>
        <div className={connectTextStyles}>Conectar</div>
        <form onSubmit={handleSubmit}>
          <IdInput />
          <PasswordInput />
          <LoginButton />
        </form>
      </div>
    </main>
  );
}
