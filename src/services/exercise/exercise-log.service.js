import { $axios } from '../../api'
import { EXERCISES } from './exercise.service'
const LOG = `${EXERCISES}/log`
class ExerciseLogService {
	async getById(id) {
		return await $axios.get(`${LOG}/${id}`)
	}
	//name exerciseIDS
	async create(exerciseId) {
		return await $axios.post(`${LOG}/${exerciseId}`)
	}
	async updateTime(timeId, body) {
		return await $axios.put(`${LOG}/time/${timeId}`, body)
	}
	// isCompleted: true
	async completed(id, body) {
		return await $axios.patch(`${LOG}/complete/${id}`, body)
	}
}

export default new ExerciseLogService()
