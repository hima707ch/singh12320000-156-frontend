import React from 'react';
import images from '../assets/images';

export default function QuickLinks() {
  const links = [
    {
      title: 'Student Portal',
      description: 'Access grades, assignments, and course materials',
      icon: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z',
      color: 'blue'
    },
    {
      title: 'Teacher Dashboard',
      description: 'Manage classes, students, and academic records',
      icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
      color: 'purple'
    },
    {
      title: 'Parent Access',
      description: 'Monitor your child\'s progress and school activities',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      color: 'green'
    },
    {
      title: 'Administration',
      description: 'Administrative tools and school management',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      color: 'indigo'
    }
  ];

  return (
    <div id="QuickLinks_1" className="py-20 bg-gray-50">
      <div id="QuickLinks_2" className="max-w-7xl mx-auto px-4">
        <div id="QuickLinks_3" className="text-center mb-16">
          <h2 id="QuickLinks_4" className="text-4xl font-bold text-gray-900 mb-4">
            Quick Access
          </h2>
          <p id="QuickLinks_5" className="text-xl text-gray-600 max-w-2xl mx-auto">
            Navigate to your desired section quickly and efficiently
          </p>
        </div>
        
        <div id="QuickLinks_6" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {links.map((link, index) => (
            <div key={index} id={`QuickLinks_${7 + index}`} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div id={`QuickLinks_${11 + index}`} className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-${link.color}-100 mb-4`}>
                <svg id={`QuickLinks_${15 + index}`} className={`w-6 h-6 text-${link.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                </svg>
              </div>
              <h3 id={`QuickLinks_${19 + index}`} className="text-xl font-semibold text-gray-900 mb-2">
                {link.title}
              </h3>
              <p id={`QuickLinks_${23 + index}`} className="text-gray-600">
                {link.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}