import { useMutation, useQueryClient } from '@tanstack/react-query'
import ExerciseLogService from '../../../../services/exercise/exercise-log.service'
import { useParams } from 'react-router-dom'
import { useCompleteLog } from './useCompleteLog'

export const useUpdateLogTime = times => {
	const { id } = useParams()
	const QueryClient = useQueryClient()
	const { completeLog, errorComplete } = useCompleteLog()
	const { mutate, error: errorChange } = useMutation(
		['update log time'],
		({ timeId, body }) => ExerciseLogService.updateTime(timeId, body),
		{
			onSuccess: () => {
				QueryClient.invalidateQueries(['get exercise log', id]).then(() => {
					const filteredTimes = times.filter(time => time.isCompleted)
					if (filteredTimes.length === times.length - 1) {
						completeLog({ isCompleted: true })
					}
				})
			}
		}
	)
	return {
		updateTime: mutate,
		error: errorChange || errorComplete
	}
}
