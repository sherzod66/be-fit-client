import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'
import cn from 'clsx'
import Loader from '../../../ui/Loader'
import workoutLogService from '../../../../services/workout/workout-log.service'
import HeaderWorkout from './HeaderWorkout'
import ExerciseItem from './ExerciseItem'
import { Fragment } from 'react'
import styles from './Workout.module.scss'
import ButtonUi from '../../../ui/button/Button'
import { useWorkoutCompleteLog } from './useWorkoutComleteLog'

const Workout = () => {
	const { id } = useParams()
	const { mutate } = useWorkoutCompleteLog()
	const {
		data: workoutLog,
		isSuccess,
		isLoading
	} = useQuery(['get workout', id], () => workoutLogService.getById(id), {
		select: ({ data }) => data
	})
	return (
		<>
			<HeaderWorkout isSuccess={isSuccess} workoutLog={workoutLog} />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 30, paddingRight: 30 }}
			>
				{isLoading ? (
					<Loader />
				) : (
					workoutLog.exerciseLogs.map((exerciseLog, index) => (
						<Fragment key={exerciseLog.id}>
							<ExerciseItem exerciseLog={exerciseLog} />
							{index % 2 !== 0 &&
								index !== workoutLog.exerciseLogs.length - 1 && (
									<div className={styles.line} />
								)}
						</Fragment>
					))
				)}
			</div>
			<ButtonUi clickHandler={() => mutate()}>Complete workout</ButtonUi>
		</>
	)
}
export default Workout
