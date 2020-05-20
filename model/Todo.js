import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TodoUser = new Schema({
	id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user',
	},
	todotext: {
		type: String,
		required: true,
	},
	createdDate: {
		type: Date,
		default: Date.now,
    },
    dueDate:{
        type: Date
    }
});