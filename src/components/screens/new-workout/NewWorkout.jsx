import { Controller } from 'react-hook-form'
import Layout from '../../layout/Layot'
import Field from '../../ui/filed/Field'
import ButtonOne from '../../ui/button/ButtonOne'
import Loader from '../../ui/Loader'
import Alert from '../../ui/alert/Alert'
import { useNewWorkout } from './useNewWorkout'
import { Link } from 'react-router-dom'
import SelectExercise from './SelectExercise'

const NewWorkout = () => {
	const {
		register,
		handleSubmit,
		control,
		errors,
		isSuccess,
		error,
		isLoading,
		onSubmit
	} = useNewWorkout()
	return (
		<>
			<Layout
				bgImage={'/images/new-workout-bg.jpg'}
				heading='Create new workout'
			/>
			<div className='wrapper-inner-page'>
				{isLoading && <Loader />}
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='Workout created successfully' />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.name?.message}
						name='name'
						register={register}
						options={{ required: 'You did not enter an workout name' }}
						type='text'
						placeholder='Enter workout name'
					/>
					<Link to='/new-exercise' className='dark-link '>
						Add new exercise
					</Link>
					<SelectExercise control={control} />
					{errors?.iconPath && (
						<div className='error'>{errors?.iconPath?.message}</div>
					)}

					<ButtonOne type={'submit'}>Create workout</ButtonOne>
				</form>
			</div>
		</>
	)
}
export default NewWorkout
