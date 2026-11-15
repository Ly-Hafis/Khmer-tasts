import { Outlet } from 'react-router-dom';
import AdminSidebar from "../pages/admin/AdminSidebar";
import AdminNavbar from '../pages/admin/AdminNavbar';
import { useState, useEffect } from 'react';

const AdminLayout = () => {

  const [search, setSearch] = useState('');

  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    const saved = localStorage.getItem('isSidebarOpen');
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem('isSidebarOpen', JSON.stringify(isSidebarOpen));
  }, [isSidebarOpen]);

  // Dark mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex h-screen dark:bg-gray-800 text-gray-900 dark:text-white">

      <AdminSidebar
        isOpen={isSidebarOpen}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminNavbar
          search={search}
          setSearch={setSearch}
          onMenuClick={toggleSidebar}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />

        <main className="flex-1 overflow-y-auto p-8 bg-[url(/src/assets/Image/Background.jpg)] dark:bg-[url(/src/assets/Image/Background_Dark.jpg)] bg-cover bg-center">
          <Outlet context={{ search, isDarkMode, setIsDarkMode }} />
        </main>
      </div>

    </div>
  );
};

export default AdminLayout;