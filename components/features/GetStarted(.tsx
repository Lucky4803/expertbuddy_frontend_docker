import React from 'react';
import { Search, ClipboardCheck as ChalkboardTeacher, Award } from 'lucide-react';

export function GetStarted() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Get Started with ExpertBuddy</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
        <div>
          <img
            src="https://source.unsplash.com/random/600x400?study"
            alt="Students studying"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <Search className="text-purple-600" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Find Your Tutor</h3>
              <p className="text-gray-600">Browse through our extensive network of qualified tutors</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <ChalkboardTeacher className="text-purple-600" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Schedule Sessions</h3>
              <p className="text-gray-600">Book sessions at times that work best for you</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <Award className="text-purple-600" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Start Learning</h3>
              <p className="text-gray-600">Begin your journey to academic success</p>
            </div>
          </div>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors">
            Create Free Account
          </button>
        </div>
      </div>
    </div>
  );
}