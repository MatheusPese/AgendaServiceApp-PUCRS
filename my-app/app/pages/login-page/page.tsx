'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import "./login-page.css"

// Extracted styles as constants
const formContainerStyles = 'm-auto pt-10 pb-11 px-7 bg-black bg-opacity-20 rounded-lg';

const LoginButton: React.FC = () => {
  return (
    <button
      id='entrar'
      type='submit'
      className='login-button'
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
      className='login-input'
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
      className='login-input'
    />
  );
};

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('/pages/business-panel');
  };

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between`}>
      <div className={formContainerStyles}>
        <div className='text-white mb-5'>Conectar</div>
        <form onSubmit={handleSubmit}>
          <IdInput />
          <PasswordInput />
          <LoginButton />
        </form>
      </div>
    </main>
  );
}
