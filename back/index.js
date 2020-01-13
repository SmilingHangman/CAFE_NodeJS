const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/routes.js");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

mongoose.connect("mongodb://localhost:27017/CAUser", {
 useCreateIndex: true,
 useNewUrlParser: true,
 useUnifiedTopology: true
})

const corsOptions = {
    exposedHeaders: ["x-auth"]
}

app.use(cors(corsOptions))

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.use("/api/v1", router)

// app.get("/", (request, response) => {
//     response.json("testas")
// })
// app.post("/postMethod", (request, response) => {
//     console.log(request.body)
//     response.json()
// })
// app.post("/login", (request, response) => {
//     if (request.body.username.length < 1 || request.body.username.length < 1) {
//         response.status(400).json("Enter both username and pssw plz, k?")
//     } else if (request.body.username.length < 3) {
//         response.status(400).json("Username must be at least 3 characters long :(")
//     } else if (request.body.password.length < 6) {
//         response.status(400).json("Password must be at least 6 characters long :(")
//     } else if (!request.body.password.match(/[0-9]/)) {
//         response.status(400).json("Password must contain at least 1 NUMBER!!")
//     } else if (!request.body.password.match(/[A-Z]/)) {
//         response.status(400).json("Password must contain at least 1 UPPERCASE letter!!")
//     } else {
//         response.json("GOOD TO GO!!")
//     }


//     response.json()
// });

app.listen(3000);