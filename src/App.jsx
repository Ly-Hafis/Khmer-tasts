import { Routes, Route } from 'react-router-dom';

//Layouts
import CustomerLayout from './layouts/CustomerLayout';
import AuthLayout from './layouts/AuthLayout';
import AdminLayout from './layouts/AdminLayout';

// Pages
import Menu from './pages/customer/Menu';
import FoodDetail from './pages/customer/FoodDetail';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/admin/Dashboard';
import Products from './pages/admin/Products';
import Orders from './pages/admin/Orders';
import Categories from './pages/admin/Categories';

//Security Component
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Routes>

      {/* Customer*/}
      <Route element={<CustomerLayout />}>
        <Route path="/" element={<Menu />} />
        <Route path="/food/:id" element={<FoodDetail />} />
      </Route>

      {/* --- Login and Register --- */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* ---Admin have ProtectedRoute*/}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="products" element={<Products />} />
        <Route path="categories" element={<Categories />} />
      </Route>

    </Routes>
  );
}

export default App;