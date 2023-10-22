import { useContext } from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

import { ThemeContext } from '../../hook/Context/ThemeContext'
import { EventContext } from '../../hook/Context/EventContext'

import SearchField from '../SearchField/SearchField'
import NavbarButtons from '../NavbarButtons/NavbarButtons'

export default function Navbar({ searchbar , to , textButton }) {
    const { navbar } = useContext(ThemeContext)
    const { navRef } = useContext(EventContext)

    return (
        <nav className={`${navbar} py-3`} ref={navRef}>
            <div className="container d-flex justify-content-between align-items-center px-0">
                <Link to='/' className="display-6 logo">Online shop</Link>

                {searchbar && <SearchField />}

                <NavbarButtons to={to} textButton={textButton} />
            </div>
        </nav>
    )
}