"use client";

import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import { useUserService } from '@/app/_services';
import { useState } from "react";

const Register: NextPage = () => {
  const userService = useUserService();
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const fields = {
    firstName: register("firstName", { required: "First Name is required" }),
    lastName: register("lastName", { required: "Last Name is required" }),
    email: register("email", { required: "E-mail is required" }),
    phone: register("phone", { required: "Phone is required" }),
    password: register('password', {
      required: 'Password is required',
      minLength: { value: 6, message: 'Password must be at least 6 characters' }
  })
  };
  
  async function onSubmit(user: any) {
    await userService.register(user);
  };

  const [value, setValue] = useState("");

  return (
    <>
      <h3>Cadastro</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <input {...fields.firstName} type="text" placeholder="Nome" className="text-black"/>
        <input {...fields.lastName} type="text" placeholder="Sobrenome" className="text-black"/>
        <input {...fields.email} type="email" placeholder="E-mail" className="text-black"/>
        <input {...fields.phone} type="tel" placeholder="Telefone" className="text-black"/>
        <input {...fields.password} value={value} onChange={(event) => setValue(event.target.value)} type={value ? "password" : "text"} placeholder="Senha" className="text-black"/>
        <button disabled={formState.isSubmitting}>Confirmar</button>
      </form>
    </>
  );
};

export default Register;
