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
    let errors = []
    requiredFields.forEach(field => {
        if (!inputs[field]) {
            errors.push('O campo ' + field.toUpperCase() + ' é obrigatório')
        }
    })
    return errors
}

export default singUpValidation