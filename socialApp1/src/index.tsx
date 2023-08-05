import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import { Header } from './components/Header.jsx';
import { Home } from './pages/Home/index.jsx';
import { NotFound } from './pages/_404.jsx';
import './style.css';
import { login } from './pages/Auth/login.js';
import { registration } from './pages/Auth/registration.js';
import { forgetpassword } from './pages/Auth/forgetpassword.js';
import { profile } from './pages/Profile/profile.js';
import { useEffect } from 'preact/hooks';
import { route } from 'preact-router';

export function App() {
	function ProtectedRoute(props) {
		//const { isAuthenticated } = useAuthContext();
	
		//useEffect(() => {
		//	if (!isAuthenticated) route('/login', true);
		//}, [isAuthenticated]);
	
		return <Route {...props} />;
	}
	
	return (
		<LocationProvider>
			<Header />
			<main>
				<Router>
					<ProtectedRoute path="/" component={Home} />
					<Route path='/login' component={login} />
					<Route path='/registration' component={registration} />
					<Route path='/forgetpassword' component={forgetpassword} />
					<ProtectedRoute path='/profile' component={profile} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));
function useAuthContext(): { isAuthenticated: any; } {
	throw new Error('Function not implemented.');
}

