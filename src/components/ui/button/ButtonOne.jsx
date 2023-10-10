import styles from './buttonOne.module.scss'
const ButtonOne = ({ children, type }) => {
	return (
		<button className={styles.buttonOne} type={type}>
			{children}
		</button>
	)
}
export default ButtonOne
