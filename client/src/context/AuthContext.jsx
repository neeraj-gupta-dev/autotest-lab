import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [loading, setLoading] = useState(true);

    // Set Base URL for all Axios calls
    axios.defaults.baseURL = 'http://localhost:5000';

    useEffect(() => {
        if (token) {
            // Globally set Auth header for future requests
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            
            // To keep it simple, we just flag them as authenticated once we have a token.
            // In a bigger app, you might fetch /api/auth/me to get fresh details.
            setUser({ isAuthenticated: true });
        } else {
            delete axios.defaults.headers.common['Authorization'];
            setUser(null);
        }
        setLoading(false);
    }, [token]);

    const login = async (email, password) => {
        try {
            const res = await axios.post('/api/auth/login', { email, password });
            localStorage.setItem('token', res.data.token);
            setToken(res.data.token);
            setUser(res.data);
            return { success: true, data: res.data };
        } catch (error) {
            return { success: false, error: error.response?.data?.message || 'Login failed' };
        }
    };

    const register = async (name, email, password) => {
        try {
            const res = await axios.post('/api/auth/register', { name, email, password });
            localStorage.setItem('token', res.data.token);
            setToken(res.data.token);
            setUser(res.data);
            return { success: true, data: res.data };
        } catch (error) {
            return { success: false, error: error.response?.data?.message || 'Registration failed' };
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, loading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
