import { useState } from 'react';

const FormPlayground = () => {
    const [formData, setFormData] = useState({
        'text-input': '',
        'email-input': '',
        'password-input': '',
        'number-input': '',
        'date-picker': '',
        'dropdown-select': '',
        'textarea-input': '',
    });

    const [radioValue, setRadioValue] = useState('');
    const [checkboxes, setCheckboxes] = useState({
        'checkbox-1': false,
        'checkbox-2': false
    });
    
    const [submitted, setSubmitted] = useState(false);

    // Dynamic handler for standard inputs
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleMockSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div>
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Advanced Form Elements Playground</h2>
                <p className="text-gray-600 mt-2">
                    This single massive form contains every common input type you will encounter in the wild. 
                    Your assignment is to write scripts that locate each element via its UNIQUE <code>id</code> attribute, interact with it appropriately, and hit submit.
                </p>
            </div>

            <div className="bg-white border text-left border-gray-200 rounded-xl shadow-sm p-8">
                {submitted && (
                    <div id="submit-success-msg" className="mb-8 p-4 bg-green-50 border border-green-200 text-green-700 rounded-md text-sm font-medium flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        Form successfully submitted! Check your automation assertion.
                    </div>
                )}

                <form id="advancedForm" data-testid="advanced-form" onSubmit={handleMockSubmit} className="form-container space-y-8">
                    
                    {/* Basic Inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-group">
                            <label className="form-label block text-sm font-medium text-gray-700 mb-1" htmlFor="text-input">Text Input</label>
                            <input id="text-input" name="text-input" data-testid="text-input-field" value={formData['text-input']} onChange={handleChange} type="text" className="input-field w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Standard Text" />
                        </div>
                        <div className="form-group">
                            <label className="form-label block text-sm font-medium text-gray-700 mb-1" htmlFor="email-input">Email Input</label>
                            <input id="email-input" name="email-input" data-testid="email-input-field" value={formData['email-input']} onChange={handleChange} type="email" className="input-field w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="user@domain.com" />
                        </div>
                        <div className="form-group">
                            <label className="form-label block text-sm font-medium text-gray-700 mb-1" htmlFor="password-input">Password Input</label>
                            <input id="password-input" name="password-input" data-testid="password-input-field" value={formData['password-input']} onChange={handleChange} type="password" className="input-field w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="••••••••" />
                        </div>
                        <div className="form-group">
                            <label className="form-label block text-sm font-medium text-gray-700 mb-1" htmlFor="number-input">Number Input</label>
                            <input id="number-input" name="number-input" data-testid="number-input-field" value={formData['number-input']} onChange={handleChange} type="number" className="input-field w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="42" />
                        </div>
                    </div>

                    <hr className="border-gray-100" />

                    {/* Specialized Inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-group">
                            <label className="form-label block text-sm font-medium text-gray-700 mb-1" htmlFor="date-picker">Date Picker</label>
                            <input id="date-picker" name="date-picker" data-testid="date-picker-field" value={formData['date-picker']} onChange={handleChange} type="date" className="input-field w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="YYYY-MM-DD" />
                        </div>
                        <div className="form-group">
                            <label className="form-label block text-sm font-medium text-gray-700 mb-1" htmlFor="file-upload">File Upload</label>
                            <input id="file-upload" name="file-upload" data-testid="file-upload-field" type="file" className="input-field w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-500 file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" placeholder="Select a file" />
                        </div>
                    </div>

                    <hr className="border-gray-100" />

                    {/* Selectable Inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-group">
                            <label className="form-label block text-sm font-medium text-gray-700 mb-2">Radio Buttons</label>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <input id="radio-option-1" name="experience" data-testid="radio-beginner" type="radio" value="beginner" checked={radioValue === 'beginner'} onChange={(e) => setRadioValue(e.target.value)} className="input-field h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                                    <label htmlFor="radio-option-1" className="form-label ml-2 text-sm text-gray-700">Beginner</label>
                                </div>
                                <div className="flex items-center">
                                    <input id="radio-option-2" name="experience" data-testid="radio-intermediate" type="radio" value="intermediate" checked={radioValue === 'intermediate'} onChange={(e) => setRadioValue(e.target.value)} className="input-field h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                                    <label htmlFor="radio-option-2" className="form-label ml-2 text-sm text-gray-700">Intermediate</label>
                                </div>
                                <div className="flex items-center">
                                    <input id="radio-option-3" name="experience" data-testid="radio-advanced" type="radio" value="advanced" checked={radioValue === 'advanced'} onChange={(e) => setRadioValue(e.target.value)} className="input-field h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                                    <label htmlFor="radio-option-3" className="form-label ml-2 text-sm text-gray-700">Advanced</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label block text-sm font-medium text-gray-700 mb-2">Checkboxes</label>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <input id="checkbox-1" name="newsletter" data-testid="checkbox-newsletter" type="checkbox" checked={checkboxes['checkbox-1']} onChange={(e) => setCheckboxes({...checkboxes, 'checkbox-1': e.target.checked})} className="input-field h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 rounded" />
                                    <label htmlFor="checkbox-1" className="form-label ml-2 text-sm text-gray-700">Subscribe to newsletter</label>
                                </div>
                                <div className="flex items-center">
                                    <input id="checkbox-2" name="terms" data-testid="checkbox-terms" type="checkbox" checked={checkboxes['checkbox-2']} onChange={(e) => setCheckboxes({...checkboxes, 'checkbox-2': e.target.checked})} className="input-field h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 rounded" />
                                    <label htmlFor="checkbox-2" className="form-label ml-2 text-sm text-gray-700">Accept Terms and Conditions</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="border-gray-100" />

                    {/* Complex Inputs */}
                    <div className="space-y-6">
                        <div className="form-group">
                            <label className="form-label block text-sm font-medium text-gray-700 mb-1" htmlFor="dropdown-select">Dropdown Select</label>
                            <select id="dropdown-select" name="dropdown-select" data-testid="dropdown-select-field" value={formData['dropdown-select']} onChange={handleChange} className="input-field w-full px-3 py-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="">-- Choose a framework --</option>
                                <option value="selenium">Selenium WebDriver</option>
                                <option value="playwright">Playwright</option>
                                <option value="cypress">Cypress</option>
                                <option value="puppeteer">Puppeteer</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="form-label block text-sm font-medium text-gray-700 mb-1" htmlFor="textarea-input">Textarea Request</label>
                            <textarea id="textarea-input" name="textarea-input" data-testid="textarea-input-field" value={formData['textarea-input']} onChange={handleChange} rows="4" className="input-field w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Type your automation test strategy here..."></textarea>
                        </div>
                    </div>

                    <div className="pt-4 pb-2">
                        <button id="submitBtn" name="submitBtn" data-testid="submit-btn" type="submit" className="btn btn-primary px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow hover:bg-indigo-700 transition">
                            Submit Form Elements
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default FormPlayground;
