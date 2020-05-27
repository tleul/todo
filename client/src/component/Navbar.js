import React from 'react';

const Navbar = () => {
	return (
		<nav class='navbar bg-dark'>
			<h1>
				<a href='dashboard.html'>
					<i class='fas fa-house-user'></i>Welcome
				</a>
			</h1>
			<ul>
				<li>
					<a href='Register.html'>Signup</a>
				</li>
				<li>
					<a href='Login.html'>Login</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
