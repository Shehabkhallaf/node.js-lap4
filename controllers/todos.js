const Todo = require('../models/todos')

const find=()=>{
   return Todo.find();
}

const findOne = (id) => {
    return Todo.findById(id).populate('userId')
}
const create = (todo) => {
    return Todo.create(todo);
}
const edit = (id,todo) => {
  return  Todo.findByIdAndUpdate(id,todo,{new:true})
}
const Delete = (id) => {
  return Todo.findByIdAndDelete(id)
}
module.exports = {
    findOne,
    create,
    edit,
    Delete,
}