import { Route , Routes } from 'react-router-dom'

import Home from './pages/Home/Home'
import Login from './pages/login/Login'

import { ThemeContextProvider } from './hook/Context/ThemeContext'
import { LoginContextProvider } from './hook/Context/LoginContext'
import { EventContextProvider } from './hook/Context/EventContext'
import { ContextApiProvider } from './hook/Context/ContextApi'

export default function App() {
  return (
    <ContextApiProvider>
      <EventContextProvider>
        <LoginContextProvider>
          <ThemeContextProvider>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Login' element={<Login />} />
            </Routes>
          </ThemeContextProvider>
        </LoginContextProvider>
      </EventContextProvider>
    </ContextApiProvider>
  )
}