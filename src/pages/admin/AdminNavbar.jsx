import { useState, useEffect } from 'react';
import { FiSearch, FiBell, FiSun, FiMoon } from 'react-icons/fi';

const AdminNavbar = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // document.documentElement is Tag <html>
        if (isDarkMode) {
            document.documentElement.classList.add('dark'); 
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);
    return (
        <div className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 dark:bg-gray-700">
            {/* Search Bar */}
            <div className="flex bg-gray-50 items-center px-4 py-2 rounded-full w-96 border border-gray-100">
                <FiSearch className="text-gray-400 text-lg" />
                <input
                    type="text"
                    placeholder="Search items, orders..."
                    className="bg-transparent border-none outline-none ml-3 w-full text-sm text-gray-600 placeholder-gray-400"
                />
            </div>

            {/* Admin Profile & Notifications */}
            <div className="flex items-center space-x-6">

                <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="text-gray-500 hover:text-orange-500 transition-colors bg-gray-50 p-2 rounded-full"
                >
                    {isDarkMode ? (
                        <FiSun className="text-xl text-orange-500" />
                    ) : (
                        <FiMoon className="text-xl" />
                    )}
                </button>

                <button className="relative text-gray-500 dark:text-white hover:text-orange-500 transition-colors">
                    <FiBell className="text-2xl" />
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                        3
                    </span>
                </button>

                <div className="flex items-center space-x-3 cursor-pointer">
                    <img
                        src="https://ui-avatars.com/api/?name=Admin+User&background=f97316&color=fff"
                        alt="Admin Profile"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="hidden md:block">
                        <p className="text-sm font-medium text-gray-700 dark:text-white">Admin User</p>
                        <p className="text-xs text-gray-400">Super Admin</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminNavbar;