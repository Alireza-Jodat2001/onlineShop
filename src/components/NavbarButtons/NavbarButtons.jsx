import { useContext } from "react"
import { Link } from "react-router-dom"

import { EventContext } from "../../hook/Context/EventContext"
import { LoginContext } from "../../hook/Context/LoginContext"
import { ThemeContext } from "../../hook/Context/ThemeContext"

export default function NavbarButtons({ to , textButton }) {    
    const { closeElement , dropdown , dispatchEvent } = useContext(EventContext)
    const { verified , dispatchLogin , logoutFunction } = useContext(LoginContext)
    const { dispatchTheme , handleTheme , ThemeState , icon } = useContext(ThemeContext)

    return (
        <div className="btn_container d-flex align-items-center">
            {verified.usernameVerified ? 
                <div className='dropdown_menue position-relative rounded' clickoutside=''>
                    <button
                        className='border-0 px-3 rounded'
                        onClick={() => {
                            dispatchEvent (
                                dropdown == 'open' ?
                                closeElement() :
                                {type: 'dropdown' , data: {dropdown: 'open' , backdrop: 'open'}}
                            )
                        }}
                    >
                        {verified.usernameVerified}

                        <img className='rounded-circle ms-2' src="https://www.e-estekhdam.com/img/user/male.png" width='20px' height='20px' />
                    </button>

                    <div className={`${dropdown} position-absolute rounded mt-4 px-3`}>
                        <div>
                            <div className='text-center py-3'>
                                <img className='rounded-circle' src="https://www.e-estekhdam.com/img/user/male.png" width='50px' height='50px' />
                            </div>

                            <div>
                                <h5 className='text-center m-0'>{verified.usernameVerified}</h5>

                                <p className='text-center'>{verified.emailVerified}</p>
                            </div>
                        </div>

                        <div className='d-flex gap-3'>
                            <button className='w-50 border border-1 rounded' onClick={() => dispatchEvent(closeElement())}>Close</button>
                                
                            <button
                                className='w-50 border border-1 rounded mb-3 px-2 d-flex justify-content-center align-items-center'
                                onClick={() => {
                                    dispatchLogin(logoutFunction())
                                    dispatchEvent(closeElement())
                                }}
                            >Exit</button>
                        </div>
                    </div>
                </div> :

                <Link to={to}>
                    <button className='border-0 px-2 rounded d-flex justify-content-center align-items-center'>{textButton}</button>
                </Link>
            }

            <button className='border-0 px-2 rounded d-flex justify-content-center align-items-center' onClick={() => dispatchTheme(handleTheme(ThemeState))}>
                {icon}
            </button>
        </div>
    )
}
