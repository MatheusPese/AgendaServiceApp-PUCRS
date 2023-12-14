'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import "./style.css"
import { useUserService } from '@/app/_services';
import { useForm } from 'react-hook-form';

interface IdInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const LoginButton: React.FC = () => {
  return (
    <button
      className='login-button'
    >
      Entrar
    </button>
  );
};

const IdInput: React.FC<IdInputProps> = (className, {...props}) => {
  return (
    <input
      id='phone-or-mail'
      required
      type='text'
      placeholder='E-mail ou Telefone'
      className={`login-input ${className}`}
      {...props}
    />
  );
};

const PasswordInput: React.FC<IdInputProps> = (className, {...props}) => {
  return (
    <input
      id='password'
      required
      type='password'
      placeholder='Senha'
      className={`login-input ${className}`}
      {...props}

    />
  );
};

export default function LoginPage() {

  const userService = useUserService();

  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const router = useRouter();

  const fields = {
    username: register('username', { required: 'Username is required' }),
    password: register('password', { required: 'Password is required' })
};

  async function onSubmit({ username, password }: any) {
    await userService.login(username, password);

    //const isValidPassword = await verifyPassword(username, password);
    const isValidPassword = false

    if (isValidPassword) {
      router.push('/business-panel');
    }
    else {
      alert("Login ou Senha invalidos.")
    }


  };


  return (
    <main className={`flex min-h-screen flex-col items-center justify-between`}>
      <div className='form-container'>
        <div className='text-white mb-5'>Conectar</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <IdInput {...fields.username} className={`${errors.username ? 'is-invalid' : ''}`} />
          <div className="invalid-feedback">{errors.username?.message?.toString()}</div>
          <PasswordInput {...fields.password} className={`${errors.password ? 'is-invalid' : ''}`} />
          <div className="invalid-feedback">{errors.password?.message?.toString()}</div>
          <LoginButton/>
        </form>
      </div>
    </main>
  );
}
