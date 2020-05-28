import React, { Fragment, useState } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import API from '../../api/api';

const Signup = () => {
	const [userData, setUserData] = useState({
		name: '',
		email: '',
		phone: '',
	});

	const { name, email, phone } = userData;

	const onChange = (e) =>
		setUserData({ ...userData, [e.target.name]: e.target.value });
	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			const body = JSON.stringify(userData);
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};

			const res = await API.post('/api/register', body, config);
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Fragment>
			<section className='form-section'>
				<p className='lead' style={{ color: 'white' }}>
					<i className='fas fa-user'></i> Create Your Todo Account
				</p>
				<form className='form' onSubmit={(e) => onSubmit(e)}>
					<div className='form-group'>
						<input
							autoComplete='new-name'
							type='text'
							placeholder='Name'
							name='name'
							value={name}
							onChange={(e) => onChange(e)}
							required
						/>
					</div>
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
							placeholder='Phone'
							name='phone'
							minLength='10'
							value={phone}
							onChange={(e) => onChange(e)}
							required
						/>
					</div>
					<input
						type='submit'
						className='btn btn-primary'
						value='Register'
					/>
				</form>
				<p className='my-1'>
					Already have an account?{' '}
					<Link to='/login'>
						<span className='form-sign' style={{ color: 'white' }}>
							Sign In
						</span>
					</Link>
				</p>
			</section>
		</Fragment>
	);
};

export default Signup;
