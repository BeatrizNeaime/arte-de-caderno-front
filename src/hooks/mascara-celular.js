export const maskcel = (v) => {
    v = v.replace(/\D/g, "")
    v = v.substring(0, 11); 
    v = v.replace(/(\d{2})(\d)/, "($1) $2")
    v = v.replace(/(\d{5})(\d{4})$/, "$1-$2")
    return v
}

export const maskphone = (v) =>{
    v = v.replace(/\D/g, "")
    v = v.substring(0, 10); 
    v = v.replace(/(\d{2})(\d)/, "($1) $2")
    v = v.replace(/(\d{4})(\d{4})$/, "$1-$2")
    return v
}