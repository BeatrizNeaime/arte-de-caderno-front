import {toast} from 'react-toastify'

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
            console.log(error);
        }
    },
    getDrawsByUser: async function(user){
        const url = `http://localhost:8080/draw/${user.id}`
    }
}