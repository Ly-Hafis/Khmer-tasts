import React, { useState, useEffect } from 'react';
import { FiUsers, FiUserCheck, FiUserX, FiTrendingUp, FiTrash2 } from 'react-icons/fi';
import { FaUsers } from 'react-icons/fa';
import { useOutletContext } from 'react-router-dom';

// Static mock data to match Dashboard style
const staticCustomers = [
    { id: "CUST-001", name: "Sok San", email: "sok.san@example.com", joinedDate: "Oct 12, 2026" },
    { id: "CUST-002", name: "Chan Dara", email: "chan.dara@example.com", joinedDate: "Oct 14, 2026" },
    { id: "CUST-003", name: "Ly Hour", email: "ly.hour@example.com", joinedDate: "Oct 15, 2026" },
    { id: "CUST-004", name: "Sim Sreyrath", email: "sim.sreyrath@example.com", joinedDate: "Oct 18, 2026" },
    { id: "CUST-005", name: "Chea Vuthy", email: "chea.vuthy@example.com", joinedDate: "Oct 20, 2026" },
    { id: "CUST-006", name: "Ouk Sovann", email: "ouk.sovann@example.com", joinedDate: "Oct 22, 2026" },
    { id: "CUST-007", name: "Meas Mony", email: "meas.mony@example.com", joinedDate: "Oct 25, 2026" },
    { id: "CUST-008", name: "Keo Piseth", email: "keo.piseth@example.com", joinedDate: "Oct 28, 2026" },
    { id: "CUST-009", name: "Seng Rithy", email: "seng.rithy@example.com", joinedDate: "Nov 02, 2026" },
    { id: "CUST-010", name: "Chhorn Dina", email: "chhorn.dina@example.com", joinedDate: "Nov 05, 2026" },
    { id: "CUST-011", name: "Khiev Samnang", email: "khiev.samnang@example.com", joinedDate: "Nov 08, 2026" },
    { id: "CUST-012", name: "Tep Bopha", email: "tep.bopha@example.com", joinedDate: "Nov 10, 2026" },
];

