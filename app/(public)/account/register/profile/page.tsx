"use client";

import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import { useUserService } from '@/app/_services';

const Register: NextPage = () => {
  const userService = useUserService();
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const fields = {
    firstName: register("firstName", { required: "First Name is required" }),
    lastName: register("lastName", { required: "Last Name is required" }),
    email: register("email", { required: "E-mail is required" }),
    phone: register("phone", { required: "Phone is required" }),
  };
  
  async function onSubmit(user: any) {
    await userService.register(user);
  };

  return (
    <>
      <h3>Cadastro</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <input {...fields.firstName} type="text" placeholder="Nome" />
        <input {...fields.lastName} type="text" placeholder="Sobrenome" />
        <input {...fields.email} type="email" placeholder="E-mail" />
        <input {...fields.phone} type="tel" placeholder="Telefone" />
        <button disabled={formState.isSubmitting}>Confirmar</button>
      </form>
    </>
  );
};

export default Register;
