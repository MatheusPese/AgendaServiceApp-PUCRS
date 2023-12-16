"use client";

import type { NextPage } from "next";

const RegisterPage: NextPage = () => {
  return (
    <>
      <h3>Cadastro</h3>
      <form className="flex flex-col gap-3">
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Sobrenome" />
        <input type="email" placeholder="E-mail" />
        <input type="tel" placeholder="Telefone" />
        <button>Confirmar</button>
      </form>
    </>
  );
};

export default RegisterPage;
