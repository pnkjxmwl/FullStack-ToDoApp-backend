const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    priority:{
        type:Number,
        required:true
    },
    status:{
        type:String
    }
});

module.exports = mongoose.model('ToDo', todoSchema);