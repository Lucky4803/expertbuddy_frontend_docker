'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-primary pt-24">
      <div className="container px-4 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Accounting Homework Samples & Study Documents
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Get Access To Our Online Database Of Accounting Writing Samples.
            </p>
            <div className="flex gap-2 p-2 bg-white rounded-full">
              <Input
                type="text"
                placeholder="Find any type of work, topic, etc."
                className="border-none text-lg"
              />
              <Button size="lg" className="rounded-full px-8">
                <Search className="mr-2" />
                Search
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block"
          >
            <img
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80"
              alt="Students studying"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}