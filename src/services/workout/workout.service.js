import { $axios } from '../../api'
export const WORKOUTS = '/workouts'
class WorkoutService {
	async getAll() {
		return await $axios.get(WORKOUTS)
	}
	async getById(id) {
		return await $axios.get(`${WORKOUTS}/${id}`)
	}
	//name exerciseIDS
	async create(body) {
		return await $axios.post(WORKOUTS, body)
	}
	async update(body, id) {
		return await $axios.put(`${WORKOUTS}/${id}`, body)
	}
	async delete(id) {
		return await $axios.delete(`${WORKOUTS}/${id}`)
	}
}

export default new WorkoutService()
