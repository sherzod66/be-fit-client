import { useMutation, useQuery } from '@tanstack/react-query'
import WorkoutService from '../../../../services/workout/workout.service'
import WorkoutLogService from '../../../../services/workout/workout-log.service'
import { useNavigate } from 'react-router-dom'
import { useMemo } from 'react'

export const useWorkouts = () => {
	const { data, isSuccess } = useQuery(
		['get workouts'],
		() => WorkoutService.getAll(),
		{
			select: ({ data }) => data
		}
	)
	const navigate = useNavigate()
	const {
		mutate,
		isLoading,
		isSuccess: isSuccessMutate,
		error
	} = useMutation(
		['create new workout log'],
		workoutId => WorkoutLogService.create(workoutId),
		{
			onSuccess({ data }) {
				navigate(`/workout/${data.id}`)
			}
		}
	)
	return {
		data,
		isSuccess,
		mutate,
		isLoading,
		isSuccessMutate,
		error
	}
}
