import styles from './profileResult.module.scss'
import clsx from 'clsx'
const ProfileResult = () => {
	return (
		<main className={styles.userPath}>
			<div className={clsx(styles.userPath__column, styles.before)}>
				<p>Before</p>
				<div className={styles.userPathImage}>
					<img src='/images/before.jpg' alt='before' />
				</div>
			</div>
			<div className={clsx(styles.userPath__column, styles.after)}>
				<p>After</p>
				<div className={styles.userPathImage}>
					<img src='/images/after.jpg' alt='after' />
				</div>
			</div>
		</main>
	)
}
export default ProfileResult
