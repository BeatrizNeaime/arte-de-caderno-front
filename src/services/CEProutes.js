import { toast } from 'react-toastify'

export const CEProutes = {
    viacep: async function (cep) {
        const url = `http://localhost:8080/cep/${cep}`;
        const a = await fetch(url);
        const b = await a.json();

        if (b.erro) {
            toast.error("CEP incorreto!", { toastId: "toastId" });
        } else if (!b.logradouro || !b.bairro) {
            toast.warning("Notamos que seu CEP não fornece dados de rua e bairro. Por favor, preencha manualmente!", { toastId: "toastId" })
            return b
        } else {
            return b
        }
    }
}