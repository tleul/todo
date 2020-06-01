import React, { Fragment, useState } from 'react';

import login from '../../actions/login';
const Login = () => {
	const [authData, setAuthdata] = useState({
		email: '',
		password: '',
	});
	const { email, password } = authData;
	const onChange = (e) =>
		setAuthdata({ ...authData, [e.target.name]: e.target.value });
	const onSubmit = async (e) => {
		e.preventDefault();
		login({ email, password });
	};

	return (
		<Fragment>
			<section className='form-section'>
				<p className='lead' style={{ color: 'white' }}>
					<i className='fas fa-user'></i> Login to Your Account
				</p>
				<form className='form' onSubmit={(e) => onSubmit(e)}>
					<div className='form-group'>
						<input
							autoComplete='new-email'
							type='email'
							placeholder='Email Address'
							value={email}
							onChange={(e) => onChange(e)}
							name='email'
							required
						/>
					</div>

					<div className='form-group'>
						<input
							autoComplete='new-phone'
							type='number'
							placeholder='Pasword'
							name='password'
							minLength='4'
							value={password}
							onChange={(e) => onChange(e)}
							required
						/>
					</div>
					<input
						type='submit'
						className='btn btn-primary'
						value='Login'
					/>
				</form>
				{/* <p className='my-1'>
					Already have an account?{' '}
					<Link to='/login'>
						<span className='form-sign' style={{ color: 'white' }}>
							Sign In
						</span>
					</Link>
				</p> */}
			</section>
		</Fragment>
	);
};

export default Login;
