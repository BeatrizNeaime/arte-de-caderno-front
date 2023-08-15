const requiredFields = [
    'nome',
    'cpf',
    'bday',
    'email',
    'senha',
    'perfil',
    'cel',
    'cep',
    'rua',
    'bairro',
    'uf',
    'cidade',
    'numero'
]

function singUpValidation(inputs) {
    let errors = {}
    requiredFields.forEach(field => {
        if (!inputs[field]) {
            errors[field] = 'O campo ' + field + ' é obrigatório'
        }
    })
    return errors
}

export default singUpValidation