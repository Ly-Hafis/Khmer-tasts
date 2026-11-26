import { Link, useLocation } from 'react-router-dom';
import { FiGrid, FiShoppingBag, FiList, FiBox, FiUsers, FiStar, FiSettings } from 'react-icons/fi';
import logo from "../assets/Image/Logo.jpg";

const AdminSidebar = ({ isOpen }) => {
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
    <div className={` ${isOpen ? 'w-64 px-4 border-r-2 border-gray-100 dark:border-gray-500' : 'w-0 px-0 border-0'}
      transition-all duration-200
     bg-blue-950 h-screen flex flex-col dark:bg-gray-900`}>
      {/*Logo */}
      <div className="h-[150px] flex-col items-center px-8">
        <div className='w-[120px] m-auto'>
          <img src={logo} alt="" className='w-[100%]' />
        </div>
        <h1 className="text-2xl font-bold text-white text-center">Khmer<span className=' text-orange-500'>Food</span> Admin</h1>
      </div>

      {/*Menu */}
      <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                  ? 'bg-orange-500 text-white font-medium'
                  : 'text-white dark:text-white hover:bg-gray-50 hover:text-orange-500' // ពណ៌ធម្មតា
                }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-gray-400 dark:border-gray-400">
        <p className="text-xs text-center text-gray-400 dark:text-gray-500">
          KhmerFood Admin v1.0.0
        </p>
      </div>
    </div>
  );
};

export default AdminSidebar;