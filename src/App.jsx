import { Routes, Route } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import Products from './pages/admin/Products';
import Orders from './pages/admin/Orders';

function App() {
  return (
    <Routes>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />

        <Route path="orders" element={<Orders />} />
        <Route path="products" element={<Products />} />

      </Route>
    </Routes>
  );
}

export default App;