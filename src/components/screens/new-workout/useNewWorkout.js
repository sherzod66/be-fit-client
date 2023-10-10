import { useMemo } from 'react'
import WorkoutService from '../../../services/workout/workout.service'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'

export const useNewWorkout = () => {
	const {
		register,
		handleSubmit,
		reset,
		control,
		formState: { errors }
	} = useForm({ mode: 'onChange' })
	const { isSuccess, error, isLoading, mutate } = useMutation(
		['create workout'],
		body => WorkoutService.create(body),
		{
			onSuccess: () => {
				reset({
					name: '',
					exerciseIds: []
				})
			}
		}
	)
	const onSubmit = data => {
		console.log(data)
		mutate({
			name: data.name,
			exerciseIds: data.exerciseIds.map(ex => ex.value)
		})
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
		[errors, isLoading, isSuccess, error]
	)
}
