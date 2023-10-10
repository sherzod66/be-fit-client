import { useState } from 'react'
import styles from './hamburger.module.scss'
import { IoCloseSharp } from 'react-icons/io5'
import { BiMenuAltRight } from 'react-icons/bi'
import Menu from './Menu'
import { useOnClickOutside } from '../../../hooks/useOnClickOutside'

const Hamburger = () => {
	const { isShow, ref, setIsShow } = useOnClickOutside(false)

	return (
		<div className={styles.wrapper} ref={ref}>
			<button aria-label='Open menu' onClick={e => setIsShow(!isShow)}>
				{isShow ? (
					<IoCloseSharp className={styles.icons} />
				) : (
					<BiMenuAltRight className={styles.icons} />
				)}
			</button>
			<Menu isShow={isShow} />
		</div>
	)
}
export default Hamburger
