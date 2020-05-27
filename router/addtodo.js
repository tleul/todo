const express = require('express');
const UserTodo = require('../model/Todo');

// import moment from 'moment';

const router = express.Router();
const auth = require('../middleware/auth');

const { check, validationResult } = require('express-validator');
// add todo
router.post(
	'/',
	[
		auth,
		check('todotitle', 'Please Enter Title').isEmpty(),
		check('todotext', 'Please Enter your todo').isEmpty(),
		check('dueDate', 'Please Enter the due date').isEmpty(),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		try {
			const { todotitle, todotext, dueDate } = req.body;
			const userTodo = await UserTodo.findOne({ user: req.user.id });

			const newtodo = {
				todotitle,
				todotext,
				dueDate,
			};
			if (!userTodo) {
				const userTodo = new UserTodo({
					user: req.user.id,
					todo: newtodo,
				});
				const todoUser = await userTodo.save();
				return res.json(todoUser);
			}
			userTodo.todo.unshift(newtodo);

			const todoUser = await userTodo.save();
			return res.json(todoUser);
		} catch (error) {
			console.log(error.message);
		}
	},
);

//Remove todo
router.delete('/:id', auth, async (req, res) => {
	try {
		const usertodo = await UserTodo.findOne({ user: req.user.id });

		const removeIndex = usertodo.todo
			.map((list) => list._id)
			.indexOf(req.params.id);

		usertodo.todo.splice(removeIndex, 1);
		await usertodo.save();
		res.json(usertodo);
	} catch (error) {
		console.log(error.message);
	}
});
// update to do
router.put('/:id', auth, async (req, res) => {
	const { todotitle, todotext, dueDate } = req.body;

	try {
		const usertodo = await UserTodo.findOne({ user: req.user.id });

		const todoExist = usertodo.todo.filter(
			(list) => list.id == req.params.id,
		);
		todoExist[0].todotitle = todotitle;
		todoExist[0].todotext = todotext;
		todoExist[0].dueDate = dueDate;

		await usertodo.save();
		res.json(usertodo);
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
