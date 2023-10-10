import { menuInfo } from './menuInfo'
import styles from './hamburger.module.scss'
import cn from 'clsx'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useAuth } from '../../../hooks/useAuth'
const Menu = ({ isShow }) => {
	const { setAuth } = useAuth()
	const handleLogout = () => {
		Cookies.remove('red')
		setAuth(false)
	}
	return (
		<nav className={cn(styles.menu, { [styles.show]: isShow })}>
			<ul>
				{menuInfo.map((item, index) => (
					<li key={`_menu_${index}`}>
						<Link to={item.link}>{item.title}</Link>
					</li>
				))}
				<li>
					<button onClick={handleLogout}>Logout</button>
				</li>
			</ul>
		</nav>
	)
}
export default Menu
