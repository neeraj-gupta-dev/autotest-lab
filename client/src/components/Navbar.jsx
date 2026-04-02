import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm z-10 relative">
            <div className="flex items-center">
                <Link to="/dashboard" className="text-2xl font-black text-blue-700 tracking-tight flex items-center gap-2">
                    <span className="bg-blue-600 text-white rounded p-1 pb-1.5 leading-none">Auto</span>Test Lab
                </Link>
            </div>
            
            <div className="flex items-center space-x-6">
                {user && (
                    <>
                        <div className="text-sm font-medium text-gray-500 hidden md:block">
                            Student: <span className="text-gray-900 ml-1">{user.name || 'Demo Mode'}</span>
                        </div>
                        <button
                            id="logoutBtn"
                            onClick={handleLogout}
                            className="bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 px-4 py-1.5 rounded-lg text-sm font-bold transition-colors"
                        >
                            Log Off
                        </button>
                    </>
                )}
            </div>
        </header>
    );
};

export default Navbar;
