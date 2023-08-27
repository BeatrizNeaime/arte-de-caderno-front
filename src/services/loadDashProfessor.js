import { loadSchoolData } from "./loadSchoolData";

export const loadDashProfessor = {
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
            escolas.push(loadSchoolData.getSchoolById(user, school.id))
        })
        console.log(escolas);

    }
}
