import React, { Fragment } from 'react';
import { Link } from 'react-dom';
const Login = () => {
	// const onChange = (e) =>
	// 	setUserData({ ...userData, [e.target.name]: e.target.value });
	// const onSubmit = async (e) => {
	// 	e.preventDefault();
	// 	register({ name, email, phone });
	// };

	return (
		<Fragment>
			<section className='form-section'>
				<p className='lead' style={{ color: 'white' }}>
					<i className='fas fa-user'></i> Login to Your Account
				</p>
				<form className='form'>
					<div className='form-group'>
						<input
							autoComplete='new-email'
							type='email'
							placeholder='Email Address'
							// value={email}
							// onChange={(e) => onChange(e)}
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
							// value={password}
							// onChange={(e) => onChange(e)}
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
