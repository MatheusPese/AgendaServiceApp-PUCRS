"use client";
import Link from "next/link";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./style.css";
import { useUserService } from "@/app/_services";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const userService = useUserService();

  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const router = useRouter();

  const fields = {
    username: register("username", { required: "Username is required" }),
    password: register("password", { required: "Password is required" }),
  };

  async function onSubmit({ username, password }: any) {
    await userService.login(username, password);
  }

  return (
    <main className="flex-1 flex flex-col items-center justify-center h-1/2">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="form-container">
          <h3>Conectar</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              <input
                {...fields.username}
                required
                placeholder="Login"
                type="text"
                className={`login-input ${
                  errors.username ? " is-invalid" : ""
                }`}
              />
              <input
                {...fields.password}
                required
                placeholder="Senha"
                type="password"
                className={`login-input ${
                  errors.password ? " is-invalid" : ""
                }`}
              />
            </div>
            <button disabled={formState.isSubmitting} className="login-button">
              Entrar
            </button>
          </form>
        </div>
      </div>
      <footer className="bg-green-500 w-full">
        <Link href="/account/register">
          Ainda não possuí cadastro? Clique aqui para cadastrar!
        </Link>
      </footer>
    </main>
  );
}
