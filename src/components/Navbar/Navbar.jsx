import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { EventContext } from "../../hook/Context/EventContext";
import SearchField from "../SearchField/SearchField";
import NavbarButtons from "../NavbarButtons/NavbarButtons";

export default function Navbar({ searchbar, to, textButton }) {
  const { navRef } = useContext(EventContext);

  return (
    <nav className={`py-5 z-10 sticky top-0 dark:bg-gray-900`} ref={navRef}>
      <div className="container flex justify-between items-center md:px-16">
        <Link to="/" className="text-4xl dark:text-slate-300 font-semibold">
          Online shop
        </Link>
        {searchbar && <SearchField />}
        <NavbarButtons to={to} textButton={textButton} />
      </div>
    </nav>
  );
}
