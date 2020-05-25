import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TodoUser = new Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user',
	},
	todo: [
		{
			todotitle: {
				type: String,
				required: true,
			},
			todotext: {
				type: String,
				required: true,
			},
			createdDate: {
				type: Date,
				default: Date.now,
			},
			dueDate: {
				type: Date,
				required: true,
			},
		},
	],
});
const UserTodo = mongoose.model('UserTodo', TodoUser);

module.exports = UserTodo;
