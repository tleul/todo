import express from 'express';
import UserTodo from '../../model/Todo';
import UserSchema from '../../model/User';
// import moment from 'moment';

const router = express.Router();
import auth from '../middleware/auth';

import { check, validationResult } from 'express-validator';
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
		// const errors = validationResult(req);
		// if (!errors.isEmpty()) {
		// 	return res.status(400).json({ errors: errors.array() });
		// }
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

module.exports = router;
// todotitle: {
// 		type: String,
// 		required:true
// 	},
// 	todotext: {
// 		type: String,
// 		required: true,
// 	},
// 	createdDate: {
// 		type: Date,
// 		default: Date.now,
//     },
//     dueDate:{
//         type: Date
//     }
