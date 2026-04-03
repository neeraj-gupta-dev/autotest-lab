import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    // Access context and router 
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (isSubmitting) return; // Prevent multiple clicks

        setErrorMsg('');
        setIsSubmitting(true);

        const loginRequest = login(email, password);
        const minDelay = new Promise(res => setTimeout(res, 1000));
        
        const [result] = await Promise.all([loginRequest, minDelay]);
        
        if (result.success) {
            // Immediate redirect to dashboard upon successful authentication
            navigate('/dashboard'); 
        } else {
            setErrorMsg(result.error);
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-xl shadow-lg shadow-gray-200/50 w-full max-w-md border border-gray-100">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">AutoTest Lab</h1>
                    <p className="text-gray-500 mt-2">Sign in to access automation playgrounds</p>
                </div>

                {errorMsg && (
                    <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-600 rounded-md text-sm text-center font-medium">
                        {errorMsg}
                    </div>
                )}

                <form id="loginForm" data-testid="login-form" onSubmit={handleSubmit} className="form-container space-y-6">
                    <div className="form-group">
                        <label className="form-label block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            data-testid="login-email-input"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="input-field w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            placeholder="student@example.com"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            data-testid="login-password-input"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="input-field w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        id="loginBtn"
                        type="submit"
                        disabled={isSubmitting}
                        className={`btn btn-primary w-full py-2.5 px-4 rounded-lg text-white font-medium transition flex justify-center items-center ${
                            isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                    >
                        {isSubmitting ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Authenticating...
                            </>
                        ) : 'Sign In'}
                    </button>
                    
                    <p className="text-center text-sm text-gray-600">
                        New student?{' '}
                        <Link to="/register" className="text-blue-600 font-medium hover:underline">
                            Register here
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
