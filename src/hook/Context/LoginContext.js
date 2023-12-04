import { createContext, useReducer } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { InitialstateLogin, LoginReducerFunc } from "../Reducer/LoginReducer";

export const LoginContext = createContext();

export function LoginContextProvider({ children }) {
  const [LoginState, dispatchLogin] = useReducer(
    LoginReducerFunc,
    InitialstateLogin
  );

  function handleInputChange(event) {
    return {
      type: event.target.name,
      data: { name: event.target.name, value: event.target.value },
    };
  }

  function validation(LoginState) {
    let errorObj = {};

    if (!LoginState.email) {
      errorObj.emailError = "Email Required!";
      errorObj.animationError = "animation-error";
    } else if (LoginState.email.length < 11) {
      errorObj.emailError = "Email must be more than 11 char";
      errorObj.animationError = "animation-error";
    } else {
      errorObj.emailError = "";
    }

    if (!LoginState.password) {
      errorObj.passwordError = "Password Required!";
      errorObj.animationError = "animation-error";
    } else if (LoginState.password.length < 8) {
      errorObj.passwordError = "Password must be more than 8 char";
      errorObj.animationError = "animation-error";
    } else {
      errorObj.passwordError = "";
    }

    if (!LoginState.username) {
      errorObj.usernameError = "Username Required!";
      errorObj.animationError = "animation-error";
    } else if (LoginState.username.length < 9) {
      errorObj.usernameError = "Username must be more than 9 char";
      errorObj.animationError = "animation-error";
    } else {
      errorObj.usernameError = "";
    }

    return errorObj;
  }

  function FormErrorSubmit(LoginState, errorObj) {
    if (
      errorObj.emailError == "" &&
      errorObj.passwordError == "" &&
      errorObj.usernameError == ""
    ) {
      return {
        type: "reset",
        reset: {
          email: "",
          password: "",
          username: "",
          verified: {
            usernameVerified: LoginState.username,
            emailVerified: LoginState.email,
          },
          showError: {
            emailError: "",
            passwordError: "",
            usernameError: "",
            animationError: "",
          },
        },
      };
    }

    return { type: "showError", showError: { ...errorObj } };
  }

  function formErrorOnchange(errorObj) {
    if (
      errorObj.emailError == "" &&
      errorObj.passwordError == "" &&
      errorObj.usernameError == ""
    ) {
      return {
        type: "reset",
        reset: {
          verified: {
            path: "/",
          },
          showError: {
            emailError: "",
            passwordError: "",
            usernameError: "",
            animationError: "",
          },
        },
      };
    } else {
      return {
        type: "reset",
        reset: {
          verified: {
            path: "/Login",
          },
          showError: {
            emailError: "",
            passwordError: "",
            usernameError: "",
            animationError: "",
          },
        },
      };
    }
  }

  function handleShowPassword(LoginState) {
    const show = {
      id: "show",
      icon: <FaEye />,
      inputType: "password",
    };
    const hidden = {
      id: "hidden",
      icon: <FaEyeSlash />,
      inputType: "text",
    };

    return {
      type: "showPassword",
      showObj: {
        showPassword: LoginState.showPassword.id === "show" ? hidden : show,
      },
    };
  }

  function resetFunction() {
    return {
      type: "reset",
      reset: {
        email: "",
        password: "",
        username: "",
        showError: {
          emailError: "",
          passwordError: "",
          usernameError: "",
        },
      },
    };
  }

  function logoutFunction() {
    return {
      type: "logout",
      reset: {
        email: "",
        password: "",
        username: "",
        verified: {
          usernameVerified: "",
          emailVerified: "",
          path: "/Login",
        },
        showError: {
          emailError: "",
          passwordError: "",
          usernameError: "",
        },
      },
    };
  }

  const value = {
    LoginState,
    username: LoginState.username,
    showError: LoginState.showError,
    email: LoginState.email,
    password: LoginState.password,
    showPassword: LoginState.showPassword,
    verified: LoginState.verified,
    dispatchLogin,
    handleInputChange,
    FormErrorSubmit,
    handleShowPassword,
    formErrorOnchange,
    validation,
    resetFunction,
    logoutFunction,
  };

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
}
