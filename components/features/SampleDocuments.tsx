'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { FileText, Book, Sparkles } from 'lucide-react';

export function SampleDocuments() {
  const documents = [
    {
      title: 'ExpertBuddy',
      content: '"Welcome to ExpertBuddy – your trusted platform for connecting with top tutors. We make learning easy and personalized, helping you achieve your academic goals with expert guidance. Discover, connect, and grow with us!"',
      words: 514,
      pages: '02',
    },
    {
      title: 'Professional Skill Development',
      content: '"Upskill with ExpertBuddy. From coding to communication, our platform connects you with expert mentors to help you level up in your career journey."',
      words: 134,
      pages: '02',
    },
    {
      title: 'Academic Tutoring',
      content: 'Struggling with tough subjects? Find the right tutor at ExpertBuddy and boost your grades with personalized academic support tailored just for you.',
      words: 164,
      pages: '02',
    },
    {
      title: 'Exam Preparation Focus',
      content: 'Ace your exams with confidence! ExpertBuddy provides top-tier tutoring for board exams, competitive tests, and certifications – all in one place.',
      words: 114,
      pages: '02',
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="text-primary">
            <Sparkles size={32} />
          </div>
          <h2 className="text-4xl font-bold">Find Writing Inspiration in Our Database</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
            {documents.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4">{doc.title}</h3>
                  <p className="text-gray-600 mb-4">{doc.content}</p>
                  <div className="flex items-center justify-between text-gray-500 text-sm">
                    <div className="flex items-center gap-2">
                      <FileText size={16} />
                      <span>Words: {doc.words}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Book size={16} />
                      <span>Pages: {doc.pages}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Type of Work</label>
              <Select>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="All Project Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Project Types</SelectItem>
                  <SelectItem value="essay">Essay</SelectItem>
                  <SelectItem value="report">Report</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <Select>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Accounting" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="accounting">Accounting</SelectItem>
                  <SelectItem value="cs">Computer Science</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Academic Level</label>
              <Select>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Any Academic Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="undergrad">Undergraduate</SelectItem>
                  <SelectItem value="grad">Graduate</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Words</label>
              <Slider defaultValue={[50]} max={1000} step={10} />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
          <Button variant="outline" size="sm" className="text-gray-600">« First</Button>
          <Button variant="outline" size="sm" className="text-gray-600">‹ Back</Button>
          <Button variant="outline" size="sm" className="text-gray-600">1</Button>
          <Button size="sm" className="bg-primary text-white">2</Button>
          <Button variant="outline" size="sm" className="text-gray-600">3</Button>
          <Button variant="outline" size="sm" className="text-gray-600">4</Button>
          <span className="mx-2">...</span>
          <Button variant="outline" size="sm" className="text-gray-600">25</Button>
          <Button variant="outline" size="sm" className="text-gray-600">Next ›</Button>
          <Button variant="outline" size="sm" className="text-gray-600">Last »</Button>
        </div>
      </div>
    </section>
  );
}
