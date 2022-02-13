const mongoose = require('mongoose');
const todoSchema = mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
    },
    title: {
        type: String,
        required: true,
        minlenght: 5,
        maxlenght: 20
    },
    status: {
        type: String,
        default: "to-do",
        enum: ["to-do", "in progress", "done"]
    },
    tags: [{
        type: String,
        maxlenght: 10,
    }]
},{timestamps:true});
const TodoModel = mongoose.model('Todo', todoSchema);
module.exports = TodoModel