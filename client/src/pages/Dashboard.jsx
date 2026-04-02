import { Link } from 'react-router-dom';

const Dashboard = () => {
    const modules = [
        {
            title: 'Login Playground',
            desc: 'Practice stable authentications and error string extractions.',
            path: '/playgrounds/login',
            color: 'bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100',
            id: 'card-login'
        },
        {
            title: 'Registration Form',
            desc: 'Multi-field form submissions with heavy validation checks.',
            path: '/playgrounds/register',
            color: 'bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100',
            id: 'card-register'
        },
        {
            title: 'Form Elements API',
            desc: 'Interact heavily with radio buttons, checkboxes, and select menus.',
            path: '/playgrounds/forms',
            color: 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100',
            id: 'card-forms'
        },
        {
            title: 'Buttons & Alerts',
            desc: 'Properly handle native browser alerts, confirms, and prompts.',
            path: '/playgrounds/alerts',
            color: 'bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100',
            id: 'card-alerts'
        },
        {
            title: 'Products Ecommerce',
            desc: 'Mini e-commerce flow testing with mock API data and cart clicks.',
            path: '/playgrounds/products',
            color: 'bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100',
            id: 'card-products'
        },
        {
            title: 'Search Queries',
            desc: 'Keyboard based interactive searching and result-list parsing.',
            path: '/playgrounds/search',
            color: 'bg-rose-50 border-rose-200 text-rose-700 hover:bg-rose-100',
            id: 'card-search'
        }
    ];

    return (
        <div>
            <div className="mb-10">
                <h1 className="text-3xl font-black text-slate-800 tracking-tight">Experiment Dashboard</h1>
                <p className="mt-3 text-slate-500 text-lg leading-relaxed">
                    Select a targeted practice module below to begin writing your automated scripts. 
                    All UI elements contain highly stable and deliberately unique HTML IDs designed specifically for 
                    Playwright and Selenium bindings.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {modules.map((mod) => (
                    <Link
                        key={mod.title}
                        id={mod.id}
                        to={mod.path}
                        className={`block p-6 rounded-xl border-2 transition-all hover:shadow-lg hover:-translate-y-1 ${mod.color}`}
                    >
                        <h2 className="text-xl font-bold mb-2 tracking-tight">{mod.title}</h2>
                        <p className="opacity-90 leading-snug mb-6 font-medium">{mod.desc}</p>
                        <div className="text-sm font-bold flex items-center tracking-wide uppercase opacity-90">
                            Initialize Test <span className="ml-1 text-lg leading-none">→</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
