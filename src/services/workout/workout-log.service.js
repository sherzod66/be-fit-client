import { $axios } from '../../api'
import { WORKOUTS } from './workout.service'
const LOG = `${WORKOUTS}/log`
class WorkoutLogService {
	async getById(id) {
		return await $axios.get(`${LOG}/${id}`)
	}
	async create(workoutId) {
		console.log(workoutId)
		return await $axios.post(`${LOG}/${workoutId}`)
	}
	async complete(id) {
		return await $axios.patch(`${LOG}/complete/${id}`)
	}
}

export default new WorkoutLogService()
