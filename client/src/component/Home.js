import React from 'react';

const Home = () => {
	return (
		<section class='landing'>
			<div class='dark-overlay'>
				<div class='landing-inner'>
					<h1 class='x-large'></h1>
					<p class='lead' style={{ color: '#fff' }}>
						Start creating your To Do
					</p>
					<div class='button'>
						<a href='register.html' class='btn btn-primary'>
							Signup
						</a>{' '}
						<br />
						<br />
						<a href='login.html' class='btn btn'>
							Login
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
