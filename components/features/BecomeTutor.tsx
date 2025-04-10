import React from 'react';
import { DollarSign, Clock, Users } from 'lucide-react';

export function BecomeTutor() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Join Our Teaching Community</h2>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <DollarSign className="mx-auto mb-4 text-purple-600" size={40} />
          <h3 className="text-xl font-semibold mb-2">Competitive Earnings</h3>
          <p className="text-gray-600">Set your own rates and earn what you deserve</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <Clock className="mx-auto mb-4 text-purple-600" size={40} />
          <h3 className="text-xl font-semibold mb-2">Flexible Schedule</h3>
          <p className="text-gray-600">Choose your own hours and availability</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <Users className="mx-auto mb-4 text-purple-600" size={40} />
          <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
          <p className="text-gray-600">Connect with students worldwide</p>
        </div>
      </div>
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h3 className="text-2xl font-semibold mb-6 text-center">Apply to Become a Tutor</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Subject Expertise</label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
            <input type="number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}