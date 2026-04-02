import { useState } from 'react';

const LoginPlayground = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleMockLogin = (e) => {
        e.preventDefault();
        setErrorMsg('');
        setSuccessMsg('');

        if (email === 'admin@example.com' && password === 'password123') {
            setSuccessMsg('Successfully logged into the playground system!');
        } else {
            setErrorMsg('Invalid simulated credentials. Try admin@example.com / password123');
        }
    };

    return (
        <div>
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Login Form Playground</h2>
                <p className="text-gray-600 mt-2">
                    Write scripts to locate the <code>id="email"</code> and <code>id="password"</code> fields. 
                    Trigger the form using <code>id="loginBtn"</code> and assert the resulting messages.
                </p>
                <div className="bg-blue-50 border border-blue-200 text-blue-800 px-4 py-2 mt-4 rounded-md text-sm font-medium inline-block">
                    Test Credentials: admin@example.com / password123
                </div>
            </div>

            <div className="max-w-md bg-white border border-gray-200 rounded-xl shadow-sm p-8">
                {successMsg && (
                    <div id="successMessage" className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-md text-sm text-center font-medium flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        {successMsg}
                    </div>
                )}
                {errorMsg && (
                    <div id="errorMessage" className="mb-6 p-3 bg-red-50 border border-red-200 text-red-600 rounded-md text-sm text-center font-medium">
                        {errorMsg}
                    </div>
                )}

                <form onSubmit={handleMockLogin} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                            Account Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                            placeholder="Email address"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
                            Account Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <div className="pt-4">
                        <button
                            id="loginBtn"
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors shadow-sm"
                        >
                            Simulate Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPlayground;
