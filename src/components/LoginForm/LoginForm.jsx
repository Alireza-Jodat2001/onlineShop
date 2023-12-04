import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../hook/Context/LoginContext";

export default function LoginForm() {
  const {
    username,
    showError,
    email,
    password,
    showPassword,
    verified,
    LoginState,
    dispatchLogin,
    handleInputChange,
    FormErrorSubmit,
    formErrorOnchange,
    validation,
    handleShowPassword,
    resetFunction,
  } = useContext(LoginContext);

  return (
    <form
      name="login"
      id="login"
      onSubmit={(event) => event.preventDefault()}
      className="login flex flex-col items-center rounded-md mt-14 mx-auto [&>div]:w-3/4 [&_input]:outline-0 [&_input]:border-b dark:bg-gray-900"
    >
      <h4 className="text-center text-2xl text-slate-300 my-4">LOGIN FORM</h4>

      <div className="mt-3">
        <input
          autoComplete="on"
          value={username}
          className="bg-transparent w-full border-0 ps-2 pb-2"
          placeholder="Username"
          name="username"
          onChange={(event) => {
            dispatchLogin(formErrorOnchange(validation(LoginState)));
            dispatchLogin(handleInputChange(event));
          }}
        />
        {showError.usernameError && (
          <p className={`${showError.animationError} text-red-600 pt-2`}>
            {showError.usernameError}
          </p>
        )}
      </div>

      <div>
        <input
          autoComplete="on"
          value={email}
          className="bg-transparent w-full border-0 ps-2 pb-2"
          type="email"
          id="email_input"
          placeholder="email"
          name="email"
          onChange={(event) => {
            dispatchLogin(formErrorOnchange(validation(LoginState)));
            dispatchLogin(handleInputChange(event));
          }}
        />
        {showError.emailError && (
          <p className={`${showError.animationError} text-red-600 pt-2`}>
            {showError.emailError}
          </p>
        )}
      </div>

      <div>
        <div className="relative">
          <input
            autoComplete="on"
            value={password}
            className="bg-transparent w-full border-0 ps-2 pb-2"
            type={showPassword.inputType}
            id="password_input"
            placeholder="password"
            name="password"
            onChange={(event) => {
              dispatchLogin(formErrorOnchange(validation(LoginState)));
              dispatchLogin(handleInputChange(event));
            }}
          />
          <button
            className="showButton absolute bg-transparent border-0 right-1 top-1"
            onClick={() => dispatchLogin(handleShowPassword(LoginState))}
          >
            {showPassword.icon}
          </button>
        </div>
        {showError.passwordError && (
          <p className={`${showError.animationError} text-red-600 pt-2`}>
            {showError.passwordError}
          </p>
        )}
      </div>

      <div className="flex btn_container justify-center items-start gap-3 [&_button]:border">
        <Link to={`${verified.path}`} className="w-2/4">
          <button
            className={`bg-transparent ${verified.button} w-full border-0 py-2`}
            onClick={() =>
              dispatchLogin(FormErrorSubmit(LoginState, validation(LoginState)))
            }
          >
            Login
          </button>
        </Link>
        <button
          className="bg-transparent w-2/4 border-0 py-2"
          onClick={() => dispatchLogin(resetFunction())}
        >
          Reset
        </button>
      </div>
    </form>
  );
}
