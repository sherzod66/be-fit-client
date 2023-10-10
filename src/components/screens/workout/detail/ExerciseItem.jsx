import { Link } from 'react-router-dom'
import styles from './Workout.module.scss'
import cn from 'clsx'
const ExerciseItem = ({ exerciseLog }) => {
	return (
		<Link
			to={`/exercise/${exerciseLog.id}`}
			className={cn(styles.exercise__column, {
				[styles.completed]: exerciseLog.isCompleted
			})}
		>
			<div className={styles.exercise__title}>
				{exerciseLog.exercise[0].name}
			</div>
			<img
				src={`${import.meta.env.VITE_SERVER_URL}${
					exerciseLog.exercise[0].iconPath
				}`}
				className={styles.exercise__icon}
			></img>
		</Link>
	)
}
export default ExerciseItem
