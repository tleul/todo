import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TodoUser = new Schema(
	
	[{
		id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'user',
		},
		todotitle: {
			type: String,
			required: true
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
			type: Date
		}
}]);

const UserTodo = mongoose.model('UserTodo', TodoUser);

module.exports = UserTodo;