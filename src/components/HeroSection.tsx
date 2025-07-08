
import React from 'react';
import { Eye, Brain, Shield, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
            <Zap className="h-4 w-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-medium">AI-Powered Crowd Safety Revolution</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Prevent Crowd
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Disasters Before
            </span>
            They Happen
          </h1>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8 leading-relaxed">
            Project Drishti transforms event safety with predictive AI, real-time video analysis, 
            and intelligent emergency response - saving lives through proactive intervention.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-cyan-500/25 transition-all transform hover:scale-105">
            Launch Command Center
          </button>
          <button className="border border-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all">
            View Live Demo
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
            <Eye className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Predictive Vision</h3>
            <p className="text-white/70">AI analyzes crowd patterns to predict bottlenecks 15-20 minutes in advance</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
            <Brain className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Smart Command</h3>
            <p className="text-white/70">Natural language interface for instant situational awareness queries</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
            <Shield className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Auto Response</h3>
            <p className="text-white/70">Intelligent resource dispatch with optimal routing and coordination</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
