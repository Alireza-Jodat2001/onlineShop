import { useContext } from "react"

import Navbar from "../../components/Navbar/Navbar"
import LoginForm from "../../components/LoginForm/LoginForm"

import { ThemeContext } from "../../hook/Context/ThemeContext"

import './login.css'

export default function Login() {
    const { login } = useContext(ThemeContext)

    return (
        <div className={`${login} pb-5 min-vh-100`}>
            <Navbar searchbar={false} to={'/'} textButton={'Back to Home'} />

            <LoginForm />
        </div>
    )
}