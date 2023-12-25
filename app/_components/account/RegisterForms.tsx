import { FunctionComponent, useState, useEffect } from "react";

interface ProfileProps {
  firstName?: any;
  lastName?: any;
  email?: any;
  phone?: any;
  type?: "password" | "profile";
}

interface PasswordProps {
  password?: any;
  confirmPassword?: any;
  type?: "password" | "profile";
}

const RegisterForms: FunctionComponent<ProfileProps & PasswordProps> = (
  { firstName, lastName, email, phone, password, confirmPassword, type }
) => {
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [passwordValidationClass, setPasswordValidationClass] = useState("");
  const [passwordMismatchMessage, setPasswordMismatchMessage] = useState("");

  useEffect(() => {
    if (passwordValue !== "" || confirmPasswordValue !== "") {
      passwordValue === confirmPasswordValue
        ? setPasswordValidationClass("is-valid")
        : setPasswordValidationClass("is-invalid");
    } else {
      setPasswordValidationClass("");
    }
  }, [passwordValue, confirmPasswordValue]);

  const handlePasswordChange = (
    value: string,
    isConfirmPassword: boolean = false
  ) => {
    if (!isConfirmPassword) {
      setPasswordValue(value);
    } else {
      setConfirmPasswordValue(value);
    }
  };

  return (
    <>
      {type === "profile" && (
        <div className="flex flex-col gap-3">
          <input
            {...firstName}
            type="text"
            placeholder="Nome"
            className="text-black form-control"
          />
          <input
            {...lastName}
            type="text"
            placeholder="Sobrenome"
            className="text-black form-control"
          />
          <input
            {...email}
            type="email"
            placeholder="E-mail"
            className="text-black form-control"
          />
          <input
            {...phone}
            type="tel"
            placeholder="Telefone"
            className="text-black form-control"
          />
        </div>
      )}
      {type === "password" && (
        <div className="flex flex-col gap-3">
          <input 
            {...password}
            value={passwordValue}
            onChange={({ target }) => {
              handlePasswordChange(target.value);
            }}
            type="password"
            placeholder="Senha"
            className={`text-black form-control ${passwordValidationClass}`}
          />
          <input
            {...confirmPassword}
            value={confirmPasswordValue}
            onChange={({ target }) => {
              handlePasswordChange(target.value, true);
            }}
            type="password"
            placeholder="Repetir Senha"
            className={`text-black form-control ${passwordValidationClass}`}
          />
          {passwordValidationClass === "is-invalid" && (
            <p className="text-danger">{passwordMismatchMessage}</p>
          )}
        </div>
      )}
    </>
  );
};
export default RegisterForms;
