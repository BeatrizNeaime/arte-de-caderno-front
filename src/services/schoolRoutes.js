export const schoolRoutes = {
    getSchoolById: async function (user, id) {
        const url = `http://localhost:8080/school/${id}`
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        }

        const a = await fetch(url, options)
        const b = await a.json()
        console.log('schools.getById: ', b);
    },
    getUfs: async function () {
        const a = await fetch("http://localhost:8080/school/uf");
        const b = await a.json();
        return b
    },
    getCities: async function (uf) {
        let url = "http://localhost:8080/school/city";

        let options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: `{"uf":${JSON.stringify(uf)}}`,
        };
        const a = await fetch(url, options)
        const b = await a.json()
        return b
    },
    getSchools: async function (city) {
        console.log('get')
        let url = "http://localhost:8080/school/listByCity";

        let options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: `{"city":${JSON.stringify(city)}}`,
        };
        const a = await fetch(url, options)
        const b = await a.json()
        return b
    }
}