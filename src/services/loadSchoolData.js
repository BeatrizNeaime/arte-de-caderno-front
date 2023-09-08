export const loadSchoolData = {
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
    }
}