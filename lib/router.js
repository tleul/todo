import express from 'express';
import UserSchema from '../model/User';
const router = express.Router();



router.post('/', async(req, res) => {
    const { name, email, phone } = req.body;

    const user = new UserSchema({
        name,
        email,
        phone
    });

    const newUser = await user.save();
    res.json(newUser);

});

router.post('/:id', async (req, res) => {
	const { name, email, phone } = req.body;

	const user = new UserSchema({
		name,
		email,
		phone,
	});

	const newUser = await user.save();
	res.json(newUser);
});







module.exports = router;