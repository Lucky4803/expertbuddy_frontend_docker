import React from 'react';
import { Search, Star } from 'lucide-react';

export function FindTutor() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Find Your Perfect Tutor</h2>
      <div className="relative max-w-2xl mx-auto mb-12">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search by subject, expertise, or keyword..."
          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start gap-4">
              <img
                src={`https://source.unsplash.com/random/100x100?teacher&sig=${i}`}
                alt="Tutor"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg">Dr. Sarah Johnson</h3>
                <p className="text-purple-600">Mathematics Expert</p>
                <div className="flex items-center mt-2">
                  <Star className="text-yellow-400" size={16} />
                  <span className="ml-1">4.9 (120 reviews)</span>
                </div>
              </div>
            </div>
            <p className="mt-4 text-gray-600">Ph.D. in Mathematics with 8+ years of teaching experience.</p>
            <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors">
              Book Session
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}