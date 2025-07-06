import React from 'react';
import images from '../assets/images';

export default function CallToAction() {
  return (
    <div id="CallToAction_1" className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
      <div id="CallToAction_2" className="max-w-7xl mx-auto px-4 text-center">
        <div id="CallToAction_3" className="max-w-3xl mx-auto">
          <h2 id="CallToAction_4" className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Educational Experience?
          </h2>
          <p id="CallToAction_5" className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of students, teachers, and parents who have already embraced the future of education with our comprehensive school management platform.
          </p>
          
          <div id="CallToAction_6" className="flex flex-col sm:flex-row gap-4 justify-center">
            <button id="CallToAction_7" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Start Free Trial
            </button>
            <button id="CallToAction_8" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
          
          <div id="CallToAction_9" className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div id="CallToAction_10" className="">
              <div id="CallToAction_11" className="text-3xl font-bold text-white mb-2">10,000+</div>
              <div id="CallToAction_12" className="text-blue-100">Active Students</div>
            </div>
            <div id="CallToAction_13" className="">
              <div id="CallToAction_14" className="text-3xl font-bold text-white mb-2">500+</div>
              <div id="CallToAction_15" className="text-blue-100">Certified Teachers</div>
            </div>
            <div id="CallToAction_16" className="">
              <div id="CallToAction_17" className="text-3xl font-bold text-white mb-2">98%</div>
              <div id="CallToAction_18" className="text-blue-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}