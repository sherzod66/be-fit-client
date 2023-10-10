import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'
import exerciseService from '../services/exercise/exercise.service'
import { useForm } from 'react-hook-form'

export const useCreateExercise = () => {
	const {
		register,
		handleSubmit,
		reset,
		control,
		formState: { errors }
	} = useForm({ mode: 'onChange' })
	const { isSuccess, error, isLoading, mutate } = useMutation(
		['create exercise'],
		body => exerciseService.create(body),
		{
			onSuccess: () => {
				reset()
			}
		}
	)
	const onSubmit = data => {
		mutate(data)
	}
	return useMemo(
		() => ({
			register,
			handleSubmit,
			control,
			errors,
			isSuccess,
			error,
			isLoading,
			onSubmit
		}),
		[isLoading, errors]
	)
}
