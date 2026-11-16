import { useState, useEffect } from 'react';
import { FiEye, FiCheck, FiXCircle, FiX } from 'react-icons/fi';
import { useOutletContext } from 'react-router-dom';
import Swal from 'sweetalert2';
import initialOrders from '../../data/orders';

const Orders = () => {
  const context = useOutletContext() || {};
  const search = context.search || '';
  const [activeTab, setActiveTab] = useState('All Orders');

  // Order State (LocalStorage)
  const [orders, setOrders] = useState(() => {
    try {
      const savedOrders = localStorage.getItem('admin_orders');
      return savedOrders ? JSON.parse(savedOrders) : initialOrders;
    } catch (error) {
      console.error("Local storage error:", error);
      return initialOrders;
    }
  });

  // Modal State
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    localStorage.setItem('admin_orders', JSON.stringify(orders));
  }, [orders]);


  const filteredOrders = (orders || []).filter(order => {
    // Search by ID or Name (from Navbar)
    const matchesSearch =
      order?.id?.toLowerCase().includes(search.toLowerCase()) ||
      order?.customerName?.toLowerCase().includes(search.toLowerCase());

    // Filter by Status Tab
    const matchesTab = activeTab === 'All Orders' || order.status === activeTab;

    return matchesSearch && matchesTab;
  });

  //​ ​Status Color Helper
  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400';
      case 'Preparing': return 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400';
      case 'Completed': return 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400';
      case 'Cancelled': return 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-500/20 dark:text-gray-400';
    }
  };

  //  ACTION HANDLERS 

  const handleMarkCompleted = (id) => {
    Swal.fire({
      title: 'Mark as Completed?',
      text: "Are you sure you want to complete this order?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#10b981', // Tailwind green-500
      cancelButtonColor: '#6b7280',  // Tailwind gray-500
      confirmButtonText: 'Yes, complete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        setOrders(prev => prev.map(order =>
          order.id === id ? { ...order, status: 'Completed' } : order
        ));
        Swal.fire('Completed!', 'Order has been marked as completed.', 'success');
      }
    });
  };

  const handleCancelOrder = (id) => {
    Swal.fire({
      title: 'Cancel Order?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444', // Tailwind red-500
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Yes, cancel it!'
    }).then((result) => {
      if (result.isConfirmed) {
        setOrders(prev => prev.map(order =>
          order.id === id ? { ...order, status: 'Cancelled' } : order
        ));
        Swal.fire('Cancelled!', 'Order has been cancelled.', 'success');
      }
    });
  };

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
  };

  const closeModal = () => {
    setSelectedOrder(null);
  };

  return (
    <div className="space-y-6 relative">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-[#1B254B] dark:text-white">Orders Management</h1>
          <hr className="w-[100px] border-t-4 border-orange-500" />
          <p className="text-gray-500 dark:text-gray-400 mt-1 transition-colors">View and update customer orders.</p>
        </div>
      </div>

      {/*  FILTER BAR  */}
      <div className="p-4 rounded-xl flex flex-wrap gap-4 items-center">
        {/* Status Filter Buttons */}
        <div className="flex flex-wrap gap-3">
          {['All Orders', 'Pending', 'Preparing', 'Completed'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 hover:cursor-pointer ${activeTab === tab
                ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                : 'bg-white dark:bg-[#151928] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-500'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>


      {/* Orders Table */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden transition-colors">
        <div className="overflow-x-auto h-[385px]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                <th className="px-6 py-4 font-medium">Order ID</th>
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Items</th>
                <th className="px-6 py-4 font-medium">Total</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">{order.id}</td>
                    <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{order.customerName}</td>
                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400 text-sm">{order.date}</td>

                    {/* FIXED: Count items safely if it is an array */}
                    <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                      {Array.isArray(order.items) ? order.items.length : order.items} items
                    </td>

                    <td className="px-6 py-4 font-bold text-orange-500">${order.total.toFixed(2)}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          title="View Details"
                          onClick={() => handleViewDetails(order)}
                          className="p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg transition-colors"
                        >
                          <FiEye className="text-lg" />
                        </button>

                        <button
                          title="Mark as Completed"
                          onClick={() => handleMarkCompleted(order.id)}
                          disabled={order.status === 'Completed' || order.status === 'Cancelled'}
                          className={`p-2 rounded-lg transition-colors ${order.status === 'Completed' || order.status === 'Cancelled'
                            ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed'
                            : 'text-gray-500 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-500/10'
                            }`}
                        >
                          <FiCheck className="text-lg" />
                        </button>

                        <button
                          title="Cancel Order"
                          onClick={() => handleCancelOrder(order.id)}
                          disabled={order.status === 'Completed' || order.status === 'Cancelled'}
                          className={`p-2 rounded-lg transition-colors ${order.status === 'Completed' || order.status === 'Cancelled'
                            ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed'
                            : 'text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10'
                            }`}
                        >
                          <FiXCircle className="text-lg" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="px-6 py-12 text-center text-gray-500 dark:text-gray-400 text-lg">
                    No orders found for "{search}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* FIXED: Upgraded Details Modal (Images, Sizes, Spice Levels) */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity">
          <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-md p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
            >
              <FiX className="text-2xl" />
            </button>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Order Details</h2>

            <div className="space-y-4">
              <div className="flex justify-between border-b border-gray-100 dark:border-gray-700 pb-2">
                <span className="text-gray-500 dark:text-gray-400">Order ID</span>
                <span className="font-semibold text-gray-900 dark:text-white">{selectedOrder.id}</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 dark:border-gray-700 pb-2">
                <span className="text-gray-500 dark:text-gray-400">Customer</span>
                <span className="font-medium text-gray-900 dark:text-gray-200">{selectedOrder.customerName}</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 dark:border-gray-700 pb-2">
                <span className="text-gray-500 dark:text-gray-400">Status</span>
                <span className={`px-2 py-0.5 rounded text-xs font-bold ${getStatusColor(selectedOrder.status)}`}>
                  {selectedOrder.status}
                </span>
              </div>

              {/* Order Items List with Image, Size, and Spice */}
              <div className="py-2 border-b border-gray-100 dark:border-gray-700">
                <span className="text-gray-500 dark:text-gray-400 block mb-3 font-medium">Items Ordered:</span>
                <ul className="space-y-3">
                  {Array.isArray(selectedOrder.items) ? (
                    selectedOrder.items.map((item, index) => (
                      <li key={index} className="flex gap-3 items-start bg-gray-50 dark:bg-gray-900/50 p-3 rounded-xl border border-gray-100 dark:border-gray-700/50">
                        {/* Product Image */}
                        {item.img && (
                          <img src={item.img} alt={item.name} className="w-14 h-14 rounded-lg object-cover shadow-sm" />
                        )}

                        {/* Product Details */}
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <span className="text-sm font-bold text-gray-800 dark:text-gray-200">
                              <span className="text-orange-500 mr-1.5">{item.quantity}x</span>
                              {item.name}
                            </span>
                            <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>

                          {/* Variations (Size & Spicy Level) */}
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex flex-wrap gap-2">
                            {item.size && (
                              <span className="bg-white dark:bg-gray-800 px-2 py-0.5 rounded border border-gray-200 dark:border-gray-600">
                                Size: {item.size}
                              </span>
                            )}
                            {item.spicyLevel && (
                              <span className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 px-2 py-0.5 rounded border border-red-100 dark:border-red-800/30">
                                Spicy: {item.spicyLevel}
                              </span>
                            )}
                          </div>
                        </div>
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-500 text-sm">{selectedOrder.items} items (Details unavailable)</li>
                  )}
                </ul>
              </div>

              <div className="flex justify-between pt-2">
                <span className="text-gray-900 dark:text-white font-bold text-lg">Total</span>
                <span className="text-orange-500 font-extrabold text-xl">${selectedOrder.total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <button
                onClick={closeModal}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white py-2.5 rounded-xl font-bold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;