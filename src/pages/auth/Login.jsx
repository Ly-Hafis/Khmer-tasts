import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // For password
  useEffect(() => {
    if (!localStorage.getItem('admin_credentials')) {
      const defaultAdmin = {
        email: 'lyhafis037@gmail.com',
        password: 'admin123',
      };
      localStorage.setItem('admin_credentials', JSON.stringify(defaultAdmin));
    }
  }, []);

  // Login Handle
  const handleLogin = (e) => {
    e.preventDefault();

    const adminData = JSON.parse(localStorage.getItem('admin_credentials'));
    if (adminData && email === adminData.email && password === adminData.password) {
      localStorage.setItem('admin_token', 'admin_logged_in');
      localStorage.setItem('user_role', 'admin');
      Swal.fire({
        title: 'Welcome Admin!',
        text: 'Login successful',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
      });
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

  // Google handle
  const handleGoogleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    console.log("Google User Info:", decoded);

    const adminEmail = "lyhafis037@gmail.com";

    if (decoded.email === adminEmail) {
      // if Admin
      localStorage.setItem('admin_token', 'admin_logged_in');
      localStorage.setItem('user_role', 'admin');

      Swal.fire({ title: 'Welcome Admin!', text: 'Google Login successful', icon: 'success', timer: 1500, showConfirmButton: false });
      navigate('/admin'); // to Dashboard

    } else {
      // if Customer 
      const googleUser = {
        id: decoded.sub,
        name: decoded.name,
        email: decoded.email,
        picture: decoded.picture
      };

      localStorage.setItem('user_token', 'google_logged_in');
      localStorage.setItem('user_role', 'customer');
      localStorage.setItem('current_user', JSON.stringify(googleUser));

      Swal.fire({ title: 'Welcome!', text: 'Logged in with Google', icon: 'success', timer: 1500, showConfirmButton: false });
      navigate('/'); // to Customer
    }
  };

  const handleGoogleError = () => {
    Swal.fire('Error', 'Google Login Failed', 'error');
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
      <div className="mt-6 flex items-center justify-between">
        <span className="border-b w-1/5 lg:w-1/4"></span>
        <span className="text-xs text-center text-gray-500 uppercase">or login with</span>
        <span className="border-b w-1/5 lg:w-1/4"></span>
      </div>

      {/* Google Login */}
      <div className="mt-6 flex justify-center">
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleError}
          useOneTap
        />
      </div>

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