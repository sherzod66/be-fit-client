import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from '../components/screens/not-found/NotFound'
import { routes } from './routes.data'
import { useAuth } from '../hooks/useAuth'

const Router = () => {
	const { isAuth } = useAuth()
	return (
		<BrowserRouter>
			<Routes>
				{routes.map(route => {
					if (route.isAuth && !isAuth) {
						return
					}
					return (
						<Route
							key={route.path}
							element={<route.component />}
							path={route.path}
						/>
					)
				})}
				<Route element={<NotFound />} path='*' />
			</Routes>
		</BrowserRouter>
	)
}
export default Router
