import styles from './exerciseLog.module.scss'
import HeaderExerciseLog from './HeaderExerciseLog'
import Loader from '../../ui/Loader'
import { exerciseLogRow } from './exerciseLogRow'
import { useExerciseLog } from './hooks/useExerciseLog'
import ExerciseError from './ExerciseError'
import TableRow from './Table/TableRow'
import { useCompleteLog } from './hooks/useCompleteLog'
import { useUpdateLogTime } from './hooks/useUpdateLogTime'

const ExerciseLog = () => {
	const {
		exerciseLog,
		isLoading,
		isSuccess,
		getState,
		error,
		onChangeState,
		toggleTime
	} = useExerciseLog()
	return (
		<>
			<HeaderExerciseLog isSuccess={isSuccess} exerciseLog={exerciseLog} />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<ExerciseError errors={[error]} />
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						<div className={styles.row}>
							{exerciseLogRow &&
								exerciseLogRow.map((row, index) => (
									<div key={index}>
										<span>{row}</span>
									</div>
								))}
						</div>
						{exerciseLog?.times.map(item => (
							<TableRow
								getState={getState}
								onChangeState={onChangeState}
								toggleTime={toggleTime}
								item={item}
								key={item.id}
							/>
						))}
					</div>
				)}
			</div>
		</>
	)
}
export default ExerciseLog
