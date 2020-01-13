const router = require("express").Router()
const userController = require("../user/userController")
const toDoController = require("../todo/toDoController")
const middleware = require("../middleware/middleware")

router.get("/", (req, res) => {
    res.json("Api is working!")
})

// user routes
router.post("/user/register", userController.register)
router.get("/user/getAllUsers", userController.getAll)
router.get("/user/getSingleUser/:id", userController.getSingleUser)
router.post("/user/login", userController.login)

// todo routes
// router.post("/todo/register", middleware.alterData, toDoController.register)
router.post("/todo/register", middleware.authenticate, toDoController.register)
router.get("/todo/getAllTasks", middleware.authenticate, toDoController.getAllTasks)
router.get("/todo/getSingleTask/:id", toDoController.getSingleTask)
router.delete("/todo/deleteSingleTask/:id", toDoController.deleteSingleTask)


module.exports = router