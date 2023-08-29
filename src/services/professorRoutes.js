import { schoolRoutes } from "./schoolRoutes";

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
        let escolas = [null]
        const url = `http://localhost:8080/professor/student/${user.id}`;
        const options = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        }

        const a = await fetch(url, options)
        const b = await a.json()
        b.map((school) => {
            escolas.push(schoolRoutes.getSchoolById(user, school.id))
        })
        console.log(escolas);

    },
    getProfById: async function (user) {
        const url = `http://localhost:8080/professor/${user.id}`
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${user.token}`
            },
        }

        const a = await fetch(url, options)
        const b = await a.json()
        return await b

    }
}
