import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../tabel.css';
import { connect } from 'react-redux';
import { gettodo } from './../actions/todoaction';
import { Redirect } from 'react-router-dom';
const TodoList = ({ loading, todo, gettodo }) => {
	useEffect(() => {
		gettodo();
	}, []);

	const todoTabel = todo.todo.todo.map((data) => (
		<Fragment>
			<tr key={data._id} className='raw'>
				<td>{data.todotitle}</td>
				<td>{data.todotext}</td>
				<td>{data.dueDate}</td>
				<td>{data.createdDate}</td>
				<td>
					{' '}
					<button classname='table-btn'>Delete</button>
				</td>
			</tr>
		</Fragment>
	));

	return (
		<Fragment>
			<div className='container'>
				<table role='table'>
					<thead role='rowgroup'>
						<tr role='row'>
							<td role='columnheader'>
								<strong>Todo Title </strong>
							</td>

							<td role='columnheader'>
								<strong>Todo Discription </strong>
							</td>
							<td role='columnheader'>
								<strong>Date created </strong>
							</td>
							<td role='columnheader'>
								<strong>Due Date </strong>
							</td>
						</tr>
					</thead>
					<tbody role='rowgroup'>{todoTabel}</tbody>
				</table>
			</div>
		</Fragment>
	);
};

TodoList.propTypes = {
	todo: PropTypes.object,
	loading: PropTypes.bool,
	gettodo: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
	todo: state.todo,
	loading: state.todo.loading,
});
export default connect(mapStateToProps, { gettodo })(TodoList);
