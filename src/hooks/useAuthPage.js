import { useEffect, useMemo, useState } from 'react'
import { useAuth } from './useAuth'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import authService from '../services/auth.service'

export const useAuthPage = () => {
	const { isAuth, setAuth } = useAuth()
	const navigate = useNavigate()
	useEffect(() => {
		if (isAuth) navigate('/')
	}, [isAuth])
	const [type, setType] = useState('login')
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	})
	const { mutate, isLoading, reset } = useMutation(
		['auth'],
		({ email, password }) => authService.main(email, password, type),
		{
			onSuccess: data => {
				alert('Successful')
				setAuth(true)
			}
		}
	)
	const onSubmit = data => {
		mutate(data)
	}

	return useMemo(
		() => ({
			setType,
			register,
			handleSubmit,
			errors,
			isLoading,
			onSubmit
		}),
		[errors, isLoading]
	)
}
