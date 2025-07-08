
import React from 'react';
import { Activity, Users, AlertTriangle, MapPin, Eye, Phone } from 'lucide-react';

const DashboardPreview = () => {
  return (
    <section id="dashboard" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Command Center
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Dashboard
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Real-time situational awareness with predictive analytics and intelligent alerts
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          {/* Stats Overview */}
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <Users className="h-5 w-5 text-green-400" />
                <span className="text-xs text-green-300 font-medium">SAFE</span>
              </div>
              <div className="text-2xl font-bold text-white">24,573</div>
              <div className="text-xs text-green-400">Total Attendees</div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <Eye className="h-5 w-5 text-blue-400" />
                <span className="text-xs text-blue-300 font-medium">ACTIVE</span>
              </div>
              <div className="text-2xl font-bold text-white">47</div>
              <div className="text-xs text-blue-400">Camera Feeds</div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <Activity className="h-5 w-5 text-purple-400" />
                <span className="text-xs text-purple-300 font-medium">NORMAL</span>
              </div>
              <div className="text-2xl font-bold text-white">72%</div>
              <div className="text-xs text-purple-400">Crowd Density</div>
            </div>

            <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <AlertTriangle className="h-5 w-5 text-orange-400" />
                <span className="text-xs text-orange-300 font-medium">LOW</span>
              </div>
              <div className="text-2xl font-bold text-white">3</div>
              <div className="text-xs text-orange-400">Risk Alerts</div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 border border-cyan-500/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <MapPin className="h-5 w-5 text-cyan-400" />
                <span className="text-xs text-cyan-300 font-medium">READY</span>
              </div>
              <div className="text-2xl font-bold text-white">12</div>
              <div className="text-xs text-cyan-400">Response Units</div>
            </div>

            <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <Phone className="h-5 w-5 text-red-400" />
                <span className="text-xs text-red-300 font-medium">0 ACTIVE</span>
              </div>
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-xs text-red-400">Emergency Line</div>
            </div>
          </div>

          {/* Live Feed Simulation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Eye className="h-5 w-5 text-cyan-400 mr-2" />
                Live Crowd Analysis
              </h3>
              <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg h-48 flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Activity className="h-8 w-8 text-white animate-pulse" />
                  </div>
                  <p className="text-white/70">Live Video Feed Processing</p>
                  <p className="text-sm text-cyan-400 mt-2">AI Analysis Active</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">Density Level</span>
                  <span className="text-green-400">Normal (72%)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">Flow Rate</span>
                  <span className="text-blue-400">2.3 p/s</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">Bottleneck Risk</span>
                  <span className="text-orange-400">Low</span>
                </div>
              </div>
            </div>

            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <AlertTriangle className="h-5 w-5 text-orange-400 mr-2" />
                Predictive Alerts
              </h3>
              <div className="space-y-3">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-green-400 font-medium">Zone A: All Clear</span>
                    <span className="text-xs text-green-300">12:34 PM</span>
                  </div>
                  <p className="text-sm text-white/70">Crowd density within safe limits</p>
                </div>

                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-orange-400 font-medium">Zone C: Monitor</span>
                    <span className="text-xs text-orange-300">12:31 PM</span>
                  </div>
                  <p className="text-sm text-white/70">Potential bottleneck in 18 minutes</p>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-blue-400 font-medium">Medical Request</span>
                    <span className="text-xs text-blue-300">12:29 PM</span>
                  </div>
                  <p className="text-sm text-white/70">First aid dispatched to Gate 3</p>
                </div>

                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-purple-400 font-medium">Lost Person Alert</span>
                    <span className="text-xs text-purple-300">12:27 PM</span>
                  </div>
                  <p className="text-sm text-white/70">AI scanning for missing child - Photo uploaded</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
