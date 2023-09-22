import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({Component}) => {
    const isLogged = Cookies.get('isLogged');
    return isLogged ? <Component /> : <Navigate to={"/login"} />;
};

export default ProtectedRoute