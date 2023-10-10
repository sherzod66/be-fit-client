import { $axios } from '../api'

class GetProfile {
	async profile() {
		try {
			const { data } = await $axios.get('users/profile')
			return data
		} catch (e) {
			throw new Error(e)
		}
	}
}
export default new GetProfile()
