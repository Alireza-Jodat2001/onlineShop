// import { useReducer, createContext } from 'react'
// import { FaRegSun, FaRegMoon } from 'react-icons/fa'
// import { InitialstateTheme, ThemeReducerFunc } from '../Reducer/ThemeReducer'

// export const ThemeContext = createContext()

// export function ThemeContextProvider({ children }) {
//   const [ThemeState, dispatchTheme] = useReducer(ThemeReducerFunc, InitialstateTheme)

//   function handleTheme(ThemeState) {
//     const dark = {
//       id: 'dark',
//       icon: <FaRegSun />,
//       navbar: 'navDark',
//       login: 'loginDark',
//       home: 'homeDark'
//     }
//     const light = {
//       id: 'light',
//       icon: <FaRegMoon />,
//       navbar: 'navLight',
//       login: 'loginLight',
//       home: 'homeLight'
//     }

//     return { type: 'changeTheme', theme: ThemeState.id === 'dark' ? light : dark }
//   }

//   const value = {
//     ThemeState,
//     navbar: ThemeState.navbar,
//     icon: ThemeState.icon,
//     home: ThemeState.home,
//     login: ThemeState.login,
//     dispatchTheme,
//     handleTheme
//   }

//   return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
// }
