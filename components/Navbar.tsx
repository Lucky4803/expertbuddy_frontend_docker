'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white"
    >
      <nav className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">BUDDY</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/findtutor" className="text-gray-600 hover:text-primary">
            Find Tutor
          </Link>
          <Link href="/becometutor" className="text-gray-600 hover:text-primary">
            Become Tutor
          </Link>
          <Link href="/signin">
  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">Sign In</button>
</Link>
<Button asChild size="lg">
  <Link href="/signin">Get Started For Free</Link>
</Button>
        </div>
      </nav>
    </motion.header>
  );
}