
import React from 'react';
import { 
  Camera, AlertTriangle, Users, MapPin, Phone, Upload, 
  Route, Shield, Mic, Cloud, Activity, Smartphone,
  Radio, Globe, Heart, Thermometer, Speaker, Car
} from 'lucide-react';

const FeaturesGrid = () => {
  const features = [
    {
      icon: Camera,
      title: "Drone Video Analysis",
      description: "AI-powered verification of video authenticity and real-time crowd analysis from aerial feeds",
      color: "cyan"
    },
    {
      icon: AlertTriangle,
      title: "Auto Emergency Response",
      description: "Instant detection of chaos and automated dispatch of police, ambulance, and emergency services",
      color: "red"
    },
    {
      icon: Users,
      title: "Crowd Density Mapping",
      description: "Real-time visualization of crowd density with predictive bottleneck analysis",
      color: "blue"
    },
    {
      icon: Upload,
      title: "Missing Person Finder",
      description: "Upload photos of lost individuals for AI-powered scanning across all camera feeds",
      color: "green"
    },
    {
      icon: Route,
      title: "Smart Escape Routes",
      description: "Dynamic emergency evacuation paths based on real-time crowd flow and obstacles",
      color: "purple"
    },
    {
      icon: Phone,
      title: "Signal Alert System",
      description: "Instant emergency notifications and panic button integration for attendees",
      color: "orange"
    },
    {
      icon: Mic,
      title: "Audio Threat Detection",
      description: "Real-time analysis of crowd sounds to detect screams, explosions, or panic",
      color: "pink"
    },
    {
      icon: Activity,
      title: "Medical Emergency Prediction",
      description: "AI identifies individuals showing signs of distress before collapse occurs",
      color: "emerald"
    },
    {
      icon: Globe,
      title: "Social Media Monitoring",
      description: "Track event sentiment and emerging threats through social media analysis",
      color: "indigo"
    },
    {
      icon: Smartphone,
      title: "Multi-language Alerts",
      description: "Instant emergency broadcasts translated to multiple languages",
      color: "teal"
    },
    {
      icon: Heart,
      title: "Family Reunification",
      description: "Advanced matching system to help families find each other during emergencies",
      color: "rose"
    },
    {
      icon: Car,
      title: "Traffic Coordination",
      description: "Integration with city traffic systems for emergency vehicle priority routing",
      color: "amber"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: "from-cyan-500 to-cyan-600 shadow-cyan-500/25",
      red: "from-red-500 to-red-600 shadow-red-500/25",
      blue: "from-blue-500 to-blue-600 shadow-blue-500/25",
      green: "from-green-500 to-green-600 shadow-green-500/25",
      purple: "from-purple-500 to-purple-600 shadow-purple-500/25",
      orange: "from-orange-500 to-orange-600 shadow-orange-500/25",
      pink: "from-pink-500 to-pink-600 shadow-pink-500/25",
      emerald: "from-emerald-500 to-emerald-600 shadow-emerald-500/25",
      indigo: "from-indigo-500 to-indigo-600 shadow-indigo-500/25",
      teal: "from-teal-500 to-teal-600 shadow-teal-500/25",
      rose: "from-rose-500 to-rose-600 shadow-rose-500/25",
      amber: "from-amber-500 to-amber-600 shadow-amber-500/25"
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  return (
    <section id="features" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Safety
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Intelligence Platform
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Every feature designed to prevent tragedies and save lives through predictive AI and intelligent automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${getColorClasses(feature.color)} mb-4 shadow-lg`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-white/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
