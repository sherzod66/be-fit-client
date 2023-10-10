import Layout from '../../layout/Layot'
import ButtonUi from '../../ui/button/Button'
import Field from '../../ui/filed/Field'
import Loader from '../../ui/Loader'
import styles from './auth.module.scss'
import { useAuthPage } from '../../../hooks/useAuthPage'

const Auth = () => {
	const { setType, register, handleSubmit, errors, isLoading, onSubmit } =
		useAuthPage()
	return (
		<>
			<Layout heading='sign in' bgImage={'/images/auth-bg.png'} />
			<div className='wrapper-inner-page'>
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.email?.message}
						name={'email'}
						options={{ required: 'Email is required' }}
						register={register}
						type='email'
						placeholder='Enter email'
					/>
					<Field
						error={errors?.password?.message}
						name={'password'}
						options={{ required: 'Password is required' }}
						register={register}
						type='password'
						placeholder='Enter password'
					/>
					<div className={styles.wrapperButtons}>
						<ButtonUi clickHandler={() => setType('login')}>Sign in</ButtonUi>
						<ButtonUi clickHandler={() => setType('register')}>
							Sign up
						</ButtonUi>
					</div>
				</form>
			</div>
		</>
	)
}
export default Auth
