import API from '../api/api';

const register = async ({ name, email, phone }) => {
	try {
		const body = JSON.stringify({ name, email, phone });
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

export default register;
