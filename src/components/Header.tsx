'use client';

import { useState } from 'react';
import { FiMenu, FiX, FiSettings } from 'react-icons/fi';
import { BiSparkles } from 'react-icons/bi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="p-2 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg group-hover:shadow-lg transition-shadow">
            <BiSparkles className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
            Hay
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            Features
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            Pricing
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            About
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block btn-secondary">
            Sign In
          </button>
          <button className="hidden md:block btn-primary">
            Get Started
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-dark-card rounded-lg transition-colors"
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-dark-border p-4 space-y-3 animate-slide-up">
          <a href="#" className="block text-gray-300 hover:text-white py-2">
            Features
          </a>
          <a href="#" className="block text-gray-300 hover:text-white py-2">
            Pricing
          </a>
          <a href="#" className="block text-gray-300 hover:text-white py-2">
            About
          </a>
          <div className="flex gap-3 pt-3">
            <button className="btn-secondary flex-1">
              Sign In
            </button>
            <button className="btn-primary flex-1">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
