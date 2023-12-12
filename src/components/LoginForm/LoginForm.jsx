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
            className="login flex flex-col items-center rounded-md mt-14 mx-auto [&>div]:w-3/4 [&_input]:outline-0 [&_input]:border-b dark:bg-gray-900 [&_input]:bg-transparent [&_input]:w-full [&_input]:border-0 [&_input]:dark:border-gray-400 [&_input]:ps-2 [&_input]:pb-2 [&_input]:dark:text-gray-400 focus:[&_input]:dark:text-cyan-500 focus:[&_input]:dark:border-cyan-500 [&_input:focus::placeholder]:dark:text-cyan-500 [&_input::placeholder]:transition-all"
        >
            <h4 className="text-center text-2xl text-slate-300 my-4">
                LOGIN FORM
            </h4>

            <div className="mt-3">
                <input
                    autoComplete="on"
                    value={username}
                    placeholder="Username"
                    name="username"
                    onChange={(event) => {
                        dispatchLogin(
                            formErrorOnchange(validation(LoginState))
                        );
                        dispatchLogin(handleInputChange(event));
                    }}
                />
                {showError.usernameError && (
                    <p
                        className={`${showError.animationError} text-red-600 pt-2`}
                    >
                        {showError.usernameError}
                    </p>
                )}
            </div>

            <div>
                <input
                    autoComplete="on"
                    value={email}
                    type="email"
                    id="email_input"
                    placeholder="email"
                    name="email"
                    onChange={(event) => {
                        dispatchLogin(
                            formErrorOnchange(validation(LoginState))
                        );
                        dispatchLogin(handleInputChange(event));
                    }}
                />
                {showError.emailError && (
                    <p
                        className={`${showError.animationError} text-red-600 pt-2`}
                    >
                        {showError.emailError}
                    </p>
                )}
            </div>

            <div>
                <div className="relative">
                    <input
                        autoComplete="on"
                        value={password}
                        type={showPassword.inputType}
                        id="password_input"
                        className="[&:focus+button]:dark:text-cyan-500"
                        placeholder="password"
                        name="password"
                        onChange={(event) => {
                            dispatchLogin(
                                formErrorOnchange(validation(LoginState))
                            );
                            dispatchLogin(handleInputChange(event));
                        }}
                    />
                    <button
                        className="showButton absolute bg-transparent border-0 right-1 top-1 dark:text-gray-400"
                        onClick={() =>
                            dispatchLogin(handleShowPassword(LoginState))
                        }
                    >
                        {showPassword.icon}
                    </button>
                </div>
                {showError.passwordError && (
                    <p
                        className={`${showError.animationError} text-red-600 pt-2`}
                    >
                        {showError.passwordError}
                    </p>
                )}
            </div>

            <div className="flex btn_container justify-center items-start gap-3 [&_button]:border">
                <Link
                    to={`${verified.path}`}
                    className="w-2/4 dark:text-gray-400"
                >
                    <button
                        className={`bg-transparent ${verified.button} w-full border-0 py-2 dark:border-gray-400 dark:hover:border-green-600 dark:hover:text-green-600`}
                        onClick={() =>
                            dispatchLogin(
                                FormErrorSubmit(
                                    LoginState,
                                    validation(LoginState)
                                )
                            )
                        }
                    >
                        Login
                    </button>
                </Link>
                <button
                    className="bg-transparent w-2/4 border-0 py-2 dark:border-gray-400  dark:text-gray-400 dark:hover:border-red-700 dark:hover:text-red-700"
                    onClick={() => dispatchLogin(resetFunction())}
                >
                    Reset
                </button>
            </div>
        </form>
    );
}
