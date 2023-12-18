"use client";

import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import { useUserService } from "@/app/_services";
import { useState } from "react";
import RegisterFormInputs from "@/app/_components/account/register/RegisterFormInputs";

const Register: NextPage = () => {
  const userService = useUserService();
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const [isProfile, setIsProfile] = useState(true);
  const fields = {
    firstName: register("firstName", { required: "First Name is required" }),
    lastName: register("lastName", { required: "Last Name is required" }),
    email: register("email", { required: "E-mail is required" }),
    phone: register("phone", { required: "Phone is required" }),
    password: register("password", {
      required: "Password is required",
      minLength: {
        value: 6,
        message: "Password must be at least 6 characters",
      },
    }),
    repeatedPassword: register("repeatedPassword", {
      required: "repeatedPassword is required",
    }),
  };
  const changePage = () => {
    setIsProfile(!isProfile);
  };
  async function onSubmit(user: any) {
    await userService.register(user);
    console.log(user);
  }

  return (
    <>
      <form className="box-container" onSubmit={handleSubmit(onSubmit)}>
        {isProfile && (
          <>
            <h3>Cadastro</h3>
            <RegisterFormInputs
              firstNameProp={fields.firstName}
              lastNameProp={fields.lastName}
              emailProp={fields.email}
              phoneProp={fields.phone}
            />
            <div className="flex flex-row justify-end">
              <button className="btn btn-primary" onClick={changePage}>
                Avançar
              </button>
            </div>
          </>
        )}
        {!isProfile && (
          <>
            <h3>Cadastro - Senha</h3>
            <RegisterFormInputs
              passwordProp={fields.password}
              repeatedPasswordProp={fields.repeatedPassword}
            />
            <div className="flex flex-row justify-end">
              <button className="btn btn-primary" onClick={changePage}>
                Voltar
              </button>
              <button className="btn btn-success">Enviar</button>
            </div>
          </>
        )}
      </form>
    </>
  );
};

export default Register;
