import { schoolRoutes } from "./schoolRoutes";

const token = localStorage.getItem('token')

export const professorRoutes = {
    getStudents: async function (user) {
        const url = `http://localhost:8080/professor/student/${user.id}`;
        const options = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        };

        const a = await fetch(url, options)
        const b = await a.json()
        return b;
    },
    getSchools: async function (user) {
        const url = `http://localhost:8080/professor/school/${user.id}`;
        const options = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }

        try {
            const a = await fetch(url, options)
            const b = await a.json()
            return b
        } catch (error) {
            console.error(error)
        }

    },
    getProfById: async function (user) {
        const url = `http://localhost:8080/professor/${user.id}`
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            },
        }

        const a = await fetch(url, options)
        const b = await a.json()
        return await b
    },
    postStudent: async function (user){
        
    }
}
