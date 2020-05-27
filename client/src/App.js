import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './component/Home';
import Signup from './component/Signup';
import './App.css';
import Navbar from './component/Navbar';

function App() {
	return (
		<Router>
			<Fragment>
				<Navbar />
				<Route exact path='/' component={Home} />
				<section className='container'>
					<Route exact path='/signup' component={Signup} />
				</section>
			</Fragment>
		</Router>
	);
}

export default App;
