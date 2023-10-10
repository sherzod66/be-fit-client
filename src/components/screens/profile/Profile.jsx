import Layout from '../../layout/Layot'
import ProfileResult from '../../layout/profileU/ProfileResult'
import Statistics from '../../ui/statistiken/Statistics'
import ProfileUser from './ProfileUser'

const Profile = () => {
	return (
		<>
			<Layout heading={<ProfileUser />} bgImage={'/images/profile-bg.jpg'}>
				<Statistics />
			</Layout>
			<ProfileResult />
		</>
	)
}
export default Profile
