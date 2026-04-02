import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    const links = [
        { path: '/dashboard', label: 'Overview', id: 'nav-dashboard' },
        { path: '/playgrounds/login', label: 'Login Model', id: 'nav-login-practice' },
        { path: '/playgrounds/register', label: 'Registration Model', id: 'nav-register-practice' },
        { path: '/playgrounds/forms', label: 'Form Controls', id: 'nav-forms' },
        { path: '/playgrounds/alerts', label: 'Native Alerts', id: 'nav-alerts' },
        { path: '/playgrounds/products', label: 'E-commerce API', id: 'nav-products' },
        { path: '/playgrounds/search', label: 'Live Search', id: 'nav-search' },
    ];

    return (
        <aside className="w-full md:w-64 bg-slate-900 text-slate-300 flex-shrink-0 md:min-h-[calc(100vh-4rem)] border-b md:border-b-0 md:border-r border-slate-800 overflow-x-auto md:overflow-visible custom-scrollbar">
            <nav className="p-3 md:p-4 flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-1.5 whitespace-nowrap">
                <div className="hidden md:block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 px-4 mt-2">
                    Testing Modules
                </div>
                {links.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        id={link.id}
                        className={`inline-block md:block px-4 py-2 md:py-2.5 rounded-lg text-sm font-medium transition-colors ${
                            location.pathname === link.path
                                ? 'bg-blue-600 text-white shadow-sm'
                                : 'hover:bg-slate-800 hover:text-white'
                        }`}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
