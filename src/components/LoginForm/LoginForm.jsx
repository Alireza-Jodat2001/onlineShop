import { Link } from "react-router-dom"
import { useContext } from "react"

import { LoginContext } from "../../hook/Context/LoginContext"

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
        resetFunction 
    } = useContext(LoginContext)

    return (
        <form name="login" id="login" onSubmit={(event) => event.preventDefault()} className="login d-flex flex-column align-items-center rounded">
            <h4 className="text-center my-4">LOGIN FORM</h4>

            <div className="mt-3">
                <input 
                    autoComplete="on" 
                    value={username} 
                    className="bg-transparent w-100 border-0 ps-2 pb-2" 
                    placeholder="Username" 
                    name="username" 
                    onChange={(event) => {
                        dispatchLogin(formErrorOnchange(validation(LoginState)))
                        dispatchLogin(handleInputChange(event))
                    }} 
                />

                {showError.usernameError &&
                    <p className={`${showError.animationError} text-danger pt-2`}>{showError.usernameError}</p>
                }
            </div>

            <div>
                <input 
                    autoComplete="on" 
                    value={email} 
                    className="bg-transparent w-100 border-0 ps-2 pb-2" 
                    type="email" 
                    id="email_input" 
                    placeholder="email"  
                    name="email" 
                    onChange={(event) => {
                        dispatchLogin(formErrorOnchange(validation(LoginState)))
                        dispatchLogin(handleInputChange(event))
                    }} 
                />

                {showError.emailError && 
                    <p className={`${showError.animationError} text-danger pt-2`}>{showError.emailError}</p>
                }
            </div>

            <div>
                <div className="position-relative">
                    <input 
                        autoComplete="on" 
                        value={password} 
                        className="bg-transparent w-100 border-0 ps-2 pb-2" 
                        type={showPassword.inputType} 
                        id="password_input" 
                        placeholder="password" 
                        name="password" 
                        onChange={(event) => {
                            dispatchLogin(formErrorOnchange(validation(LoginState)))
                            dispatchLogin(handleInputChange(event))
                        }} 
                    />

                    <button 
                        className="showButton position-absolute bg-transparent border-0" 
                        onClick={() => dispatchLogin(handleShowPassword(LoginState))}
                    >{showPassword.icon}</button>
                </div>
                
                {showError.passwordError && 
                    <p className={`${showError.animationError} text-danger pt-2`}>{showError.passwordError}</p>
                }
            </div>

            <div className="d-flex btn_container justify-content-center align-items-start">
                <Link to={`${verified.path}`} className="w-50">
                    <button 
                        className={`bg-transparent ${verified.button} w-100 border-0 py-2`} 
                        onClick={() => dispatchLogin(FormErrorSubmit(LoginState , validation(LoginState)))}
                    >Login</button>
                </Link>

                <button className="bg-transparent w-50 border-0 py-2" onClick={() => dispatchLogin(resetFunction())}>Reset</button>
            </div>
        </form>
    )
}
