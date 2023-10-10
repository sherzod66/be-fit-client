import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import Hamburger from '../hamburger/Hamburger'
import styles from './header.module.scss'
import { GoArrowLeft } from 'react-icons/go'
import { FaRegUser } from 'react-icons/fa'
import { useEffect } from 'react'
const Header = ({ backLink }) => {
	const { isAuth } = useAuth()
	const { pathname } = useLocation()
	const navigate = useNavigate()
	useEffect(() => {
		!isAuth && navigate('/auth')
	}, [])
	return (
		<header className={styles.header}>
			{pathname !== '/' ? (
				<button aria-label='Go back' onClick={() => navigate(-1)}>
					<GoArrowLeft className={styles.icons} />
				</button>
			) : (
				<button
					aria-label='Go to profile'
					onClick={() => navigate(isAuth ? '/profile' : '/auth')}
				>
					<FaRegUser className={styles.iconsD} />
				</button>
			)}
			{isAuth && <Hamburger />}
		</header>
	)
}
export default Header
