const mongoose = require("mongoose")

const ToDoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
})

let ToDo = mongoose.model("ToDo", ToDoSchema)

module.exports = ToDo