"use client";
import Link from "next/link";

import React, { useState } from "react";
import "./style.css";
import { useUserService } from "@/app/_services";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const userService = useUserService();

  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const fields = {
    email: register("email", { required: "E-mail is required" }),
    password: register("password", { required: "Password is required" }),
  };

  async function onSubmit({ email, password }: any) {
    await userService.login(email, password);
  }

  return (
    <main className="flex-1 flex flex-col items-center justify-center">
      <div className="page-body flex-1 flex flex-col items-center justify-center">
        <div className="box-container">
          <h3>Conectar</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              <input
                {...fields.email}
                required
                placeholder="Login"
                type="text"
                className={`form-control ${errors.email ? " is-invalid" : ""}`}
              />
              <input
                {...fields.password}
                required
                placeholder="Senha"
                type="password"
                className={`form-control ${errors.password ? " is-invalid" : ""
                  }`}
              />
            </div>
            <button disabled={formState.isSubmitting} className="login-button">
              Entrar
            </button>
          </form>
        </div>
      </div>
      <footer className="page-footer bg-green-500 w-full">
        <Link href="/account/register">
          Ainda não possuí cadastro? Clique aqui para cadastrar!
        </Link>
      </footer>
    </main>
  );
}
