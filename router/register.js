const express = require('express');
const UserSchema = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const auth = require('../middleware/auth');
const router = express.Router();
const UserTodo = require('../model/Todo');

const { check, validationResult } = require('express-validator');

router.post(
	'/',
	[
		check('name', 'Please Enter  Name').isAlpha(),
		check('email', 'Please Enter  Email').isEmail(),
		check('phone', 'Please Enter  Phone').isMobilePhone(),
	],

	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { name, email, phone } = req.body;

		const userExist = await UserSchema.findOne({ email });

		if (userExist) {
			return res
				.status(400)
				.json({ errors: [{ msg: 'User Already Exists' }] });
		}

		const password = phone.toString().slice(-4);
		const user = new UserSchema({
			name,
			email,
			phone,
			password,
		});
		const salt = await bcrypt.genSalt(10);
		console.log(user.phone + user.password);
		user.password = await bcrypt.hash(password, salt);

		await user.save();
		const payload = {
			user: {
				id: user.id,
			},
		};

		jwt.sign(
			payload,
			config.jwtsecret,
			{ expiresIn: 360000 },
			(err, token) => {
				if (err) {
					throw err;
				}
				res.json({ token });
			},
		);

		// res.json(newUser);
	},
);
router.delete('/', auth, async (req, res) => {
	const user = await UserSchema.findByIdAndDelete(req.user.id);
	const todo = await UserTodo.findOneAndDelete({ user: req.user.id });
	res.json({ user, todo });
});

module.exports = router;
