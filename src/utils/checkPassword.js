import { toast } from 'react-toastify'

export const checkPassword = (auxPwd) => {
    const { pwd1, pwd2 } = auxPwd;
    console.log(auxPwd)
    if (pwd1 === pwd2) {
        toast.success("yes")
        return true;
    } else {
        toast.error("As senhas não coincidem");
        return false
    }
};