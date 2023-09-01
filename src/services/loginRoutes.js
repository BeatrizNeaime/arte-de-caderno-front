export const loginRoutes = {
    login: async function (user, pwd) {
        let url = "http://localhost:8080/login";
        let options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: user.replace(/\D/g, ""),
                password: pwd,
            }),
        };
        const a = await fetch(url, options)
        const b = await a.json()
        if (a.status !== 200) {
            return false
        } else {
            return true
        }
    },
    logar: async function (user, pwd, code) {
        let url = "http://localhost:8080/login2fa"
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: user.replace(/\D/g, ""),
                password: pwd,
                code2factor: code,
            }),
        };
        const a = await fetch(url, options)
        const b = await a.json()
        console.log(b)
        if (a.status !== 200) {
            return false
        } else {
            return await b
        }
    }
}