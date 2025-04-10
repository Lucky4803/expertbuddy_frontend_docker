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
import { Minus, Plus } from 'lucide-react';

export function PriceCalculator() {
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
            <h2 className="text-3xl font-bold mb-8">Calculate Price and Order a Custom Work</h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Type of Work */}
              <div>
                <label className="block text-sm mb-2">Type of Work</label>
                <Select>
                  <SelectTrigger className="bg-white text-gray-900">
                    <SelectValue placeholder="Select Work Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="application-essay">Application Essay</SelectItem>
                    <SelectItem value="research-paper">Research Paper</SelectItem>
                    <SelectItem value="dissertation">Dissertation</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Academic Level */}
              <div>
                <label className="block text-sm mb-2">Academic Level</label>
                <Select>
                  <SelectTrigger className="bg-white text-gray-900">
                    <SelectValue placeholder="Select Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="undergraduate">Undergraduate/Bachelor</SelectItem>
                    <SelectItem value="masters">Masters</SelectItem>
                    <SelectItem value="phd">PhD</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Deadline */}
              <div>
                <label className="block text-sm mb-2">Deadline</label>
                <Select>
                  <SelectTrigger className="bg-white text-gray-900">
                    <SelectValue placeholder="Select Deadline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3days">3 Days</SelectItem>
                    <SelectItem value="5days">5 Days</SelectItem>
                    <SelectItem value="7days">7 Days</SelectItem>
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

            {/* Price & Button */}
            <div className="mt-8 flex items-center justify-between">
              <div>
                <span className="text-sm opacity-80">Your Price</span>
                <div className="flex items-center gap-2">
                  <span className="text-lg line-through opacity-60">$19.50</span>
                  <span className="text-2xl font-bold">$15.00</span>
                </div>
              </div>
              <Button size="lg" className="bg-[#18181B] hover:bg-[#27272A]">
                Order Now
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
