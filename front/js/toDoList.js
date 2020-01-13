import { create } from "domain";


const checkIfLoggedIn = () => {
    let token = localStorage.getItem("x-auth")
    if (!token) {
        window.location.href = "../front/login.html";
    }
}

checkIfLoggedIn()


const createItem = () => {
    let newItem = document.getElementById("newItem").value
    let token = localStorage.getItem("x-auth", token)

    let body = {
        task: newItem,
        details: "details",
        user
    }

    fetch("http://localhost:3000/api/v1/todo/register", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
            "x-auth": token
        }
    }).then((header) => {

        if (!header.ok) {
            throw Error(header)
        }
        let token = header.headers.get("x-auth")
        localStorage.setItem("x-auth", token)
        return header.json()
    }).then((response) => {
        alert("Login success")
        window.location.href = "../front/index.html";
    }).catch((e) => {
        console.log(e)
        alert("login failed")
    })
}