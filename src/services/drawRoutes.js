import { toast } from 'react-toastify'

const token = localStorage.getItem('token')

export const drawRoutes = {
    postDraw: async function (draw) {
        let url = "http://localhost:8080/draw";
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                title: `${draw.titulo}`,
                linkImage: `${draw.link}`,
                category: `${draw.categoria}`,
                author: `${draw.autor}`,
            }),
        };

        try {
            const a = await fetch(url, options);
            if (a.status !== 201) {
                toast.error("Ocorreu um erro. Tente novamente!");
            } else {
                toast.success("Desenho cadastrado com sucesso!");
                return true
            }
        } catch (error) {
            console.error(error);
        }
    },
    getDrawsByUser: async function (user) {
        const url = `http://localhost:8080/draw/student/${user.id}`
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }

        try {
            const a = await fetch(url, options)
            const b = await a.json()
            console.log(b)
        } catch (error) {
            console.error(error)
        }
    },
    getAllDraws: async function () {
        const url = "http://localhost:8080/draw/classified"
        try {
            const a = await fetch(url)
            const b = await a.json()
            if (a.ok) {
                return b
            } else {
                return false
            }
        } catch (error) {
            console.error(error)
        }
    }
}