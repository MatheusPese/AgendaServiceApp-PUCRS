import { FunctionComponent, useState, useEffect, useRef } from "react";

interface ProfileProps {
  firstNameProp?: any;
  lastNameProp?: any;
  emailProp?: any;
  phoneProp?: any;
  passwordProp?: any;
  repeatedPasswordProp?: any;
  firstNameRef?: any;
  passwordRef?: any;
}

const RegisterFormInputs: FunctionComponent<ProfileProps> = ({
  firstNameProp,
  lastNameProp,
  emailProp,
  phoneProp,
  passwordProp,
  repeatedPasswordProp,
  firstNameRef,
  passwordRef,
}) => {
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [progress, setProgress] = useState("");
  const [passwordMatch, setPasswordMatch] = useState("is-invalid");

  useEffect(() => {
    if (password !== "" || repeatedPassword !== "") {
      password === repeatedPassword
        ? setPasswordMatch("is-valid")
        : setPasswordMatch("is-invalid");
    } else {
      setPasswordMatch("");
    }
  }, [password, repeatedPassword]);

  const handlePassword = (
    passwordValue: string,
    isRepeated?: false | boolean
  ) => {
    if (!isRepeated) {
      setPassword(passwordValue);
    } else {
      setRepeatedPassword(passwordValue);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {firstNameProp && (
        <input
          {...firstNameProp}
          ref={firstNameRef}
          type="text"
          placeholder="Nome"
          className="text-black form-control"
        />
      )}
      {lastNameProp && (
        <input
          {...lastNameProp}
          type="text"
          placeholder="Sobrenome"
          className="text-black form-control"
        />
      )}
      {emailProp && (
        <input
          {...emailProp}
          type="email"
          placeholder="E-mail"
          className="text-black form-control"
        />
      )}
      {phoneProp && (
        <input
          {...phoneProp}
          type="tel"
          placeholder="Telefone"
          className="text-black form-control"
        />
      )}
      {passwordProp && (
        <div>
          <input
            {...passwordProp}
            ref={passwordRef}
            value={password}
            onChange={({ target }) => {
              handlePassword(target.value, false);
            }}
            type="password"
            placeholder="Senha"
            className={`text-black form-control ${passwordMatch}`}
          />
        </div>
      )}
      {repeatedPasswordProp && (
        <div>
          <input
            {...repeatedPasswordProp}
            value={repeatedPassword}
            onChange={({ target }) => {
              handlePassword(target.value, true);
            }}
            type="password"
            placeholder="Repetir Senha"
            className={`text-black form-control ${passwordMatch}`}
          />
          {passwordMatch === "is-invalid" && (
            <p className="text-danger">Passwords don't match</p>
          )}
        </div>
      )}
    </div>
  );
};

export default RegisterFormInputs;
