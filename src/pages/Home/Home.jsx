import { useContext } from "react"

import Navbar from "../../components/Navbar/Navbar"
import Backdrop from "../../components/Backdrop/Backdrop"
import CartProducts from "../../components/CartProducts/CartProducts";

import { ThemeContext } from "../../hook/Context/ThemeContext"
import { ContextApi } from "../../hook/Context/ContextApi"

import './home.css'

export default function Home() {
  const { home } = useContext(ThemeContext)

  return (
    <div className={`${home} min-vh-100`}>
      <Backdrop />

      <Navbar searchbar={true} to={'/Login'} textButton={'Login'} />

      <CartProducts />
    </div>
  )
}
