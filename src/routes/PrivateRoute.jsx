import { Button, Spinner } from 'flowbite-react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../authContext/authProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation();
    if (loading) {
        return (
            <Button className='mx-auto bg-white text-black'>
                <Spinner aria-label="Spinner button example" />
                <span className="pl-3">
                    Loading...
                </span>
            </Button>
        )
    }

    if (user?.token) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />
};

export default PrivateRoute;