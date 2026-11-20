import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
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
import Customers from './pages/admin/Customers';

//Security Component
import ProtectedRoute from './components/ProtectedRoute';
import Reviews from './pages/admin/Reviews';
import Settings from './pages/admin/Settings';
import Card from './pages/customer/Card';
import Checkout from './pages/customer/Checkout';
import MyOrders from './pages/customer/MyOrders';
import OrderSuccess from './pages/customer/OrderSuccess';

function App() {
  return (
    <CartProvider>
      <Routes>

        {/* Customer*/}

        <Route element={<CustomerLayout />}>
          <Route path="/" element={<Menu />} />
          <Route path="/card" element={<Card />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/food/:id" element={<FoodDetail />} />
        </Route>


        {/* Login and Register */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Admin have ProtectedRoute*/}
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
          <Route path="customers" element={<Customers />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="settings" element={<Settings />} />
        </Route>

      </Routes>
    </CartProvider>
  );
}

export default App;