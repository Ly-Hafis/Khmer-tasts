import React, { useState, useRef } from 'react';
import { FiUser, FiHome, FiLock, FiBell, FiCamera, FiSave } from 'react-icons/fi';
import Swal from 'sweetalert2';

const Settings = () => {

    const [activeTab, setActiveTab] = useState('profile');

    const fileInputRef = useRef(null);

    const [profile, setProfile] = useState(() => {
        const savedProfile = localStorage.getItem('admin_profile');
        return savedProfile ? JSON.parse(savedProfile) : {
            name: 'Admin User',
            email: 'lyhafis037@gmail.com',
            phone: '+855 96 418 9592',
            avatar: 'https://ui-avatars.com/api/?name=Admin+User&background=f97316&color=fff',
        };
    });


    const [password, setPassword] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const [store, setStore] = useState(() => {
        const savedStore = localStorage.getItem('admin_store_settings');
        return savedStore ? JSON.parse(savedStore) : {
            storeName: 'KhmerFood Restaurant',
            currency: 'USD ($)',
            deliveryFee: '1.50',
            address: 'Phnom Penh, Cambodia',
        };
    });

    const handleSave = (e) => {
        e.preventDefault();
        if (activeTab === 'profile') {
            localStorage.setItem('admin_profile', JSON.stringify(profile));
        } else if (activeTab === 'store') {
            localStorage.setItem('admin_store_settings', JSON.stringify(store));
        } else if (activeTab === 'security') {

            const adminData = JSON.parse(localStorage.getItem('admin_credentials'));

            if ((password.currentPassword.trim() == '') || (password.newPassword.trim() == '') || (password.confirmPassword.trim() == '')) {
                Swal.fire('Error', 'Please fill in all password fields!', 'error');
                return;
            }

            if (password.currentPassword !== adminData.password) {
                Swal.fire('Error', 'Current password is incorrect!', 'error');
                return;
            }
            if (password.newPassword !== password.confirmPassword) {
                Swal.fire('Error', 'New passwords do not match!', 'error');
                return;
            }

            // Save updated password to localStorage
            const updatedAdmin = { ...adminData, password: password.newPassword };
            localStorage.setItem('admin_credentials', JSON.stringify(updatedAdmin));

            setPassword({ currentPassword: '', newPassword: '', confirmPassword: '' });
        }

        Swal.fire({
            title: 'Saved Successfully!',
            text: 'Your settings have been updated.',
            icon: 'success',
            timer: 1500,
            showConfirmButton: false
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Check file size (limit to 2MB so localStorage doesn't get full)
        if (file.size > 2 * 1024 * 1024) {
            Swal.fire('Error', 'Image must be under 2MB!', 'error');
            return;
        }

        // Convert image to Base64 string so it can be previewed & saved in localStorage
        const reader = new FileReader();
        reader.onloadend = () => {
            const updatedProfile = { ...profile, avatar: reader.result };

            // Update state AND localStorage with the new object
            setProfile(updatedProfile);
            localStorage.setItem('admin_profile', JSON.stringify(updatedProfile));
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="space-y-8">
            {/* Header Section */}
            <div className="relative rounded-3xl p-2 overflow-hidden flex justify-between items-center">
                <div className="relative z-10">
                    <h1 className="text-3xl font-extrabold text-[#1B254B] dark:text-white">
                        Settings
                    </h1>
                    <hr className="w-[60px] border-t-4 border-orange-500 mt-1" />
                    <p className="text-gray-500 mt-2">
                        Manage your account and store preferences.
                    </p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">

                {/*  Sidebar Tabs */}
                <div className="lg:w-1/4">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-4 space-y-2">

                        <button
                            onClick={() => setActiveTab('profile')}
                            className={`w-full flex items-center space-x-3 px-4 py-3 cursor-pointer rounded-xl font-medium transition-colors ${activeTab === 'profile'
                                ? 'bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400'
                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                                }`}
                        >
                            <FiUser className="text-lg" />
                            <span>My Profile</span>
                        </button>

                        <button
                            onClick={() => setActiveTab('store')}
                            className={`w-full flex items-center cursor-pointer space-x-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'store'
                                ? 'bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400'
                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                                }`}
                        >
                            <FiHome className="text-lg" />
                            <span>Store Details</span>
                        </button>

                        <button
                            onClick={() => setActiveTab('security')}
                            className={`w-full flex cursor-pointer items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'security'
                                ? 'bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400'
                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                                }`}
                        >
                            <FiLock className="text-lg" />
                            <span>Security</span>
                        </button>

                    </div>
                </div>

                {/* Content Area */}
                <div className="lg:w-3/4">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-8">

                        {/* Profile Tab Content */}
                        {activeTab === 'profile' && (
                            <form onSubmit={handleSave} className="animate-fade-in-up">
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Profile Settings</h2>

                                {/* Avatar Upload */}
                                <div className="flex items-center space-x-6 mb-8">
                                    <div className="relative">
                                        <img
                                            src={profile.avatar || "https://ui-avatars.com/api/?name=Admin+User&background=f97316&color=fff"}
                                            alt="Profile"
                                            className="w-24 h-24 rounded-full object-cover border-4 border-gray-50 dark:border-gray-700"
                                        />

                                        {/* Hidden file input */}
                                        <input
                                            type="file"
                                            accept="image/png, image/jpeg, image/jpg"
                                            ref={fileInputRef}
                                            onChange={handleImageChange}
                                            className="hidden"
                                        />

                                        {/* Clicking this button triggers the hidden file input */}
                                        <button
                                            type="button"
                                            onClick={() => fileInputRef.current.click()}
                                            className="absolute bottom-0 right-0 bg-gray-900 text-white p-2 rounded-full border-2 border-white dark:border-gray-800 hover:bg-gray-800 transition-colors cursor-pointer"
                                        >
                                            <FiCamera />
                                        </button>
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 dark:text-white">Profile Photo</h3>
                                        <p className="text-sm text-gray-500 mt-1">PNG, JPG under 2MB</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Full Name</label>
                                        <input
                                            type="text"
                                            value={profile.name}
                                            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none dark:text-white transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email Address</label>
                                        <input
                                            type="email"
                                            value={profile.email}
                                            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none dark:text-white transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Phone Number</label>
                                        <input
                                            type="text"
                                            value={profile.phone}
                                            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none dark:text-white transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="mt-8 flex justify-end">
                                    <button type="submit" className="cursor-pointer flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-medium shadow-md shadow-orange-500/30 transition-all">
                                        <FiSave className="mr-2" /> Save Changes
                                    </button>
                                </div>
                            </form>
                        )}

                        {/* Store Settings Tab Content */}
                        {activeTab === 'store' && (
                            <form onSubmit={handleSave} className="animate-fade-in-up">
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Store Details</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Restaurant Name</label>
                                        <input
                                            type="text"
                                            value={store.storeName}
                                            onChange={(e) => setStore({ ...store, storeName: e.target.value })}
                                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none dark:text-white transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Default Currency</label>
                                        <select
                                            value={store.currency}
                                            onChange={(e) => setStore({ ...store, currency: e.target.value })}
                                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none dark:text-white transition-all cursor-pointer"
                                        >
                                            <option value="USD ($)">USD ($)</option>
                                            <option value="KHR (៛)">KHR (៛)</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Base Delivery Fee</label>
                                        <input
                                            type="number"
                                            value={store.deliveryFee}
                                            onChange={(e) => setStore({ ...store, deliveryFee: e.target.value })}
                                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none dark:text-white transition-all"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Store Address</label>
                                        <textarea
                                            rows="3"
                                            value={store.address}
                                            onChange={(e) => setStore({ ...store, address: e.target.value })}
                                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none dark:text-white resize-none transition-all"
                                        ></textarea>
                                    </div>
                                </div>

                                <div className="mt-8 flex justify-end">
                                    <button type="submit" className="flex items-center cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-medium shadow-md shadow-orange-500/30 transition-all">
                                        <FiSave className="mr-2" /> Save Store Settings
                                    </button>
                                </div>
                            </form>
                        )}

                        {/* Security Tab Content */}
                        {activeTab === 'security' && (
                            <form onSubmit={handleSave} className="animate-fade-in-up">
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Change Password</h2>

                                <div className="space-y-6 max-w-md">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Current Password</label>
                                        <input
                                            type="password"
                                            placeholder="••••••••"

                                            onChange={(e) => setPassword({ ...password, currentPassword: e.target.value })}
                                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none dark:text-white transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">New Password</label>
                                        <input
                                            type="password"
                                            placeholder="••••••••"
                                            value={password.newPassword}
                                            onChange={(e) => setPassword({ ...password, newPassword: e.target.value })}
                                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none dark:text-white transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Confirm New Password</label>
                                        <input
                                            type="password"
                                            placeholder="••••••••"
                                            value={password.confirmPassword}
                                            onChange={(e) => setPassword({ ...password, confirmPassword: e.target.value })}
                                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none dark:text-white transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="mt-8 flex justify-start">
                                    <button type="submit" className="flex items-center bg-gray-900 dark:bg-white dark:hover:bg-gray-200 cursor-pointer dark:text-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-medium transition-all">
                                        <FiLock className="mr-2" /> Update Password
                                    </button>
                                </div>
                            </form>
                        )}

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Settings;