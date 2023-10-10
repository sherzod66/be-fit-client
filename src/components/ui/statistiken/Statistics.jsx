import { useProfile } from '../../screens/profile/useProfile'
import styles from './statistics.module.scss'
const Statistics = () => {
	const { data } = useProfile()
	console.log(data?.statistics)
	return (
		<div className={styles.statistics}>
			<div className={styles.statistics__row}>
				{data &&
					data.statistics.map(statistic => (
						<div key={statistic.label} className={styles.statistics__column}>
							<p>{statistic.label}</p>
							<p>{statistic.value}</p>
						</div>
					))}
			</div>
		</div>
	)
}
export default Statistics
