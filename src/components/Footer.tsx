
import React from 'react';
import { Shield, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/20 border-t border-white/10 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Shield className="h-8 w-8 text-cyan-400" />
                <div className="absolute inset-0 bg-cyan-400/20 blur-lg rounded-full"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Project Drishti</h3>
                <p className="text-xs text-cyan-300">AI-Powered Event Safety</p>
              </div>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Transforming event safety through predictive AI, real-time monitoring, 
              and intelligent emergency response systems. Preventing crowd disasters before they happen.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">Dashboard</a></li>
              <li><a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">Analytics</a></li>
              <li><a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">API Access</a></li>
              <li><a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">Integration</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">Training</a></li>
              <li><a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">Emergency Contact</a></li>
              <li><a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">Status Page</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 Project Drishti. Built with Google AI technologies. Saving lives through intelligent prevention.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors">Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
