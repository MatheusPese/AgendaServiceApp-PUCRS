'use client'

import { useState } from 'react';
import React from 'react';
import { useRouter } from 'next/navigation';
import "./style.css"

interface InputProps{
  value: string;
  onChange: (value: string) => void;
}
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

const IdInput: React.FC<InputProps> = ({value, onChange}) => {
  return (
    <input
      id='phone-or-mail'
      name='phone-or-mail'
      type='text'
      autoComplete='phone-or-mail'
      required
      placeholder='E-mail ou Telefone'
      className='login-input'
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

const PasswordInput: React.FC<InputProps> = ({value, onChange}) => {
  return (
    <input
      id='password'
      name='password'
      type='password'
      autoComplete='password'
      required
      placeholder='Senha'
      className='login-input'
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //const isValidPassword = await verifyPassword(username, password);
    const isValidPassword = false

    if (isValidPassword) {
      router.push('/pages/business-panel');
    }
    else{
      alert("Login ou Senha invalidos.")
    }

    
  };

  
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between`}>
      <div className='form-container'>
        <div className='text-white mb-5'>Conectar</div>
        <form onSubmit={handleSubmit}>
          <IdInput value={username} onChange={setUsername} />
          <PasswordInput value={password} onChange={setPassword}/>
          <LoginButton />
        </form>
      </div>
    </main>
  );
}
