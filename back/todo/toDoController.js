const ToDo = require("./toDoModel")

const register = (req, res) => {
    let data = req.body
    let toDo = new ToDo()
    toDo.task = data.task
    toDo.details = data.details
    toDo.user = req.user._id
    console.log(toDo)
    console.log(data)
    toDo.save()
        .then((createdTask) => {
            res.json(createdTask)
        }).catch((e) => {
            res.status(400).json(e)
        })
}

const getAllTasks = async (req, res) => {
    try {
        let tasks = await ToDo.find({
            user: req.user._id
        })
        res.json(tasks)
    } catch (e) {
        res.status(400).json(e)
    }
}

const getSingleTask = async (req, res) => {
    let id = req.params.id
    try {
        let task = await ToDo.findOne({
            _id: id
        })
        res.json(task)
    } catch (e) {
        res.status(400).json(e)
    }
}

const deleteSingleTask = async (req, res) => {
    let id = req.params.id
    try {
        let task = await ToDo.deleteOne({
            _id: id
        })
        res.json(task)
    } catch (e) {
        res.status(400).json(e)
    }
}

module.exports = {
    register,
    getAllTasks,
    getSingleTask,
    deleteSingleTask
}