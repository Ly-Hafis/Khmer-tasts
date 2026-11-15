import { useState, useEffect } from 'react';
import { FiEdit, FiTrash2, FiPlus, FiBox, FiX } from 'react-icons/fi';
import { useOutletContext } from 'react-router-dom';
import { initialProducts } from '../../data/products';
import Swal from "sweetalert2";

const Products = () => {
  const context = useOutletContext() || {};
  const search = context.search || '';
  const [products, setProducts] = useState(() => {
    try {
      const savedProducts = localStorage.getItem('admin_products');
      return savedProducts ? JSON.parse(savedProducts) : initialProducts;
    } catch (error) {
      console.error("Local storage error:", error);
      return initialProducts;
    }
  });

  useEffect(() => {
    localStorage.setItem('admin_products', JSON.stringify(products));
  }, [products]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: 'Main Course',
    price: '',
    stock: '',
    status: 'Active',
    image: '',
    description: ''
  });


  // Add Product
  const handleAddProduct = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      name: formData.name,
      category: formData.category,
      price: formData.price.includes('$')
        ? formData.price
        : `$${formData.price}`,
      stock: parseInt(formData.stock) || 0,
      status: formData.status,
      image: formData.image || 'https://via.placeholder.com/500',
      description: formData.description
    };

    setProducts([newProduct, ...products]);

    setIsModalOpen(false);

    setFormData({
      name: '',
      category: 'Main Course',
      price: '',
      stock: '',
      status: 'Active',
      image: '',
      description: ''
    });

    // Success Notification
    Swal.fire({
      title: "Product Added!",
      text: "Your product has been added successfully.",
      icon: "success",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  // Remove
  const swalWithButtons = Swal.mixin({
    customClass: {
      confirmButton:
        "bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-lg font-medium mx-2",
      cancelButton:
        "bg-gray-500 hover:bg-gray-600 text-white px-5 py-2.5 rounded-lg font-medium mx-2",
    },
    buttonsStyling: false,
  });
  const handleDelete = (id) => {
    swalWithButtons.fire({
      width: "450px",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then((result) => {

      if (result.isConfirmed) {
        const updatedProducts = products.filter(
          (product) => product.id !== id
        );

        setProducts(updatedProducts);

        swalWithButtons.fire({
          title: "Deleted!",
          text: "Product has been deleted.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });

      } else if (result.dismiss === Swal.DismissReason.cancel) {

        swalWithButtons.fire({
          title: "Cancelled",
          text: "Your product is safe!",
          icon: "error",
          timer: 1500,
          showConfirmButton: false,
        });

      }
    });
  };

  const filteredProducts = (products || []).filter(product =>
    product?.name?.toLowerCase().includes(search.toLowerCase()) ||
    product?.category?.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="space-y-6 relative">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-[#1B254B] dark:text-white">Products Menu</h1>
          <hr className="w-[100px] border-t-4 border-orange-500" />
          <p className="text-gray-500 dark:text-gray-400 mt-1 transition-colors">Manage your restaurant menu items here.</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 transition-colors shadow-sm"
        >
          <FiPlus className="text-lg" />
          <span className="font-medium">Add Product</span>
        </button>
      </div>

      {/* Card Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col">

              <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold shadow-sm backdrop-blur-md ${product.status === 'Active' ? 'bg-green-500/90 text-white' : 'bg-red-500/90 text-white'}`}>
                  {product.status}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider mb-1">{product.category}</span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">{product.name}</h3>

                <div className="flex items-center justify-between mt-auto mb-4">
                  <span className="text-xl font-extrabold text-gray-900 dark:text-white">{product.price}</span>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <FiBox className="mr-1" /> {product.stock} in stock
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-2 border-t border-gray-100 dark:border-gray-700 pt-4">
                  <button className="flex items-center justify-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-500/10">
                    <FiEdit /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="flex items-center justify-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10"
                  >
                    <FiTrash2 /> Delete
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-12 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-lg">No products found for "{search}"</p>
        </div>
      )}

      {/* Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <div className="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-2xl shadow-xl overflow-hidden animate-fade-in-up">

            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">Add New Product</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-red-500 transition-colors">
                <FiX className="text-2xl" />
              </button>
            </div>

            <form onSubmit={handleAddProduct} className="p-6 space-y-4">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Product Name <span className="text-red-500">*</span></label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="e.g. Fish Amok" className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl outline-none focus:border-orange-500 dark:text-white transition-colors" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Category <span className="text-red-500">*</span></label>
                  <select name="category" value={formData.category} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl outline-none focus:border-orange-500 dark:text-white transition-colors">
                    <option value="Main Course">Main Course</option>
                    <option value="Appetizer">Appetizer</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Beverage">Beverage</option>
                    <option value="Dessert">Dessert</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Price ($) <span className="text-red-500">*</span></label>
                  <input required type="text" name="price" value={formData.price} onChange={handleChange} placeholder="e.g. 5.50" className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl outline-none focus:border-orange-500 dark:text-white transition-colors" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Stock</label>
                  <input type="number" name="stock" value={formData.stock} onChange={handleChange} placeholder="e.g. 20" className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl outline-none focus:border-orange-500 dark:text-white transition-colors" />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Image URL</label>
                  <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="https://..." className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl outline-none focus:border-orange-500 dark:text-white transition-colors" />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
                  <textarea name="description" value={formData.description} onChange={handleChange} rows="3" placeholder="Write something about this product..." className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl outline-none focus:border-orange-500 dark:text-white transition-colors resize-none"></textarea>
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-5 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl font-medium transition-colors">
                  Cancel
                </button>
                <button type="submit" className="px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-medium shadow-sm transition-colors">
                  Save Product
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Products;