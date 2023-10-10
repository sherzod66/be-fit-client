import axios from 'axios'
import Cookies from 'js-cookie'
const URL = `${import.meta.env.VITE_SERVER_URL}/api`
export const $axios = axios.create({
	baseURL: URL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${Cookies.get('red')}`
	}
})
