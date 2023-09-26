import { toast } from 'react-toastify'
import { throwToast } from 'src/utils/toast';

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
                code2factor: code.toUpperCase(),
            }),
        };
        const customId = "my-custom-id"
        const a = await fetch(url, options)
        const b = await a.json()
        console.log(b)
        if (a.status !== 200) {
            toast.error("Código incorreto!", { customId: customId })
            console.log(code)
            return false
        } else {
            return await b
        }
    },
    forgotPassword: async function (user) {
        const url = "http://localhost:8080/forgotPassword"
        const cpf = user.replace(/\D/g, "")
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: cpf
            })
        }

        try {
            const a = await fetch(url, options)
            if (a.status === 200) {
                throwToast.info("Um código de recuperação foi enviado para seu e-mail cadastrado")
                return true
            } else {
                throwToast.error("Usuário não encontrado")
                return false
            }
        } catch (error) {
            console.error(error)
        }

    },
    resetPassword: async function (newCred) {
        const url = "http://localhost:8080/resetPassword"
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: newCred.username,
                password: newCred.pwd,
                token: newCred.code
            })
        }

        try {
            const a = await fetch(url, options)
            const b = await a.json()
            if (a.ok) {
                console.log(b)
                return true
            }
        } catch (error) {
            throwToast.error("Algo deu errado. Tente novamente mais tarde!")
        }

    }
}