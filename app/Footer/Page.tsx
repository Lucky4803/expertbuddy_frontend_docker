import React from 'react';
import { BookOpen as BookIcon } from 'lucide-react';

interface FooterProps {
  setActivePage?: (page: string) => void; // ✅ optional now
}

export function Footer({ setActivePage }: FooterProps) {
  return (
    <footer className="bg-white bg-opacity-10 backdrop-blur-lg py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookIcon size={24} className="text-white" />
              <span className="text-white font-bold text-xl">ExpertBuddy</span>
            </div>
            <p className="text-white opacity-80">
              Connecting learners with expert tutors for a brighter future.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setActivePage?.('findTutor')}
                  className="text-white opacity-80 hover:opacity-100"
                >
                  Find Tutor
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage?.('becomeTutor')}
                  className="text-white opacity-80 hover:opacity-100"
                >
                  Become a Tutor
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage?.('getStarted')}
                  className="text-white opacity-80 hover:opacity-100"
                >
                  Get Started
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white opacity-80 hover:opacity-100">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-white opacity-80 hover:opacity-100">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white opacity-80 hover:opacity-100">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">About Us</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white opacity-80 hover:opacity-100">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-white opacity-80 hover:opacity-100">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-white opacity-80 hover:opacity-100">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 pt-8">
          <p className="text-white opacity-80 text-center">
            © 2024 ExpertBuddy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
