import { Controller } from 'react-hook-form'
import ReactSelect from 'react-select'
import { useListExercises } from './useListExercises'
const SelectExercise = ({ control }) => {
	const { data = [] } = useListExercises()
	return (
		<Controller
			name='exerciseIds'
			control={control}
			render={({ field: { value, onChange } }) => (
				<ReactSelect
					classNamePrefix='select2-selection'
					placeholder='Exercises...'
					title='Exercises'
					options={data.map(exercise => ({
						value: exercise.id,
						label: exercise.name
					}))}
					value={value}
					onChange={onChange}
					isMulti
				/>
			)}
		/>
	)
}
export default SelectExercise
