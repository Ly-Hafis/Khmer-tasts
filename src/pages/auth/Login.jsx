import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Check is Admin or not
    if (email === 'admin@gmail.com' && password === 'admin123') {
      localStorage.setItem('admin_token', 'admin_logged_in');
      localStorage.setItem('user_role', 'admin');
      Swal.fire({ title: 'Welcome Admin!', text: 'Login successful', icon: 'success', timer: 1500, showConfirmButton: false });
      navigate('/admin'); 
      return;
    }

    // Check is Customer or not
    const savedUsers = JSON.parse(localStorage.getItem('customer_users')) || [];
    const customer = savedUsers.find(user => user.email === email && user.password === password);

    if (customer) {
      localStorage.setItem('user_token', 'customer_logged_in');
      localStorage.setItem('user_role', 'customer');
      localStorage.setItem('current_user', JSON.stringify(customer));
      Swal.fire({ title: 'Welcome back!', text: 'Login successful', icon: 'success', timer: 1500, showConfirmButton: false });
      navigate('/');
    } else {
      Swal.fire('Error', 'Invalid Email or Password', 'error');
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 w-full max-w-md animate-fade-in-up">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Welcome Back</h2>
        <p className="text-gray-500">Please sign in to your account</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input 
            type="email" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all" 
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input 
            type="password" 
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all" 
            placeholder="••••••••"
          />
        </div>
        <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-bold text-lg shadow-md shadow-orange-500/30 transition-all mt-4">
          Sign In
        </button>
      </form>

      <p className="mt-8 text-center text-gray-600">
        Don't have an account?{' '}
        <Link to="/register" className="text-orange-500 font-bold hover:underline">
          Register here
        </Link>
      </p>
    </div>
  );
};

export default Login;