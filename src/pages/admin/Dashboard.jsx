import { FiDollarSign, FiShoppingBag, FiUsers, FiBox, FiTrendingUp } from 'react-icons/fi';
import { FaShoppingBag } from 'react-icons/fa';
import { useOutletContext } from 'react-router-dom';
import initialOrders from '../../data/orders';
import { useState } from 'react';

const Dashboard = () => {

    const [realStats, setRealStats] = useState(() => {
        const savedCustomers = JSON.parse(localStorage.getItem('customer_users')) || [];
        const savedProducts = JSON.parse(localStorage.getItem('admin_products')) || [];

        return {
            customersCount: savedCustomers.length > 0 ? savedCustomers.length : 89,
            menuItemsCount: savedProducts.length > 0 ? savedProducts.length : 20,
        };
    });

    const { search } = useOutletContext();

    const stats = [
        { title: "Total Sales", value: "$2,456.00", icon: <FiDollarSign />, trend: "+12.5%", color: "text-green-500", bg: "bg-green-100 dark:bg-green-500/20" },
        { title: "Total Orders", value: "142", icon: <FiShoppingBag />, trend: "+8.2%", color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-500/20" },
        { title: "Customers", value: realStats.customersCount, icon: <FiUsers />, trend: "+2.4%", color: "text-orange-500", bg: "bg-orange-100 dark:bg-orange-500/20" },
        { title: "Menu Items", value: realStats.menuItemsCount, icon: <FiBox />, trend: "+0.0%", color: "text-purple-500", bg: "bg-purple-100 dark:bg-purple-500/20" }
    ];

    //​ Mock Data for Recent Orders Table
    let recentOrders = initialOrders;
    try {
        const savedOrders = localStorage.getItem('admin_orders');
        if (savedOrders) {
            recentOrders = JSON.parse(savedOrders);
        }
    } catch (error) {
        console.error("Local storage error:", error);
    }

    // Filter name
    const filteredOrders = recentOrders.filter((order) => {
        return (
            order.customerName.toLowerCase().includes(search.toLowerCase()) ||
            order.id.toLowerCase().includes(search.toLowerCase())
        );
    });

    return (
        <div className="space-y-8">
            <div className="relative rounded-3xl p-2 overflow-hidden flex justify-between items-center ">

                <div className="relative z-10">
                    <h1 className="text-3xl font-extrabold text-[#1B254B] dark:text-white">
                        Dashboard Overview
                    </h1>
                    <hr className="w-[100px] border-t-4 border-orange-500" />
                    <p className="text-gray-500 mt-2">
                        Welcome to the admin dashboard! Here is your daily summary.
                    </p>
                </div>

            </div>


            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm transition-colors duration-200"
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.title}</p>
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-2">{stat.value}</h3>
                            </div>
                            <div className={`p-3 rounded-xl ${stat.bg} ${stat.color} transition-colors duration-200`}>
                                <span className="text-xl">{stat.icon}</span>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center text-sm">
                            <FiTrendingUp className="text-green-500 mr-2" />
                            <span className="text-green-500 font-medium">{stat.trend}</span>
                            <span className="text-gray-400 ml-2">vs last week</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Orders Table */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden transition-colors duration-200">
                <div className="px-6 py-3 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center transition-colors">
                    <div className='flex'>
                        <div className='flex justify-center items-center text-3xl text-orange-500 border-l-4 border-orange-500 px-4'>
                            <FaShoppingBag />
                        </div>
                        <h2 className="text-lg font-bold text-gray-800 dark:text-white">Recent Orders</h2>
                    </div>
                    <button className="text-orange-500 hover:text-orange-600 text-sm font-medium transition-colors">
                        View All
                    </button>
                </div>

                <div className="overflow-x-auto h-[315px]">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 text-sm transition-colors">
                                <th className="px-6 py-4 font-medium">Order ID</th>
                                <th className="px-6 py-4 font-medium">Customer</th>
                                <th className="px-6 py-4 font-medium">Date</th>
                                <th className="px-6 py-4 font-medium">Total</th>
                                <th className="px-6 py-4 font-medium">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                            {filteredOrders.length > 0 ? (
                                filteredOrders.map((order, index) => (
                                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-150">
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{order.id}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">{order.customerName}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{order.date}</td>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{order.total}</td>
                                        <td className="px-6 py-4 text-sm">
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium
                      ${order.status === 'Completed' ? 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400' : ''}
                      ${order.status === 'Pending' ? 'bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400' : ''}
                      ${order.status === 'Preparing' ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400' : ''}
                    `}>
                                                {order.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center py-8 text-gray-500">
                                        No results found for "{search}"
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;