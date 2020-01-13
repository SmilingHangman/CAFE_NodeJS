const goToRegister = () => {
    window.location.href = "../front/register.html";
}

const login = () => {
    let username = document.getElementById("loginEmail").value
    let password = document.getElementById("loginPassword").value

    let body = {
        username,
        password
    }

    fetch("http://localhost:3000/api/v1/user/login", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
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