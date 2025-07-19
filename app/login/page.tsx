
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [showPassword, setShowPassword] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+.\S+/.test(formData.email)) {
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
    // Simulate email notification
    console.log(`Email notification sent to: ${email}`);
    // In a real app, this would call your email service
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate login process
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Send email notification
      await sendEmailNotification(formData.email);
      
      setLoginSuccess(true);
      
      // Redirect to learning page after success
      setTimeout(() => {
        router.push('/learning');
      }, 2000);
      
    } catch (error) {
      setErrors({ general: 'Network error. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleOAuthLogin = async (provider: 'google' | 'github') => {
    setIsLoading(true);
    
    try {
      // Simulate OAuth login
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Send email notification for OAuth login
      await sendEmailNotification('oauth-user@example.com');
      
      setLoginSuccess(true);
      
      setTimeout(() => {
        router.push('/learning');
      }, 2000);
      
    } catch (error) {
      setErrors({ general: `${provider} login failed. Please try again.` });
    } finally {
      setIsLoading(false);
    }
  };

  if (loginSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center p-6">
        <div className="text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <i className="ri-check-line text-3xl text-white w-8 h-8 flex items-center justify-center"></i>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Login Successful!</h2>
          <p className="text-gray-300 mb-4">Email notification sent successfully.</p>
          <p className="text-purple-400">Redirecting to your learning dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center p-6 relative overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Dark%20futuristic%20login%20interface%20with%20purple%20and%20violet%20neon%20lights%2C%20cyberpunk%20aesthetic%20workspace%2C%20glowing%20screens%20and%20holographic%20elements%2C%20professional%20tech%20environment%20with%20purple%20ambient%20lighting&width=1920&height=1080&seq=login001&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gray-900/80"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-violet-900/30">
      
      </div>
      
      <div className="relative w-full max-w-md">
        <div className="glass-effect rounded-3xl p-8 shadow-2xl animate-slideUp">
          <div className="text-center mb-8 animate-fadeIn">
            <Link href="/" className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center shadow-lg">
                <div className="w-6 h-6 border-2 border-white rounded transform rotate-45"></div>
              </div>
              <span className="text-2xl font-bold text-white">TechLearn</span>
            </Link>
            <h1 className="text-2xl font-bold text-white mb-2">Welcome Back!</h1>
            <p className="text-gray-400">Sign in to continue your learning journey</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6" id="login-form">
            {errors.general && (
              <div className="bg-red-500/20 border border-red-500/30 text-red-300 px-4 py-3 rounded-xl text-sm animate-slideInLeft">
                {errors.general}
              </div>
            )}

            <div className="animate-slideInLeft" style={{animationDelay: '0.1s'}}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <i className="ri-mail-line absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5 flex items-center justify-center"></i>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-4 py-3 bg-gray-800/50 border ${
                    errors.email ? 'border-red-500' : 'border-purple-500/30'
                  } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300`}
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="animate-slideInLeft" style={{animationDelay: '0.2s'}}>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <i className="ri-lock-line absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5 flex items-center justify-center"></i>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-12 py-3 bg-gray-800/50 border ${
                    errors.password ? 'border-red-500' : 'border-purple-500/30'
                  } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-purple-300 transition-colors cursor-pointer w-5 h-5 flex items-center justify-center"
                >
                  <i className={showPassword ? "ri-eye-off-line" : "ri-eye-line"}></i>
                </button>
              </div>
              {errors.password && (
                <p className="text-red-400 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <div className="flex items-center justify-between animate-slideInLeft" style={{animationDelay: '0.3s'}}>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                />
                <div className="w-4 h-4 bg-gray-800 border border-purple-500/30 rounded flex items-center justify-center mr-3">
                  <i className="ri-check-line text-purple-400 text-xs opacity-0"></i>
                </div>
                <span className="text-sm text-gray-400">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-sm text-purple-400 hover:text-purple-300 transition-colors cursor-pointer">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-violet-700 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap animate-slideInLeft"
              style={{animationDelay: '0.4s'}}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                  Signing In...
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="mt-8 text-center animate-fadeIn" style={{animationDelay: '0.5s'}}>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-purple-500/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-gray-900/50 px-4 text-gray-400">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button 
                type="button"
                onClick={() => handleOAuthLogin('google')}
                disabled={isLoading}
                className="flex items-center justify-center px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300 cursor-pointer hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <i className="ri-google-fill text-white mr-2"></i>
                <span className="text-white text-sm">Google</span>
              </button>
              <button 
                type="button"
                onClick={() => handleOAuthLogin('github')}
                disabled={isLoading}
                className="flex items-center justify-center px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300 cursor-pointer hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <i className="ri-github-fill text-white mr-2"></i>
                <span className="text-white text-sm">GitHub</span>
              </button>
            </div>
          </div>

          <div className="mt-8 text-center animate-fadeIn" style={{animationDelay: '0.6s'}}>
            <p className="text-gray-400 text-sm">
              Don't have an account?{' '}
              <Link href="/register" className="text-purple-400 hover:text-purple-300 transition-colors cursor-pointer font-medium">
                Sign up for free
              </Link>
            </p>
          </div>

          <div className="mt-6 text-center animate-fadeIn" style={{animationDelay: '0.7s'}}>
            <Link href="/" className="text-purple-400 hover:text-purple-300 transition-colors cursor-pointer text-sm flex items-center justify-center">
              <i className="ri-arrow-left-line mr-2 w-4 h-4 flex items-center justify-center"></i>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
