import React from 'react';
import images from '../assets/images';

export default function Hero() {
  return (
    <div id="Hero_1" className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
      {/* Background SVG Shapes */}
      <div id="Hero_2" className="absolute inset-0 opacity-10">
        <svg id="Hero_3" className="absolute top-20 left-20 w-64 h-64 text-blue-600" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100 20 L180 60 L180 140 L100 180 L20 140 L20 60 Z"/>
        </svg>
        <svg id="Hero_4" className="absolute bottom-20 right-20 w-48 h-48 text-purple-600" viewBox="0 0 200 200" fill="currentColor">
          <circle cx="100" cy="100" r="80"/>
        </svg>
        <svg id="Hero_5" className="absolute top-40 right-40 w-32 h-32 text-indigo-600" viewBox="0 0 200 200" fill="currentColor">
          <polygon points="100,20 180,180 20,180"/>
        </svg>
      </div>
      
      <div id="Hero_6" className="relative max-w-7xl mx-auto px-4 py-32">
        <div id="Hero_7" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div id="Hero_8" className="space-y-8">
            <h1 id="Hero_9" className="text-5xl lg:text-6xl font-bold leading-tight">
              <span id="Hero_10" className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Transforming Education for Tomorrow's
              </span>
              <div id="Hero_11" className="overflow-hidden">
                <span id="Hero_12" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse transform translate-y-2 transition-transform duration-1000">
                  Leaders
                </span>
              </div>
            </h1>
            <p id="Hero_13" className="text-xl text-gray-600 max-w-lg">
              Empowering students, teachers, and administrators with cutting-edge technology and innovative learning solutions.
            </p>
            <div id="Hero_14" className="flex flex-col sm:flex-row gap-4">
              <button id="Hero_15" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300">
                Get Started
              </button>
              <button id="Hero_16" className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Right Image */}
          <div id="Hero_17" className="relative">
            <div id="Hero_18" className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <img id="Hero_19" src={images[0] || 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'} alt="School Management" className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"/>
            </div>
            <div id="Hero_20" className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}