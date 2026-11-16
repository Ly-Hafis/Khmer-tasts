import { Outlet } from 'react-router-dom';
// ប្រសិនបើអ្នកមាន Navbar ឬ Footer សម្រាប់ Customer អាច Import វានៅទីនេះបាន
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

const CustomerLayout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      
      <main className="min-h-screen">
        {/* Outlet គឺសម្រាប់បង្ហាញទំព័រ Menu និង FoodDetail នៅទីនេះ */}
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default CustomerLayout;