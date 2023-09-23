import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const NotLoggedRoute = ({ Component }) => {
    const isLogged = Cookies.get('isLogged');
    return !isLogged ? <Component /> : <Navigate to={"/dashboard"} />;
};

export default NotLoggedRoute