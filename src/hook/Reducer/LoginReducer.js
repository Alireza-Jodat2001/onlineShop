import { FaEye } from "react-icons/fa";

export const InitialstateLogin = {
  email: "",
  password: "",
  username: "",
  verified: {
    usernameVerified: "Alireza Jodat",
    emailVerified: "alirezajodat2001@gmail.com",
    path: "/Login",
  },
  showError: {
    emailError: "",
    passwordError: "",
    usernameError: "",
    animationError: "",
  },
  showPassword: {
    id: "show",
    icon: <FaEye />,
    inputType: "password",
  },
};

export function LoginReducerFunc(state, action) {
  switch (action.type) {
    case "username":
      return { ...state, [action.data.name]: action.data.value };
    case "email":
      return { ...state, [action.data.name]: action.data.value };
    case "password":
      return { ...state, [action.data.name]: action.data.value };
    case "showError":
      return { ...state, showError: action.showError };
    case "showPassword":
      return { ...state, ...action.showObj };
    case "reset":
      return { ...state, ...action.reset };
    case "logout":
      return { ...state, ...action.reset };
    default:
      return state;
  }
}
