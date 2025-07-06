import React from 'react';
import images from '../assets/images';

export default function AboutUs() {
  return (
    <div id="AboutUs_1" className="py-24 bg-white">
      <div id="AboutUs_2" className="max-w-7xl mx-auto px-4">
        <div id="AboutUs_3" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div id="AboutUs_4" className="relative">
            <img id="AboutUs_5" src={images[1] || 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'} alt="About Us" className="rounded-2xl shadow-xl w-full h-[400px] object-cover"/>
            <div id="AboutUs_6" className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl shadow-lg">
              <h3 id="AboutUs_7" className="text-2xl font-bold">15+</h3>
              <p id="AboutUs_8" className="text-sm">Years of Excellence</p>
            </div>
          </div>
          
          {/* Right Content */}
          <div id="AboutUs_9" className="space-y-6">
            <div id="AboutUs_10" className="space-y-4">
              <h2 id="AboutUs_11" className="text-4xl font-bold text-gray-900">
                About Our Educational Platform
              </h2>
              <p id="AboutUs_12" className="text-lg text-gray-600">
                We are dedicated to revolutionizing education through innovative technology and personalized learning experiences.
              </p>
            </div>
            
            <div id="AboutUs_13" className="space-y-4">
              <div id="AboutUs_14" className="flex items-start space-x-4">
                <div id="AboutUs_15" className="bg-blue-100 p-2 rounded-lg">
                  <svg id="AboutUs_16" className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div id="AboutUs_17">
                  <h3 id="AboutUs_18" className="text-xl font-semibold text-gray-900">Quality Education</h3>
                  <p id="AboutUs_19" className="text-gray-600">Comprehensive curriculum designed to meet modern educational standards.</p>
                </div>
              </div>
              
              <div id="AboutUs_20" className="flex items-start space-x-4">
                <div id="AboutUs_21" className="bg-purple-100 p-2 rounded-lg">
                  <svg id="AboutUs_22" className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div id="AboutUs_23">
                  <h3 id="AboutUs_24" className="text-xl font-semibold text-gray-900">Expert Teachers</h3>
                  <p id="AboutUs_25" className="text-gray-600">Experienced educators committed to student success and growth.</p>
                </div>
              </div>
              
              <div id="AboutUs_26" className="flex items-start space-x-4">
                <div id="AboutUs_27" className="bg-green-100 p-2 rounded-lg">
                  <svg id="AboutUs_28" className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div id="AboutUs_29">
                  <h3 id="AboutUs_30" className="text-xl font-semibold text-gray-900">Proven Results</h3>
                  <p id="AboutUs_31" className="text-gray-600">Track record of academic excellence and student achievement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}