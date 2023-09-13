const token = localStorage.getItem('token')

export const professorRoutes = {
    getStudents: async function (user) {
        const url = `http://localhost:8080/professor/student/${user.id}`;
        const options = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
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
    postStudent: async function (aluno, user) {
        let address =
            "Rua " + aluno.rua + ", " + aluno.numero + " " + aluno?.complemento ||
            null + ", " + aluno.bairro + ". " + aluno.city;

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        var raw = JSON.stringify({
            "name": aluno.name,
            "date_of_birth": aluno.date_of_birth,
            "cpf": aluno.cpf.replace(/\D/g, ""),
            "phone": aluno.phone,
            "cep": aluno.cep,
            "address": address,
            "city": aluno.city,
            "uf": aluno.uf,
            "email": aluno.email,
            "schoolId": aluno.school,
            "drawsId": []
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const a = await fetch(`http://localhost:8080/professor/student/${user.id}`, requestOptions)
        const b = await a.json()
        return b

    }
}
