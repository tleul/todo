import express from 'express';
import UserTodo from '../../model/Todo';

const router = express.Router();
import auth from '../middleware/auth';

import { check, validationResult } from 'express-validator';

router.post('/', [auth, check('todotitle', 'Please Enter Title').isEmpty(),
                        check('todotext', 'Please Enter your todo'.isEmpty(),
                        check('dueDate', 'Please Enter the due date').isEmpty())
], (req, res) => {
        
          const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() });
        }
        
        const { todotitle, todotext, dueDate } = req.body;

        const userTodo = new UserTodo({
			todotitle,
			todotext,
			dueDate,
        });
        
        console.log(userTodo);
        
});
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