import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query'
import ExerciseLogService from '../../../../services/exercise/exercise-log.service'
import { useNavigate, useParams } from 'react-router-dom'

export const useCompleteLog = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const { mutate, error: errorComplete } = useMutation(
		['complete log'],
		body => ExerciseLogService.completed(id, body),
		{
			onSuccess: ({ data }) => {
				navigate(`/workout/${data.workoutLogId}`)
			}
		}
	)
	return {
		completeLog: mutate,
		errorComplete
	}
}
