import { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Backdrop from "../../components/Backdrop/Backdrop";
import CartProducts from "../../components/CartProducts/CartProducts";
import { ContextApi } from "../../hook/Context/ContextApi";
import "./home.css";

export default function Home() {
  return (
    <div>
      <Backdrop />
      <Navbar searchbar={true} to={"/Login"} textButton={"Login"} />
      <CartProducts />
    </div>
  );
}
