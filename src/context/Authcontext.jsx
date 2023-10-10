import Cookies from 'js-cookie'
import { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
	const [isAuth, setAuth] = useState(!!Cookies.get('red'))
	return (
		<AuthContext.Provider value={{ isAuth, setAuth }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
