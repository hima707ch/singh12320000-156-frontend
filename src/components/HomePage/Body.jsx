import React from 'react';
import Hero from './Hero';
import AboutUs from './AboutUs';
import QuickLinks from './QuickLinks';
import RecentActivities from './RecentActivities';
import Announcements from './Announcements';
import CallToAction from './CallToAction';
import Footer from './Footer';
import useHome from './useHome';
import images from '../assets/images';

export default function Body() {
  const { announcements, activities, loading } = useHome();

  return (
    <div id="Body_1" className="min-h-screen bg-white">
      <Hero />
      <AboutUs />
      <QuickLinks />
      <div id="Body_2" className="max-w-7xl mx-auto px-4 py-16">
        <div id="Body_3" className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Announcements announcements={announcements} loading={loading} />
          <RecentActivities activities={activities} loading={loading} />
        </div>
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
}