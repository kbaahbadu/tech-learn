
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
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
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
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
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmailNotification = async (email: string, name: string) => {
    // Simulate email notification
    console.log(`Welcome email notification sent to: ${email} for ${name}`);
    // In a real app, this would call your email service
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate registration process
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Send welcome email notification
      await sendEmailNotification(formData.email, formData.fullName);
      
      setRegistrationSuccess(true);
      
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

  const handleOAuthRegister = async (provider: 'google' | 'github') => {
    setIsLoading(true);
    
    try {
      // Simulate OAuth registration
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Send email notification for OAuth registration
      await sendEmailNotification('oauth-user@example.com', 'OAuth User');
      
      setRegistrationSuccess(true);
      
      setTimeout(() => {
        router.push('/learning');
      }, 2000);
      
    } catch (error) {
      setErrors({ general: `${provider} registration failed. Please try again.` });
    } finally {
      setIsLoading(false);
    }
  };

  if (registrationSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center p-6">
        <div className="text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <i className="ri-check-line text-3xl text-white w-8 h-8 flex items-center justify-center"></i>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Registration Successful!</h2>
          <p className="text-gray-300 mb-4">Welcome email sent successfully.</p>
          <p className="text-purple-400">Redirecting to your learning dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center p-6 relative overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20registration%20interface%20with%20purple%20and%20violet%20gradients%2C%20futuristic%20signup%20form%20design%2C%20glowing%20elements%20and%20neon%20accents%2C%20professional%20tech%20workspace%20with%20holographic%20displays%20and%20purple%20ambient%20lighting&width=1920&height=1080&seq=register001&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gray-900/80"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-violet-900/30"></div>
      
      <div className="relative w-full max-w-md">
        <div className="glass-effect rounded-3xl p-8 shadow-2xl animate-slideUp">
          <div className="text-center mb-8 animate-fadeIn">
            <Link href="/" className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center shadow-lg">
                <div className="w-6 h-6 border-2 border-white rounded transform rotate-45"></div>
              </div>
              <span className="text-2xl font-bold text-white">TechLearn</span>
            </Link>
            <h1 className="text-2xl font-bold text-white mb-2">Join Our Community</h1>
            <p className="text-gray-400">Start your tech learning journey today</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6" id="register-form">
            {errors.general && (
              <div className="bg-red-500/20 border border-red-500/30 text-red-300 px-4 py-3 rounded-xl text-sm animate-slideInLeft">
                {errors.general}
              </div>
            )}

            <div className="animate-slideInLeft" style={{animationDelay: '0.1s'}}>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <div className="relative">
                <i className="ri-user-line absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5 flex items-center justify-center"></i>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-4 py-3 bg-gray-800/50 border ${
                    errors.fullName ? 'border-red-500' : 'border-purple-500/30'
                  } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300`}
                  placeholder="Enter your full name"
                />
              </div>
              {errors.fullName && (
                <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>
              )}
            </div>

            <div className="animate-slideInLeft" style={{animationDelay: '0.2s'}}>
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

            <div className="animate-slideInLeft" style={{animationDelay: '0.3s'}}>
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
                  placeholder="Create a password"
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

            <div className="animate-slideInLeft" style={{animationDelay: '0.4s'}}>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <i className="ri-lock-line absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5 flex items-center justify-center"></i>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-12 py-3 bg-gray-800/50 border ${
                    errors.confirmPassword ? 'border-red-500' : 'border-purple-500/30'
                  } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300`}
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-purple-300 transition-colors cursor-pointer w-5 h-5 flex items-center justify-center"
                >
                  <i className={showConfirmPassword ? "ri-eye-off-line" : "ri-eye-line"}></i>
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-violet-700 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap animate-slideInLeft"
              style={{animationDelay: '0.5s'}}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                  Creating Account...
                </div>
              ) : (
                'Create Account'
              )}
            </button>
          </form>

          <div className="mt-8 text-center animate-fadeIn" style={{animationDelay: '0.6s'}}>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-purple-500/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-gray-900/50 px-4 text-gray-400">Or sign up with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button 
                type="button"
                onClick={() => handleOAuthRegister('google')}
                disabled={isLoading}
                className="flex items-center justify-center px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300 cursor-pointer hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <i className="ri-google-fill text-white mr-2"></i>
                <span className="text-white text-sm">Google</span>
              </button>
              <button 
                type="button"
                onClick={() => handleOAuthRegister('github')}
                disabled={isLoading}
                className="flex items-center justify-center px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300 cursor-pointer hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <i className="ri-github-fill text-white mr-2"></i>
                <span className="text-white text-sm">GitHub</span>
              </button>
            </div>
          </div>

          <div className="mt-8 text-center animate-fadeIn" style={{animationDelay: '0.7s'}}>
            <p className="text-gray-400 text-sm">
              Already have an account?{' '}
              <Link href="/login" className="text-purple-400 hover:text-purple-300 transition-colors cursor-pointer font-medium">
                Sign in here
              </Link>
            </p>
          </div>

          <div className="mt-6 text-center animate-fadeIn" style={{animationDelay: '0.8s'}}>
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
