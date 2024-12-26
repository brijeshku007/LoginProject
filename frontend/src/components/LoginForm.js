import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthForm = ({ isRegister }) => {
    const [formData, setFormData] = useState({ name: '', dob: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = isRegister ? 'https://login-project-beta.vercel.app/api/auth/register' : 'https://login-project-beta.vercel.app/api/auth/login';
        const payload = isRegister ? formData : { email: formData.email, password: formData.password };

        try {
            const response = await axios.post(url, payload);
            const { token, user } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/dashboard');
            alert(`${isRegister ? 'Registration' : 'Login'} Successful`);
        } catch (error) {
            console.error(error);
            alert(`${isRegister ? 'Registration' : 'Login'} Failed`);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-500">
            <div className="w-full max-w-md bg-black text-white shadow-lg rounded-lg p-6 md:p-8">
                <h2 className="text-3xl font-bold text-center mb-6">
                    {isRegister ? 'Create Account' : 'Welcome Back!'}
                </h2>
                <div className='flex justify-center items-center'>
                <img src="https://th.bing.com/th/id/R.c3631c652abe1185b1874da24af0b7c7?rik=XBP%2fc%2fsPy7r3HQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-user-icon-circled-user-icon-2240.png&ehk=z4ciEVsNoCZtWiFvQQ0k4C3KTQ6wt%2biSysxPKZHGrCc%3d&risl=&pid=ImgRaw&r=0" alt="UserIcon" className="w-20 h-20 rounded-full mr-50 mb-6"/>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {isRegister && (
                        <>
                            <input
                                type="text"
                                placeholder="Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="date"
                                placeholder="Date of Birth"
                                value={formData.dob}
                                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </>
                    )}
                    <input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        {isRegister ? 'Register' : 'Login'}
                    </button>
                </form>
                <p className="text-center text-gray-400 mt-4">
                    {isRegister ? 'Already a user?' : 'New here?'}{' '}
                    <button
                        onClick={() => navigate(isRegister ? '/login' : '/register')}
                        className="text-blue-400 hover:underline"
                    >
                        {isRegister ? 'Login' : 'Create an account'}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default AuthForm;
