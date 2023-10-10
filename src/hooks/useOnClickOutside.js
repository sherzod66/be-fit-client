import { useEffect, useRef, useState } from "react"

export const useOnClickOutside = initialValue => {
	const [isShow, setIsShow] = useState(initialValue)
	const ref = useRef(null)

	const handelClick = (e) => {
		if (ref && !ref.current.contains(e.target)) {
			setIsShow(false)

		}
	}

	useEffect(() => {
		document.addEventListener('click', handelClick, true)
		return () => {
			document.removeEventListener('click', handelClick, true)
		}
	})
	return { ref, isShow, setIsShow }
}