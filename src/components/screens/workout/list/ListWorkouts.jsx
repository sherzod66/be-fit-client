import Layout from '../../../layout/Layot'
import { useWorkouts } from './useWorkouts'
import styles from '../detail/Workout.module.scss'
import WorkoutItem from './WorkoutItem'
import Alert from '../../../ui/alert/Alert'
import Loader from '../../../ui/Loader'
const ListWorkouts = () => {
	const { mutate, data, error, isLoading, isSuccess, isSuccessMutate } =
		useWorkouts()
	return (
		<>
			<Layout bgImage='/images/workout-bg.jpg/' heading='Workout list' />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 30, paddingRight: 30 }}
			>
				{isLoading && <Loader />}
				{error && <Alert type='error' text={error} />}
				{isSuccessMutate && <Alert text='Workout log created' />}
				{isSuccess && (
					<div className={styles.wrapper}>
						{data.map(workout => (
							<WorkoutItem key={workout.id} workout={workout} mutate={mutate} />
						))}
					</div>
				)}
				{isSuccess && data?.length === 0 && (
					<Alert type='warning' text={'Workout not found'} />
				)}
			</div>
		</>
	)
}
export default ListWorkouts
