
import React from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-black/20 backdrop-blur-md border-b border-white/10 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Shield className="h-8 w-8 text-cyan-400" />
              <div className="absolute inset-0 bg-cyan-400/20 blur-lg rounded-full"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Project Drishti</h1>
              <p className="text-xs text-cyan-300">AI-Powered Event Safety</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white/80 hover:text-cyan-400 transition-colors">Features</a>
            <a href="#dashboard" className="text-white/80 hover:text-cyan-400 transition-colors">Dashboard</a>
            <a href="#cases" className="text-white/80 hover:text-cyan-400 transition-colors">Case Studies</a>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
              Deploy System
            </button>
          </nav>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#features" className="text-white/80 hover:text-cyan-400 transition-colors">Features</a>
              <a href="#dashboard" className="text-white/80 hover:text-cyan-400 transition-colors">Dashboard</a>
              <a href="#cases" className="text-white/80 hover:text-cyan-400 transition-colors">Case Studies</a>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all w-fit">
                Deploy System
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
