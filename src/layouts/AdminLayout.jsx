import { Outlet } from 'react-router-dom';
import AdminSidebar from "../pages/admin/AdminSidebar";
import AdminNavbar from '../pages/admin/AdminNavbar';

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-[#F8F9FA] dark:bg-gray-900 text-gray-900 dark:text-white"> 
      
      <AdminSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminNavbar />
        
        {/* ទីតាំង Content របស់ Page នីមួយៗ (Products, Orders...) នឹងលោតមកទីនេះ */}
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet /> 
        </main>
      </div>

    </div>
  );
};

export default AdminLayout;