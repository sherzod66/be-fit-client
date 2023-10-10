import { useQuery } from '@tanstack/react-query'
import ExerciseService from '../../../services/exercise/exercise.service'

export const useListExercises = () =>
	useQuery(['exercise list'], () => ExerciseService.getAll(), {
		select: ({ data }) => data
	})
