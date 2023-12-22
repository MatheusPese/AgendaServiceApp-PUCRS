// Directive used to delare a boundary between a server and a client component module.
"use client";

// Import necessary modules and components
import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import { useUserService } from "@/app/_services";
import { useState } from "react";
import RegisterFormInputs from "@/app/_components/account/register/RegisterFormInputs";

// Define the Register functional component
const Register: NextPage = () => {
  // HOOKS

  // useUserService hooks
  const userService = useUserService();

  // useForm hooks
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  // useState hooks
  const [isProfile, setIsProfile] = useState(true);

  // Define form fields with validation rules
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
    password_confirmation: register("password_confirmation", {
      required: "Password confirmation is required",
    }),
  };

  // Function to toggle between profile and password pages
  const changePage = () => {
    setIsProfile(!isProfile);
  };

  // Function to handle form submission
  const onSubmit = async (user: any) => {
    await userService.register(user);
    console.log(user);
  };

  // Render the component
  return (
    <>
      <div className="flex-1 flex flex-col justify-center items-center">
        <form className="box-container" onSubmit={handleSubmit(onSubmit)}>
          {/* Render profile form if isProfile is true */}
          {isProfile && (
            <>
              {/* Profile form */}
              <h3>Cadastro</h3>
              <RegisterFormInputs
                firstNameProp={fields.firstName}
                lastNameProp={fields.lastName}
                emailProp={fields.email}
                phoneProp={fields.phone}
              />
              {/* Navigation buttons */}
              <div className="flex flex-row justify-between gap-2 pt-4">
                <Link href="/account/login" className="btn btn-outline-primary">
                  Cancelar
                </Link>
                <button className="btn btn-primary" onClick={changePage}>
                  Avançar
                </button>
              </div>
            </>
          )}
          {/* Render password form if isProfile is false */}
          {!isProfile && (
            <>
              {/* Password form */}
              <h3>Cadastro - Senha</h3>
              <RegisterFormInputs
                passwordProp={fields.password}
                repeatedPasswordProp={fields.password_confirmation}
              />
              {/* Navigation buttons */}
              <div className="flex flex-row justify-end">
                <button className="btn btn-primary" onClick={changePage}>
                  Voltar
                </button>
                <button
                type="submit"
                  disabled={formState.isSubmitting}
                  className="btn btn-success"
                >
                  {/* Show spinner while form is submitting */}
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

// Export the Register component as the default export
export default Register;
