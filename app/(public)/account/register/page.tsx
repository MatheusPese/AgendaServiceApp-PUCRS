"use client";

import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import { useUserService } from "@/app/_services";
import { useState, useRef, useEffect } from "react";
import RegisterFormInputs from "@/app/_components/account/register/RegisterFormInputs";

const Register: NextPage = () => {
  //HOOKS

  //useUserService hooks
  const userService = useUserService();

  //--useForm hooks
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  //--useRef hooks
  const firstNameRef = useRef(null);
  const passwordRef = useRef(null);

  //--useState hooks
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

  useEffect(() => {
    if (isProfile) {
      firstNameRef.current.focus();
    } else {
      passwordRef.current.focus();
    }
  }, [firstNameRef, passwordRef, isProfile]);

  const changePage = () => {
    setIsProfile(!isProfile);
  };

  const setFocus = (input: React.MutableRefObject<HTMLInputElement>) => {
    input.current.focus();
  };

  const onSubmit = async (user: any) => {
    await userService.register(user);
    console.log(user);
  };

  return (
    <>
      <div className="flex-1 flex flex-col justify-center items-center">
        <form className="box-container" onSubmit={handleSubmit(onSubmit)}>
          {isProfile && (
            <>
              <h3>Cadastro</h3>
              <RegisterFormInputs
                firstNameProp={fields.firstName}
                lastNameProp={fields.lastName}
                emailProp={fields.email}
                phoneProp={fields.phone}
                firstNameRef={firstNameRef}
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
                passwordRef={passwordRef}
              />
              <div className="flex flex-row justify-end">
                <button className="btn btn-primary" onClick={changePage}>
                  Voltar
                </button>
                <button
                  disabled={formState.isSubmitting}
                  className="btn btn-success"
                >
                  {formState.isSubmitting && (
                    <span className="spinner-border spinner-border-sm me-1"></span>
                  )}
                  Enviar
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default Register;

//TODO: Arrumar uma forma de voltar facilmente para a tela de login, sem precisar cadastrar caso o usuário tenha clicado acidentalmente.
