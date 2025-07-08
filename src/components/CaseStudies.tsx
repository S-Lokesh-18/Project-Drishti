
import React from 'react';
import { Calendar, MapPin, Users, AlertTriangle, TrendingDown } from 'lucide-react';

const CaseStudies = () => {
  const incidents = [
    {
      title: "Kumbh Mela 2021",
      location: "Haridwar, India",
      date: "April 2021",
      attendees: "50+ Million",
      incident: "COVID-19 crowd management challenges during religious gathering",
      impact: "Super-spreader event concerns",
      color: "orange",
      icon: Users
    },
    {
      title: "RCB vs KKR Match",
      location: "M. Chinnaswamy Stadium",
      date: "May 2023",
      attendees: "40,000",
      incident: "Stampede-like situation during match exit",
      impact: "Multiple injuries, crowd control issues",
      color: "red",
      icon: AlertTriangle
    },
    {
      title: "Pushpa 2 Premiere",
      location: "Sandhya Theatre, Hyderabad",
      date: "December 2024",
      attendees: "5,000+",
      incident: "Stampede during star appearance, woman fatally injured",
      impact: "1 death, several injuries, theatre sealed",
      color: "red",
      icon: TrendingDown
    },
    {
      title: "Travis Scott Astroworld",
      location: "Houston, Texas",
      date: "November 2021",
      attendees: "50,000",
      incident: "Crowd surge during concert performance",
      impact: "10 deaths, 300+ injuries",
      color: "red",
      icon: AlertTriangle
    },
    {
      title: "Itaewon Halloween",
      location: "Seoul, South Korea",
      date: "October 2022",
      attendees: "100,000+",
      incident: "Crowd crush in narrow alley during Halloween celebrations",
      impact: "159 deaths, 196 injuries",
      color: "red",
      icon: TrendingDown
    },
    {
      title: "Love Parade 2010",
      location: "Duisburg, Germany",
      date: "July 2010",
      attendees: "1.4 Million",
      incident: "Tunnel bottleneck during electronic music festival",
      impact: "21 deaths, 652 injuries",
      color: "red",
      icon: AlertTriangle
    },
    {
      title: "Hillsborough Disaster",
      location: "Sheffield, England",
      date: "April 1989",
      attendees: "54,000",
      incident: "Overcrowding in football stadium stands",
      impact: "97 deaths, 766 injuries",
      color: "red",
      icon: TrendingDown
    },
    {
      title: "Station Nightclub Fire",
      location: "Rhode Island, USA",
      date: "February 2003",
      attendees: "462",
      incident: "Pyrotechnics ignited soundproofing foam",
      impact: "100 deaths, 230 injuries",
      color: "orange",
      icon: AlertTriangle
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      red: "from-red-500/20 to-red-600/20 border-red-500/30",
      orange: "from-orange-500/20 to-orange-600/20 border-orange-500/30"
    };
    return colors[color as keyof typeof colors] || colors.red;
  };

  const getIconColor = (color: string) => {
    const colors = {
      red: "text-red-400",
      orange: "text-orange-400"
    };
    return colors[color as keyof typeof colors] || colors.red;
  };

  return (
    <section id="cases" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Learning from
            <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Past Tragedies
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Every incident teaches us how to prevent future disasters. Project Drishti addresses the root causes that led to these tragedies.
          </p>
          <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-red-200 font-medium">
              These incidents could have been prevented with predictive AI, real-time monitoring, and intelligent emergency response systems.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {incidents.map((incident, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${getColorClasses(incident.color)} backdrop-blur-sm border rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300`}
            >
              <div className="flex items-start justify-between mb-4">
                <incident.icon className={`h-6 w-6 ${getIconColor(incident.color)}`} />
                <span className={`text-xs px-2 py-1 rounded-full bg-white/10 ${getIconColor(incident.color)}`}>
                  {incident.date}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2">{incident.title}</h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-white/70">
                  <MapPin className="h-3 w-3 mr-2" />
                  {incident.location}
                </div>
                <div className="flex items-center text-sm text-white/70">
                  <Users className="h-3 w-3 mr-2" />
                  {incident.attendees} attendees
                </div>
              </div>
              
              <div className="bg-black/20 rounded-lg p-3 mb-3">
                <p className="text-sm text-white/80 mb-2">{incident.incident}</p>
                <p className={`text-sm font-medium ${getIconColor(incident.color)}`}>{incident.impact}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">How Project Drishti Prevents These Tragedies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="text-cyan-400 font-semibold mb-2">Predictive Analysis</h4>
              <p className="text-white/70 text-sm">Identifies dangerous crowd buildups 15-20 minutes before they become critical</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="text-blue-400 font-semibold mb-2">Real-time Response</h4>
              <p className="text-white/70 text-sm">Instantly dispatches emergency services with optimal routing</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="text-green-400 font-semibold mb-2">Intelligent Evacuation</h4>
              <p className="text-white/70 text-sm">Dynamic escape routes that adapt to changing crowd conditions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