const Customers = () => {
    const [customers, setCustomers] = useState([]);
    const [bannedCount, setBannedCount] = useState(() => {
        const savedBanned = localStorage.getItem('banned_customers_count');
        return savedBanned ? parseInt(savedBanned) : 2;
    });
    // Assuming search comes from your top navigation via Outlet context
    const { search = '' } = useOutletContext() || {};

    // Set and Get Static Customer to loaclstorage
    useEffect(() => {
        const storedData = localStorage.getItem('customer_users');
        if (storedData === null) {
            localStorage.setItem('customer_users', JSON.stringify(staticCustomers));
            setCustomers(staticCustomers);
        } else {
            setCustomers(JSON.parse(storedData));
        }
    }, []);

    //  Delete or Ban Customer
    const handleDelete = (id) => {
        const updatedCustomers = customers.filter(customer => customer.id !== id);
        setCustomers(updatedCustomers);
        localStorage.setItem('customer_users', JSON.stringify(updatedCustomers));

        setBannedCount(bannedCount + 1);
        localStorage.setItem('banned_customers_count', (bannedCount + 1).toString());
    };

    // Filter customers based on context search
    const filteredCustomers = customers.filter((customer) => {
        const searchTerm = search.toLowerCase();
        return (
            (customer.name && customer.name.toLowerCase().includes(searchTerm)) ||
            (customer.email && customer.email.toLowerCase().includes(searchTerm)) ||
            (customer.id && String(customer.id).toLowerCase().includes(searchTerm))
        );
    });

    // Mock stats for the grid - adapting the Dashboard style
    const stats = [
        { title: "Total Customers", value: customers.length, icon: <FiUsers />, trend: "+12.5%", color: "text-orange-500", bg: "bg-orange-100 dark:bg-orange-500/20" },
        { title: "Active Users", value: Math.max(0, customers.length - 2), icon: <FiUserCheck />, trend: "+5.2%", color: "text-green-500", bg: "bg-green-100 dark:bg-green-500/20" },
        { title: "New This Week", value: "24", icon: <FiTrendingUp />, trend: "+18.0%", color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-500/20" },
        { title: "Banned Users", value: bannedCount, icon: <FiUserX />, trend: "-1.4%", color: "text-red-500", bg: "bg-red-100 dark:bg-red-500/20" }
    ];

    // Export
    const exportToCSV = () => {
        const headers = ['ID', 'Name', 'Email', 'Joined Date'];
        const csvRows = [];
        csvRows.push(headers.join(','));
        customers.forEach(customer => {
            const values = [
                customer.id,
                `"${customer.name}"`, 
                `"${customer.email}"`,
                `"${customer.joinedDate}"`
            ];
            csvRows.push(values.join(','));
        });

        const csvString = csvRows.join('\n');
        const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        
        if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', 'customers_list.csv'); 
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click(); 
            document.body.removeChild(link);
        }
    };

    return (
        <div className="space-y-8">
            {/* Header Section */}
            <div className="relative rounded-3xl p-2 overflow-hidden flex justify-between items-center">
                <div className="relative z-10">
                    <h1 className="text-3xl font-extrabold text-[#1B254B] dark:text-white">
                        Customer Management
                    </h1>
                    <hr className="w-[100px] border-t-4 border-orange-500" />
                    <p className="text-gray-500 mt-2">
                        View, manage, and monitor your customer base.
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
                            <FiTrendingUp className={`${stat.title === 'Banned Users' ? 'text-red-500' : 'text-green-500'} mr-2`} />
                            <span className={`${stat.title === 'Banned Users' ? 'text-red-500' : 'text-green-500'} font-medium`}>{stat.trend}</span>
                            <span className="text-gray-400 ml-2">vs last month</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Customers Data Table */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden transition-colors duration-200">
                <div className="px-6 py-3 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center transition-colors">
                    <div className='flex'>
                        <div className='flex justify-center items-center text-3xl text-orange-500 border-l-4 border-orange-500 px-4'>
                            <FaUsers />
                        </div>
                        <h2 className="text-lg font-bold text-gray-800 dark:text-white">Customer List</h2>
                    </div>
                    <button
                        onClick={exportToCSV}
                        className="text-orange-500 hover:text-orange-600 text-sm font-medium transition-colors cursor-pointer"
                    >
                        Export CSV
                    </button>
                </div>

                <div className="overflow-x-auto  h-[400px]">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 text-sm transition-colors">
                                <th className="px-6 py-4 font-medium">ID</th>
                                <th className="px-6 py-4 font-medium">Profile</th>
                                <th className="px-6 py-4 font-medium">Name</th>
                                <th className="px-6 py-4 font-medium">Email</th>
                                <th className="px-6 py-4 font-medium">Joined Date</th>
                                <th className="px-6 py-4 font-medium text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                            {filteredCustomers.length > 0 ? (
                                filteredCustomers.map((customer) => (
                                    <tr key={customer.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-150">
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">#{customer.id}</td>
                                        <td className="px-6 py-4">
                                            <img
                                                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(customer.name || 'User')}&background=f97316&color=fff&rounded=true`}
                                                alt={customer.name}
                                                className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 shadow-sm"
                                            />
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{customer.name || 'Unknown'}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{customer.email || 'N/A'}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{customer.joinedDate || 'N/A'}</td>
                                        <td className="px-6 py-4 text-right">
                                            <button
                                                onClick={() => handleDelete(customer.id)}
                                                className="inline-flex items-center hover:cursor-pointer justify-center px-3 py-1.5 bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-500/20 rounded-lg text-sm font-medium transition-colors"
                                            >
                                                <FiTrash2 className="mr-2" />
                                                Ban User
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center py-12 text-gray-500 dark:text-gray-400">
                                        {search ? `No customers found for "${search}"` : "No customers available."}
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

export default Customers;