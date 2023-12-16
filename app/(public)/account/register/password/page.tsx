import type { NextPage } from "next";

const RegisterPassword: NextPage = () => {
  return (
    <>
      <h3>Cadastro de Senha</h3>
      <form className="flex flex-col gap-3">
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Repetir Senha" />
        <button>Confirmar</button>
      </form>
    </>
  );
};

export default RegisterPassword;
