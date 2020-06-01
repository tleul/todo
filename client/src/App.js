import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './component/Home';
import Signup from './component/auth/Signup';
import './App.css';
import Navbar from './component/Navbar';
import Login from './component/auth/Login';

import loadUser from './actions/userLoader';
import Dashboard from './component/Dashboard';
function App() {
	const [initialState, setInitialstate] = useState({
		isAut: false,
		todoData: {},
		useId: '',
	});
	const checkUser = () => {
		const token = loadUser();
		token.then((userTodo) => {
			if (userTodo.data == null) {
				setInitialstate({
					...initialState,
				});
			}
		});
	};

	useEffect(() => {
		checkUser();
	}, []);
	return (
		<Router>
			<Fragment>
				<Navbar />
				<Route exact path='/' component={Home} />
				{/* <Route
					exact
					path='/'
					render={(props) => <Home {...props} sent={loadUser()} />}
				/> */}
				<section className='container'>
					<Route exact path='/register' component={Signup} />
					<Route exact path='/login' component={Login} />
					<Route
						exact
						path='/dashboard'
						render={(props) => (
							<Dashboard {...props} state={initialState} />
						)}
					/>
				</section>
			</Fragment>
		</Router>
	);
}

export default App;
