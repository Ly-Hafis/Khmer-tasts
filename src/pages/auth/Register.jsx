import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = (e) => {
        e.preventDefault();

        // Password check
        if (formData.password !== formData.confirmPassword) {
            Swal.fire('Error', 'Passwords do not match!', 'error');
            return;
        }

        // Get old data LocalStorage
        const existingUsers = JSON.parse(localStorage.getItem('customer_users')) || [];

        // Check email if they have used
        const emailExists = existingUsers.some(user => user.email === formData.email);
        if (emailExists) {
            Swal.fire('Error', 'Email already exists. Please login.', 'error');
            return;
        }

        // create new acc
        const newUser = {
            id: Date.now(),
            name: formData.name,
            email: formData.email,
            password: formData.password
        };

        // Save to LocalStorage
        localStorage.setItem('customer_users', JSON.stringify([...existingUsers, newUser]));

        Swal.fire({ title: 'Success!', text: 'Account created successfully. Please login.', icon: 'success' });
        navigate('/login'); // to login
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 w-full max-w-md animate-fade-in-up">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Create Account</h2>
                <p className="text-gray-500">Join us to order delicious food</p>
            </div>

            <form onSubmit={handleRegister} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                        type="text" name="name" required value={formData.name} onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                        placeholder="John Doe"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                        type="email" name="email" required value={formData.email} onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                        placeholder="example@email.com"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                        type="password" name="password" required value={formData.password} onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                        placeholder="••••••••"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                    <input
                        type="password" name="confirmPassword" required value={formData.confirmPassword} onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                        placeholder="••••••••"
                    />
                </div>
                <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-bold text-lg shadow-md shadow-orange-500/30 transition-all mt-4">
                    Register
                </button>
            </form>

            <p className="mt-6 text-center text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-orange-500 font-bold hover:underline">
                    Sign In
                </Link>
            </p>
        </div>
    );
};

export default Register;