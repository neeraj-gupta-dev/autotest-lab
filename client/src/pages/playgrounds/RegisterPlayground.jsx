import { useState } from 'react';

const RegisterPlayground = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleMockRegister = (e) => {
        e.preventDefault();
        setErrorMsg('');
        setSuccessMsg('');

        // Basic front-end checks to practice automation assertions
        if (!name || !email || !phone || !password || !confirmPassword) {
            setErrorMsg('All fields are required.');
            return;
        }

        if (password !== confirmPassword) {
            setErrorMsg('Passwords do not match.');
            return;
        }

        if (password.length < 6) {
            setErrorMsg('Password must be at least 6 characters.');
            return;
        }

        setSuccessMsg(`Account created successfully for ${name}!`);
        
        // Reset form to clear inputs
        setName('');
        setEmail('');
        setPhone('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div>
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Registration Form Playground</h2>
                <p className="text-gray-600 mt-2">
                    Write scripts to populate the <code>id="name", "email", "phone", "password", "confirmPassword"</code> fields. 
                    Trigger the form using <code>id="registerBtn"</code> and validate the outcome.
                </p>
            </div>

            <div className="max-w-md bg-white border border-gray-200 rounded-xl shadow-sm p-8">
                {successMsg && (
                    <div id="successMessage" className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-md text-sm text-center font-medium">
                        {successMsg}
                    </div>
                )}
                {errorMsg && (
                    <div id="errorMessage" className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-md text-sm text-center font-medium">
                        {errorMsg}
                    </div>
                )}

                <form onSubmit={handleMockRegister} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                            Full Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                            placeholder="John Doe"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                            placeholder="john@example.com"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">
                            Phone Number
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                            placeholder="(555) 123-4567"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                            placeholder="••••••••"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            id="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                            placeholder="••••••••"
                        />
                    </div>

                    <div className="pt-3">
                        <button
                            id="registerBtn"
                            type="submit"
                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition-colors shadow-sm"
                        >
                            Simulate Registration
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPlayground;
