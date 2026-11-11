import { Link, useLocation } from 'react-router-dom';
import { FiGrid, FiShoppingBag, FiList, FiBox, FiUsers, FiStar, FiSettings } from 'react-icons/fi';

const AdminSidebar = () => {
  const location = useLocation();

  // Menu List for admin
  const menuItems = [
    { name: 'Dashboard', path: '/admin', icon: <FiGrid /> },
    { name: 'Orders', path: '/admin/orders', icon: <FiShoppingBag /> },
    { name: 'Products', path: '/admin/products', icon: <FiBox /> },
    { name: 'Categories', path: '/admin/categories', icon: <FiList /> },
    { name: 'Customers', path: '/admin/customers', icon: <FiUsers /> },
    { name: 'Reviews', path: '/admin/reviews', icon: <FiStar /> },
    { name: 'Settings', path: '/admin/settings', icon: <FiSettings /> },
  ];

  return (
    <div className="w-64 bg-white h-screen border-r border-gray-100 flex flex-col dark:bg-gray-700">
      {/*Logo */}
      <div className="h-20 flex items-center px-8 border-b border-gray-50">
        <h1 className="text-2xl font-bold text-orange-500">KhmerFood Admin</h1>
      </div>

      {/*Menu */}
      <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'bg-orange-100 text-orange-600 font-medium'
                  : 'text-gray-500 dark:text-white hover:bg-gray-50 hover:text-orange-500' // ពណ៌ធម្មតា
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default AdminSidebar;