import { useState } from 'react';
import { FiSearch, FiBell, FiSun, FiMoon, FiAlignLeft, FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const AdminNavbar = ({ onMenuClick, search, setSearch, isDarkMode, setIsDarkMode }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const navigate = useNavigate();
    const handleLogout = () => {
        // Delete Key Token admin in Localstorage
        localStorage.removeItem('admin_token');
        localStorage.removeItem('user_role');

        // Route to Login
        navigate('/login');
    };
    const notifications = [
        { id: 1, title: "New Order #ORD-021 received", time: "5 min ago", isRead: false },
        { id: 2, title: "Sok San just registered", time: "1 hour ago", isRead: false },
        { id: 3, title: "Product 'Khmer Burger' is low on stock", time: "2 hours ago", isRead: false },
    ];
    const unreadCount = notifications.filter(n => !n.isRead).length;
    return (
        <div className="h-20 bg-white border-b border-gray-100 dark:border-gray-500 flex items-center justify-between px-8 dark:bg-gray-900">
            <div className='flex items-center gap-5 '>
                <div onClick={onMenuClick} className='w-[45px] h-[45px] bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center'>
                    <FiAlignLeft className='text-2xl hover:text-orange-500 transition cursor-pointer' />
                </div>
                {/* Search Bar */}
                <div className="flex bg-gray-200 items-center px-2 py-2 rounded-full w-96 border border-gray-100 dark:bg-gray-700 dark:border-0">
                    <div className='w-[35px] h-[30px] bg-white flex justify-center items-center rounded-[50%]'>
                        <FiSearch className="text-gray-400 text-lg " />
                    </div>
                    <input
                        type="text"
                        placeholder="Search items, orders..."
                        className="bg-transparent border-none outline-none ml-3 w-full text-sm text-gray-600 placeholder-gray-400"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            {/* Admin Profile & Notifications */}
            <div className="flex items-center space-x-6">

                <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="text-gray-500 hover:text-orange-500 transition-colors cursor-pointer bg-gray-50 p-2 rounded-full"
                >
                    {isDarkMode ? (
                        <FiSun className="text-xl text-orange-500" />
                    ) : (
                        <FiMoon className="text-xl" />
                    )}
                </button>

                {/* Notification Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setShowNotifications(!showNotifications)}
                        className="relative text-gray-500 dark:text-white hover:text-orange-500 transition-colors mt-2 hover:cursor-pointer"
                    >
                        <FiBell className="text-2xl" />

                        {unreadCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-900">
                                {unreadCount}
                            </span>
                        )}
                    </button>
                    {showNotifications && (
                        <div className="absolute right-0 mt-4 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden z-50 animate-fade-in-up">

                            {/* Header */}
                            <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                                <h3 className="text-sm font-bold text-gray-900 dark:text-white">Notifications</h3>
                                <button className="text-xs text-orange-500 hover:underline">Mark all as read</button>
                            </div>

                            {/* List */}
                            <ul className="max-h-64 overflow-y-auto">
                                {notifications.map((note) => (
                                    <li
                                        key={note.id}
                                        className={`px-4 py-3 border-b border-gray-50 dark:border-gray-700/50 cursor-pointer transition-colors
                                            ${!note.isRead ? 'bg-orange-50 dark:bg-gray-700 hover:bg-orange-100' : 'hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                                    >
                                        <p className="text-sm text-gray-800 dark:text-gray-200">{note.title}</p>
                                        <p className="text-xs text-gray-400 mt-1">{note.time}</p>
                                    </li>
                                ))}
                            </ul>

                            {/* Footer */}
                            <div className="px-4 py-2 text-center border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                                <button className="text-xs font-medium text-orange-500 hover:underline">View All Notifications</button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Profile */}
                <div className="relative">
                    <div
                        onClick={() => setShowDropdown(!showDropdown)}
                        className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors"
                    >
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

                    {/* Drop Down */}
                    {showDropdown && (
                        <div className="absolute right-0 mt-3 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden z-50 animate-fade-in-up">

                            <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                                <p className="text-sm text-gray-900 dark:text-white">Admin User</p>
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">lyhafis037@gmail.com</p>
                            </div>

                            <ul className="py-2">
                                <li>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-gray-700 flex items-center gap-2 transition-colors font-medium"
                                    >
                                        <FiLogOut className="text-lg" />
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminNavbar;