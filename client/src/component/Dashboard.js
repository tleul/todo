import React, { Fragment, useState } from 'react';
import API from '../api/api';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const Dashboard = (props) => {
	const [todoForm, setTodoForm] = useState({
		todotitle: '',
		todotext: '',
	});
	const [startDate, setStartDate] = useState({
		dueDate: new Date(),
	});

	const handelChange = (date) => {
		setStartDate({
			dueDate: date,
		});
	};
	const onChange = (e) => {
		setTodoForm({
			...todoForm,
			[e.target.name]: e.target.value,
		});
	};

	const { todotext, todotitle } = JSON.stringify(todoForm);
	const body = { ...todoForm, ...startDate };
	const onSubmit = async (e) => {
		e.preventDefault();

		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
					'x-auth-token': localStorage.getItem('token'),
				},
			};

			const res = await API.post('/api/addtodo', body, config);
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};

	const createToDo = (
		<Fragment>
			<div>
				<br />
				<br />
				<br />
				<form className='form' onSubmit={(e) => onSubmit(e)}>
					<div className='form-group'>
						<input
							type='text'
							placeholder='Name Your TODO'
							name='todotitle'
							value={todotitle}
							onChange={(e) => onChange(e)}
						/>
						<small className='form-text'>
							Naming your todo will help you to recognise each
							todo
						</small>
					</div>
					<div className='form-group'>
						<input
							type='text'
							placeholder='TODO Discription '
							value={todotext}
							onChange={(e) => onChange(e)}
							name='todotext'
						/>
						<small className='form-text'>
							Discribe in good way, help you not to miss nothing
						</small>
					</div>
					<div className='form-group'>
						<DatePicker
							selected={startDate.dueDate}
							onChange={(date) => handelChange(date)}
						/>
						<small className='form-text'>
							When do you want to complete(i will give you a heads
							up)
						</small>
					</div>
					<input type='submit' className='btn btn-primary my-1' />
				</form>
			</div>
		</Fragment>
	);

	return (
		<section style={{ alignContent: 'center' }} className='landing'>
			<div className='dark-overlay'>
				<div className='landing-inner'>
					<br />
					<br />
					<br />
					{props.state.isAut ? (
						<Fragment>
							<p className='lead' style={{ color: '#fff' }}>
								'here is your list'
							</p>
						</Fragment>
					) : (
						createToDo
					)}
				</div>
			</div>
		</section>
	);
};

export default Dashboard;
