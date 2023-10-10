import styles from './profileUser.module.scss'
import { FaRegUser } from 'react-icons/fa'
import { useProfile } from './useProfile'
const ProfileUser = () => {
	const { isLoading, data } = useProfile()
	return (
		<ul className={styles.userInfo}>
			<li>
				<FaRegUser />
			</li>
			<li>{data?.name}</li>
		</ul>
	)
}
export default ProfileUser
