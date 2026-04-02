import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <Navbar />
            <div className="flex flex-col md:flex-row flex-1 md:h-[calc(100vh-4rem)]">
                <Sidebar />
                <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-10">
                    <div className="max-w-6xl mx-auto bg-white p-5 sm:p-8 rounded-xl shadow-sm border border-gray-100 min-h-full">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Layout;
