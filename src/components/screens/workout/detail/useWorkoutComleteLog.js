import { useMutation } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import WorkoutLogService from '../../../../services/workout/workout-log.service'

export const useWorkoutCompleteLog = () => {
	const navigate = useNavigate()
	const { id } = useParams()
	const { mutate } = useMutation(
		['Finish the workout'],
		() => WorkoutLogService.complete(id),
		{
			onSuccess() {
				navigate('/workouts')
			}
		}
	)
	return { mutate }
}
