
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesGrid from '../components/FeaturesGrid';
import CaseStudies from '../components/CaseStudies';
import DashboardPreview from '../components/DashboardPreview';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <Header />
      <HeroSection />
      <FeaturesGrid />
      <DashboardPreview />
      <CaseStudies />
      <Footer />
    </div>
  );
};

export default Index;
