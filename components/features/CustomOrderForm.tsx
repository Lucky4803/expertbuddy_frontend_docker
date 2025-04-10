'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Minus, Plus } from 'lucide-react';

export function CustomOrderForm() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-primary rounded-3xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-8">
              Can't find the right project for you? Place a custom order right now!
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Project Type */}
              <div>
                <label className="block text-sm mb-2">Project Type</label>
                <Select>
                  <SelectTrigger className="bg-white text-gray-900">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="mobile">Mobile App</SelectItem>
                    <SelectItem value="ai">AI/ML</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Education Level */}
              <div>
                <label className="block text-sm mb-2">Education Level</label>
                <Select>
                  <SelectTrigger className="bg-white text-gray-900">
                    <SelectValue placeholder="Select Education Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bachelors">Bachelors</SelectItem>
                    <SelectItem value="masters">Masters</SelectItem>
                    <SelectItem value="phd">PhD</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Decline */}
              <div>
                <label className="block text-sm mb-2">Decline</label>
                <Select>
                  <SelectTrigger className="bg-white text-gray-900">
                    <SelectValue placeholder="Select Decline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="it">IT</SelectItem>
                    <SelectItem value="cs">Computer Science</SelectItem>
                    <SelectItem value="ee">Electrical Engineering</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Pages */}
              <div>
                <label className="block text-sm mb-2">Pages</label>
                <div className="flex items-center bg-white rounded-lg">
                  <Button variant="ghost" size="icon" className="text-primary">
                    <Minus size={20} />
                  </Button>
                  <span className="flex-1 text-center text-gray-900">1 page/275 words</span>
                  <Button variant="ghost" size="icon" className="text-primary">
                    <Plus size={20} />
                  </Button>
                </div>
              </div>
            </div>

            {/* Input and Button */}
            <div className="mt-8">
              <Input
                placeholder="Please fill up the form to find out the price"
                className="bg-white text-gray-900 mb-4"
              />
              <Button size="lg" className="w-full bg-[#18181B] hover:bg-[#27272A]">
                Get it Done
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
