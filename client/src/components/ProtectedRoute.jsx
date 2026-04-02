import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { token, loading } = useContext(AuthContext);

    // Prevent rendering the route while auth state is resolving
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <p className="text-xl font-medium text-gray-500">Loading...</p>
            </div>
        );
    }

    // If there is no token in localStorage, firmly kick the user back to the login page.
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    // Otherwise, allow them to view the protected route
    return children;
};

export default ProtectedRoute;
