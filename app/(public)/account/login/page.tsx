"use client";
import Link from "next/link";

import React from "react";
import { useUserService } from "@/app/_services";
import { useForm } from "react-hook-form";
import Button from "@/app/_components/globals/Button";

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
    <main className="page-container">
      <div className="page-body items-center overflow-hidden">
        <div className="semitransparent-box">
          <h3>Conectar</h3>
          <form className="flex flex-col gap-4"  onSubmit={handleSubmit(onSubmit)}>
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
                className={`form-control ${
                  errors.password ? " is-invalid" : ""
                }`}
              />
            </div>
            
            <Button size="small" type="submit" customStyle="transparent" disabled={formState.isSubmitting} className="m-[0 auto]">
              Entrar
            </Button>
          </form>
        </div>
      </div>

      <footer className="page-footer bg-green-600 max-h-3">
        <Link href="/account/register">
          Ainda não possuí cadastro? Clique aqui para cadastrar!
        </Link>
      </footer>
    </main>
  );
}
