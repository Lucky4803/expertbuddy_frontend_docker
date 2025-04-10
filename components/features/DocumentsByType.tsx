'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function DocumentsByType() {
  const documents = [
    'Accounting', 'Algebra', 'Analysis',
    'Anthropology', 'Archaeology', 'Chemistry Tutors',
    'Coding Tutors', 'Computer Science', 'Elementary Tutors',
    'French Tutors', 'Geometry Tutors', 'Writing Tutor',
    'Geometry Tutors', 'German Tutors', 'GMAT Tutors'
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="text-primary">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M4 4h24v24H4z" fill="currentColor"/>
              </svg>
            </div>
            <h2 className="text-4xl font-bold">Documents by Type</h2>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {documents.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold">{doc}</h3>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <div className="w-2 h-2 rounded-full bg-gray-200"></div>
              <div className="w-2 h-2 rounded-full bg-gray-200"></div>
            </div>
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}