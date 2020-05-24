import express from 'express';
import UserSchema from '../../model/User';

const router = express.Router();
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

		const user = new UserSchema({
			name,
			email,
			phone,
		});

		const newUser = await user.save();
		res.json(newUser);
	},
);

module.exports = router;
