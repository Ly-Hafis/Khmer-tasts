import { useState, useEffect } from 'react';
import { FiEdit, FiTrash2, FiPlus, FiX } from 'react-icons/fi';
import { useOutletContext } from 'react-router-dom';
import Swal from 'sweetalert2';
import cate from '../../data/categories';

const Categories = () => {
    const context = useOutletContext() || {};
    const search = context.search || '';

    // State for Category into LocalStorage
    const [categories, setCategories] = useState(() => {
        try {
            const saved = localStorage.getItem('admin_categories');
            return saved ? JSON.parse(saved) : cate;
        } catch (error) {
            return cate;
        }
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({ name: '', description: '', img: '' });

    useEffect(() => {
        localStorage.setItem('admin_categories', JSON.stringify(categories));
    }, [categories]);

    // Filter Search from navbar
    const filteredCategories = categories.filter(cat =>
        cat.name.toLowerCase().includes(search.toLowerCase())
    );

    // Action Handlers 
    const handleDelete = (categoryToDelete) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `Deleting "${categoryToDelete.name}" will also delete ALL products inside this category!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ef4444',
            cancelButtonColor: '#6b7280',
            confirmButtonText: 'Yes, delete everything!'
        }).then((result) => {
            if (result.isConfirmed) {
                setCategories(prev => prev.filter(cat => cat.id !== categoryToDelete.id));
                try {
                    const savedProducts = JSON.parse(localStorage.getItem('admin_products')) || [];
                    const updatedProducts = savedProducts.filter(product => product.category !== categoryToDelete.name);
                    localStorage.setItem('admin_products', JSON.stringify(updatedProducts));
                } catch (error) {
                    console.error("Failed to delete associated products:", error);
                }

                Swal.fire('Deleted!', `Category and its products have been deleted.`, 'success');
            }
        });
    };

    const openModal = (category = null) => {
        if (category) {
            setEditingId(category.id);
            setFormData({ name: category.name, description: category.description, img: category.img });
        } else {
            setEditingId(null);
            setFormData({ name: '', description: '', img: '' });
        }
        setIsModalOpen(true);
    };

    const handleSave = (e) => {
        e.preventDefault();

        if (editingId) {
            const oldCategory = categories.find(c => c.id === editingId);
            const oldName = oldCategory ? oldCategory.name : null;
            setCategories(prev => prev.map(cat => (cat.id === editingId ? { ...cat, ...formData } : cat)));
            if (oldName && oldName !== formData.name) {
                try {
                    const savedProducts = JSON.parse(localStorage.getItem('admin_products')) || [];

                    const updatedProducts = savedProducts.map(product => {
                        if (product.category === oldName) {
                            return { ...product, category: formData.name }; // change name
                        }
                        return product;
                    });

                    // Save to LocalStorage
                    localStorage.setItem('admin_products', JSON.stringify(updatedProducts));
                } catch (error) {
                    console.error("Failed to update products category:", error);
                }
            }

            Swal.fire('Updated!', 'Category and related products have been updated.', 'success');

        } else {
            // Add New 
            const newCategory = { id: Date.now(), ...formData };
            setCategories(prev => [...prev, newCategory]);
            Swal.fire('Added!', 'New category has been added.', 'success');
        }

        setIsModalOpen(false);
    };

    return (
        <div className="space-y-6 relative">

            {/* Header & Add Button */}
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-extrabold text-[#1B254B] dark:text-white">Categories</h1>
                    <hr className="w-[100px] border-t-4 border-orange-500 mt-2" />
                    <p className="text-gray-500 dark:text-gray-400 mt-2">Manage food menu categories.</p>
                </div>
                <button
                    onClick={() => openModal()}
                    className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-xl font-semibold shadow-sm transition-colors"
                >
                    <FiPlus className="text-xl" />
                    Add Category
                </button>
            </div>

            {/* Table */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden transition-colors">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                <th className="px-6 py-4 font-medium w-24">Image</th>
                                <th className="px-6 py-4 font-medium">Category Name</th>
                                <th className="px-6 py-4 font-medium">Description</th>
                                <th className="px-6 py-4 font-medium text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                            {filteredCategories.length > 0 ? (
                                filteredCategories.map((cat) => (
                                    <tr key={cat.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <img src={cat.img} alt={cat.name} className="w-12 h-12 rounded-lg object-cover shadow-sm border border-gray-100 dark:border-gray-700" />
                                        </td>
                                        <td className="px-6 py-4 font-bold text-gray-900 dark:text-white">{cat.name}</td>
                                        <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{cat.description}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-center gap-2">
                                                <button
                                                    onClick={() => openModal(cat)}
                                                    title="Edit"
                                                    className="p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg transition-colors"
                                                >
                                                    <FiEdit className="text-lg" />
                                                </button>
                                                {/* 🔴 បានកែប្រែកន្លែងបញ្ជូនទិន្នន័យនៅទីនេះ */}
                                                <button
                                                    onClick={() => handleDelete(cat)}
                                                    title="Delete"
                                                    className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors"
                                                >
                                                    <FiTrash2 className="text-lg" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="px-6 py-12 text-center text-gray-500 dark:text-gray-400 text-lg">
                                        No categories found for "{search}"
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add / Edit Modal Form */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-md p-6 shadow-2xl relative">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                        >
                            <FiX className="text-2xl" />
                        </button>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            {editingId ? 'Edit Category' : 'Add New Category'}
                        </h2>

                        <form onSubmit={handleSave} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Category Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none text-gray-900 dark:text-white"
                                    placeholder="e.g. Seafood"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Image URL</label>
                                <input
                                    type="url"
                                    required
                                    value={formData.img}
                                    onChange={(e) => setFormData({ ...formData, img: e.target.value })}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none text-gray-900 dark:text-white"
                                    placeholder="https://..."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
                                <textarea
                                    rows="3"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none text-gray-900 dark:text-white resize-none"
                                    placeholder="Short description..."
                                ></textarea>
                            </div>

                            <div className="mt-6 flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white py-2.5 rounded-xl font-medium transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2.5 rounded-xl font-medium transition-colors"
                                >
                                    {editingId ? 'Save Changes' : 'Add Category'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Categories;