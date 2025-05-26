import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Mail, Lock, User, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useAuth } from '../context/AuthContext';

interface LoginFormData {
  email: string;
  password: string;
}

interface RegisterFormData extends LoginFormData {
  firstName: string;
  lastName: string;
  confirmPassword: string;
}

export const LoginPage: React.FC = () => {
  const { login, error, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as any)?.from?.pathname || '/account';
  
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
  
  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data.email, data.password);
      navigate(from, { replace: true });
    } catch (err) {
      // Error is handled in auth context
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div>
          <Link to="/" className="flex items-center text-primary-600 hover:text-primary-700 mb-6">
            <ArrowLeft size={16} className="mr-1" />
            Back to Home
          </Link>
          
          <h2 className="text-center text-3xl font-bold text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link to="/register" className="font-medium text-primary-600 hover:text-primary-500">
              create a new account
            </Link>
          </p>
        </div>
        
        {error && (
          <div className="p-4 bg-error-50 border-l-4 border-error-500 text-error-700">
            {error}
          </div>
        )}
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <Input
              label="Email Address"
              type="email"
              autoComplete="email"
              leftIcon={<Mail size={18} />}
              error={errors.email?.message}
              fullWidth
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            
            <Input
              label="Password"
              type="password"
              autoComplete="current-password"
              leftIcon={<Lock size={18} />}
              error={errors.password?.message}
              fullWidth
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
            
            <div className="text-sm">
              <a href="#" className="font-medium text-primary-600 hover:text-primary-500">
                Forgot your password?
              </a>
            </div>
          </div>
          
          <Button
            type="submit"
            fullWidth
            size="lg"
            isLoading={isLoading}
          >
            Sign in
          </Button>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Demo Credentials</span>
              </div>
            </div>
            <div className="mt-4 text-center text-sm text-gray-600">
              <p>Email: user@example.com</p>
              <p>Password: password</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export const RegisterPage: React.FC = () => {
  const { register: registerUser, error, isLoading } = useAuth();
  const navigate = useNavigate();
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterFormData>();
  const password = watch('password');
  
  const onSubmit = async (data: RegisterFormData) => {
    try {
      await registerUser(data.email, data.password, data.firstName, data.lastName);
      navigate('/account', { replace: true });
    } catch (err) {
      // Error is handled in auth context
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div>
          <Link to="/" className="flex items-center text-primary-600 hover:text-primary-700 mb-6">
            <ArrowLeft size={16} className="mr-1" />
            Back to Home
          </Link>
          
          <h2 className="text-center text-3xl font-bold text-gray-900">Create your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link to="/login" className="font-medium text-primary-600 hover:text-primary-500">
              sign in to existing account
            </Link>
          </p>
        </div>
        
        {error && (
          <div className="p-4 bg-error-50 border-l-4 border-error-500 text-error-700">
            {error}
          </div>
        )}
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="First Name"
                autoComplete="given-name"
                leftIcon={<User size={18} />}
                error={errors.firstName?.message}
                fullWidth
                {...register('firstName', {
                  required: 'First name is required',
                })}
              />
              
              <Input
                label="Last Name"
                autoComplete="family-name"
                leftIcon={<User size={18} />}
                error={errors.lastName?.message}
                fullWidth
                {...register('lastName', {
                  required: 'Last name is required',
                })}
              />
            </div>
            
            <Input
              label="Email Address"
              type="email"
              autoComplete="email"
              leftIcon={<Mail size={18} />}
              error={errors.email?.message}
              fullWidth
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            
            <Input
              label="Password"
              type="password"
              autoComplete="new-password"
              leftIcon={<Lock size={18} />}
              error={errors.password?.message}
              fullWidth
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters',
                },
              })}
            />
            
            <Input
              label="Confirm Password"
              type="password"
              autoComplete="new-password"
              leftIcon={<Lock size={18} />}
              error={errors.confirmPassword?.message}
              fullWidth
              {...register('confirmPassword', {
                required: 'Please confirm your password',
                validate: value => value === password || 'Passwords do not match',
              })}
            />
          </div>
          
          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              required
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              I agree to the{' '}
              <a href="#" className="font-medium text-primary-600 hover:text-primary-500">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="font-medium text-primary-600 hover:text-primary-500">
                Privacy Policy
              </a>
            </label>
          </div>
          
          <Button
            type="submit"
            fullWidth
            size="lg"
            isLoading={isLoading}
          >
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
};