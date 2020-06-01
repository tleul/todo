const express = require('express');
const UserTodo = require('../model/Todo');

// import moment from 'moment';

const router = express.Router();
const auth = require('../middleware/auth');

// add todo
router.get(
	'/',
	auth,

	async (req, res) => {
		try {
			const userTodo = await UserTodo.findOne({ user: req.user.id });

			if (!userTodo) {
				res.json(userTodo);
			}
		} catch (error) {
			console.log(error.message);
		}
	},
);

module.exports = router;
