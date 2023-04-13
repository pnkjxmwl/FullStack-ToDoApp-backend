const ToDoModel = require("./models/ToDoModel");

module.exports.getToDo = async (req, res) => {
    const todo = await ToDoModel.find();
    res.send(todo);
}

module.exports.saveToDo = async (req, res) => {
    const { text,priority } = req.body;
    const status="pending"

    ToDoModel
        .create({ text,priority,status})
        .then((data) =>{ 
            res.send(data)
        })
        .catch((err) => console.log(err));
}

module.exports.deleteToDo = (req, res) => {
    const { _id } = req.body;
    const status="deleted"
    ToDoModel
        .findByIdAndUpdate(_id,{status})
        .then(() => res.set(201).send("Deleted Successfully..."))
        .catch((err) => console.log(err));
}
module.exports.updateToDo = (req, res) => {
    const { _id, text, priority,status } = req.body;
    ToDoModel
        .findByIdAndUpdate(_id, { text ,priority,status })
        .then(() => res.set(201).send("Updated Successfully..."))
        .catch((err) => console.log(err));

 }