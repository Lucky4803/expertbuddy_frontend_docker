'use client';

import React, { useState } from 'react';
import {
  LogIn,
  User,
  Lock,
  Phone,
  Mail,
  BookOpen,
  GraduationCap
} from 'lucide-react';

const SignInPage = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    subject: '',
    education: ''
  });

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.username && formData.email && formData.password && formData.phone) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setIsSignInOpen(false);
        setFormData({
          username: '',
          email: '',
          password: '',
          phone: '',
          subject: '',
          education: ''
        });
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-4">
      {isSignInOpen ? (
        <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md relative">
          <div className="flex items-center justify-center gap-2 mb-6">
            <BookOpen size={24} className="text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-800">ExpertBuddy</h2>
          </div>
          <h3 className="text-xl text-gray-700 mb-6 text-center">Create your account</h3>
          <form onSubmit={handleSignIn} className="space-y-4">
            {[
              { icon: User, type: 'text', name: 'username', placeholder: 'Full Name' },
              { icon: Mail, type: 'email', name: 'email', placeholder: 'Email Address' },
              { icon: Phone, type: 'tel', name: 'phone', placeholder: 'Phone Number' },
              { icon: BookOpen, type: 'text', name: 'subject', placeholder: 'Subject Expertise' },
              { icon: GraduationCap, type: 'text', name: 'education', placeholder: 'Educational Background' },
              { icon: Lock, type: 'password', name: 'password', placeholder: 'Password' }
            ].map(({ icon: Icon, ...input }) => (
              <div className="relative" key={input.name}>
                <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  {...input}
                  value={formData[input.name as keyof typeof formData]}
                  onChange={(e) =>
                    setFormData({ ...formData, [input.name]: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required={['username', 'email', 'phone', 'password'].includes(input.name)}
                />
              </div>
            ))}
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg mt-6 hover:bg-purple-700 transition-colors font-semibold flex items-center justify-center gap-2"
            >
              <LogIn size={20} />
              Create Account
            </button>
            <p className="text-sm text-gray-600 text-center mt-4">
              Already have an account?{' '}
              <button type="button" className="text-purple-600 hover:text-purple-700 font-semibold">
                Sign in here
              </button>
            </p>
          </form>
          <button
            onClick={() => setIsSignInOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>
      ) : (
        <div className="text-center text-white">
          <h1 className="text-3xl font-bold mb-4">Thank you for registering!</h1>
          <p className="text-lg">You can now log in to your account.</p>
        </div>
      )}

      {showSuccess && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in">
          Account created successfully!
        </div>
      )}
    </div>
  );
};

export default SignInPage;
