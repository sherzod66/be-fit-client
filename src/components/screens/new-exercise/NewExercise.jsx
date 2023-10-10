import { Controller } from 'react-hook-form'
import Layout from '../../layout/Layot'
import Field from '../../ui/filed/Field'
import styles from './newExercise.module.scss'
import ButtonOne from '../../ui/button/ButtonOne'
import Loader from '../../ui/Loader'
import Alert from '../../ui/alert/Alert'
import cn from 'clsx'
import { getIconPath } from './icon-Path.util'
import { useCreateExercise } from '../../../hooks/useCreateExercise'
const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']
const NewExercise = () => {
	const {
		register,
		handleSubmit,
		control,
		errors,
		isSuccess,
		error,
		isLoading,
		onSubmit
	} = useCreateExercise()
	return (
		<>
			<Layout
				bgImage={'/images/new-exercise-bg.jpg'}
				heading='Create new exercise'
				backLink={'/new-workout'}
			/>
			<div className='wrapper-inner-page'>
				{isLoading && <Loader />}
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='Exercise created' />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.name?.message}
						name='name'
						register={register}
						options={{ required: 'You did not enter an exercise name' }}
						type='text'
						placeholder='Enter exercise name'
					/>
					<Field
						error={errors?.times?.message}
						name='times'
						register={register}
						options={{
							valueAsNumber: true,
							validate: value => value > 0 || 'Times must be number',
							required: 'You did not enter an exercise time'
						}}
						placeholder='Enter exercise time'
					/>
					<Controller
						name='iconPath'
						control={control}
						render={({ field: { value, onChange } }) => (
							<div className={styles.images}>
								{data.map(name => (
									<img
										key={`ex img ${name}`}
										src={`${import.meta.env.VITE_SERVER_URL}${getIconPath(
											name
										)}`}
										alt={name}
										className={cn({
											[styles.active]: value === getIconPath(name)
										})}
										onClick={() => onChange(getIconPath(name))}
										draggable={false}
										height={45}
									/>
								))}
							</div>
						)}
					/>

					{errors?.iconPath && (
						<div className='error'>{errors?.iconPath?.message}</div>
					)}

					<ButtonOne type={'submit'}>Create Exercise</ButtonOne>
				</form>
			</div>
		</>
	)
}
export default NewExercise
