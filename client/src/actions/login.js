import API from '../api/api';

const login = async ({ email, password }) => {
	try {
		const body = JSON.stringify({ email, password });
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const res = await API.post('/api/signin', body, config);
		localStorage.setItem('token', res.data.token);
	} catch (error) {
		console.log(error);
	}
};

export default login;
