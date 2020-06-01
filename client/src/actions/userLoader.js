import API from '../api/api';
const loadUser = async () => {
	try {
		const token = localStorage.getItem('token');
		const config = {
			headers: {
				'Content-Type': 'application/json',
				'x-auth-token': token,
			},
		};

		const res = await API.get('/api/todolist', config);
		return {
			data: res.data,
		};
	} catch (error) {
		console.log(error);
	}
};

export default loadUser;
