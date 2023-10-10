import styles from './alert.module.scss'
import cn from 'clsx'
const Alert = ({ type = 'success', text }) => {
	return <div className={cn(styles.alert, styles[type])}>{text}</div>
}
export default Alert
