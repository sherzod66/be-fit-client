import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useAuth } from './useAuth'
import Cookies from 'js-cookie'
import { set } from 'react-hook-form'

export const useCheckToken = () => {
	const { pathname } = useLocation()
	const { isAuth, setAuth } = useAuth()
	useEffect(() => {
		if (!!Cookies.get('red')) setAuth(true)
	}, [pathname, isAuth])
}
