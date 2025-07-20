"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay
    }
  }
});

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showPassword, setShowPassword] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmailNotification = async (email: string) => {
    console.log(`Email notification sent to: ${email}`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      await sendEmailNotification(formData.email);
      setLoginSuccess(true);
      setTimeout(() => router.push('/learning'), 2000);
    } catch (error) {
      setErrors({ general: 'Network error. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleOAuthLogin = async (provider: 'google' | 'github') => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      await sendEmailNotification('oauth-user@example.com');
      setLoginSuccess(true);
      setTimeout(() => router.push('/learning'), 2000);
    } catch (error) {
      setErrors({ general: `${provider} login failed. Please try again.` });
    } finally {
      setIsLoading(false);
    }
  };

  if (loginSuccess) {
    return (
      <motion.div
        className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center p-6"
        initial="hidden"
        animate="visible"
        variants={fadeInUp()}
        viewport={{ once: false }}
      >
        <div className="text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <i className="ri-check-line text-3xl text-white"></i>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Login Successful!</h2>
          <p className="text-gray-300 mb-4">Email notification sent successfully.</p>
          <p className="text-purple-400">Redirecting to your learning dashboard...</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp()}
      viewport={{ once: false }}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center p-6 relative overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Dark%20futuristic%20login%20interface%20with%20purple%20and%20violet%20neon%20lights%2C%20cyberpunk%20aesthetic%20workspace%2C%20glowing%20screens%20and%20holographic%20elements%2C%20professional%20tech%20environment%20with%20purple%20ambient%20lighting&width=1920&height=1080&seq=login001&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <form onSubmit={handleSubmit} className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 max-w-md w-full shadow-xl">
        <h1 className="text-2xl font-semibold text-white mb-6 text-center">Sign In</h1>

        {errors.general && <p className="text-red-500 text-sm mb-4">{errors.general}</p>}

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm text-white mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm text-white mb-1">Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
        </div>

        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center text-white text-sm">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(prev => !prev)}
              className="mr-2"
            />
            Show Password
          </label>
          <Link href="/forgot-password" className="text-sm text-purple-300 hover:text-purple-500">Forgot password?</Link>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded transition-colors duration-300"
        >
          {isLoading ? 'Signing in...' : 'Sign In'}
        </button>

        <div className="text-center mt-6 text-white text-sm">
          Don’t have an account?
          <Link href="/register" className="text-purple-300 hover:text-purple-500 ml-1">Register</Link>
        </div>
      </form>
    </motion.div>
  );
} 
