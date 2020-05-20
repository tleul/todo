const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    
    name: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        }



})