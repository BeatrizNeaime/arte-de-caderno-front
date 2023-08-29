export const CPFroutes = {
    verifyCPF: async function (cpf) {
        let url = `http://localhost:8080/cpf/${cpf.replace(/\D/g, "")}`
        let res;
        const a = await fetch(url)
        const b = await a.json()

        if (a.status !== 200 && b.message) {
            res = {
                status: 400,
                message: "CPF já cadastrado"
            }
        } else if (a.status !== 200 && !b.message) {
            res = {
                status: 400,
                message: "CPF inválido!"
            }
        } else if (a.status === 200) {
            res = {
                status: 200,
                message: "CPF válido"
            }
        }
        return res
    }
}