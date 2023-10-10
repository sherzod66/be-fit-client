import styles from './button.module.scss'
import cn from 'clsx'
const ButtonUi = ({ children, clickHandler, size = 'xl' }) => {
	return (
		<div className={styles.wrapper}>
			<button
				className={cn(styles.button, styles[size])}
				onClick={clickHandler}
			>
				{children}
			</button>
		</div>
	)
}
export default ButtonUi
