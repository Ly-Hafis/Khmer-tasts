import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // បើអត់ទាន់មាន Footer អាចលុបបន្ទាត់នេះសិនបាន

const CustomerLayout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
            
            {/* របារខាងលើ (ជាប់រហូតគ្រប់ទំព័រ Customer) */}
            <Navbar />

            {/* ខ្លឹមសារកណ្តាល (ផ្លាស់ប្តូរទៅតាម Route នីមួយៗដូចជា Home, Menu, Cart...) */}
            <main className="flex-grow">
                <Outlet />
            </main>

            {/* ផ្នែកខាងក្រោម */}
            <Footer />
            
        </div>
    );
};

export default CustomerLayout;