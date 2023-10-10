import cn from 'clsx'
import styles from './exerciseLog.module.scss'
import stylesLayout from '../../layout/Layaout.module.scss'
import Header from '../../layout/header/Header'
import { iconPathUtil } from '../../../Util/Util'
const HeaderExerciseLog = ({ isSuccess, exerciseLog }) => {
	return (
		<div
			className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
			style={{ backgroundImage: `url(/images/ex-bg-1.jpg)`, height: 300 }}
		>
			<Header />
			{isSuccess && (
				<div className={styles.heading}>
					<img
						src={iconPathUtil(exerciseLog?.exercise[0]?.iconPath)}
						alt=''
						height='34'
						draggable={false}
					/>
					<h1 className={stylesLayout.heading}>
						{exerciseLog?.exercise[0]?.name}
					</h1>
				</div>
			)}
		</div>
	)
}

export default HeaderExerciseLog
