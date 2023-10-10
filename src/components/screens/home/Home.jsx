import { useState } from 'react'
import Layout from '../../layout/Layot'
import { useNavigate } from 'react-router-dom'
import ButtonUi from '../../ui/button/Button'
import styles from './home.module.scss'
import { useAuth } from '../../../hooks/useAuth'
import Statistics from '../../ui/statistiken/Statistics'
function Home() {
	const { isAuth } = useAuth()
	const navigate = useNavigate()
	return (
		<Layout bgImage='/images/home-bg.jpg'>
			<ButtonUi
				clickHandler={() => navigate(isAuth ? '/new-workout' : '/auth')}
			>
				{isAuth ? 'New' : 'Sign in'}
			</ButtonUi>
			<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
			<Statistics />
		</Layout>
	)
}

export default Home
