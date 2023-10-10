import { useQuery } from '@tanstack/react-query'
import getProfileService from '../../../services/get.profile.service'

export const useProfile = () => {
	return useQuery(['profile'], () => getProfileService.profile())
}
