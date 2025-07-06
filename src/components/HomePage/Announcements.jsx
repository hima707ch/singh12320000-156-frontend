import React from 'react';
import images from '../assets/images';

export default function Announcements({ announcements, loading }) {
  const defaultAnnouncements = [
    {
      id: 1,
      title: 'New Academic Year Registration Open',
      content: 'Registration for the 2024-2025 academic year is now open. Please submit your applications by March 15th.',
      date: '2024-02-15',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Parent-Teacher Conference Scheduled',
      content: 'Annual parent-teacher conferences will be held from March 20-22. Please book your slots online.',
      date: '2024-02-10',
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Science Fair Competition',
      content: 'Students are invited to participate in the annual science fair. Registration deadline is March 1st.',
      date: '2024-02-05',
      priority: 'low'
    }
  ];

  const displayAnnouncements = announcements || defaultAnnouncements;

  return (
    <div id="Announcements_1" className="bg-white rounded-xl shadow-lg p-8">
      <div id="Announcements_2" className="flex items-center justify-between mb-6">
        <h2 id="Announcements_3" className="text-2xl font-bold text-gray-900">Latest Announcements</h2>
        <div id="Announcements_4" className="bg-blue-100 p-2 rounded-lg">
          <svg id="Announcements_5" className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
          </svg>
        </div>
      </div>
      
      {loading ? (
        <div id="Announcements_6" className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} id={`Announcements_${6 + item}`} className="animate-pulse">
              <div id={`Announcements_${9 + item}`} className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div id={`Announcements_${12 + item}`} className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      ) : (
        <div id="Announcements_16" className="space-y-4">
          {displayAnnouncements.map((announcement) => (
            <div key={announcement.id} id={`Announcements_${16 + announcement.id}`} className="border-l-4 border-blue-600 pl-4 py-3 hover:bg-gray-50 transition-colors duration-200">
              <div id={`Announcements_${19 + announcement.id}`} className="flex items-start justify-between">
                <div id={`Announcements_${22 + announcement.id}`} className="flex-1">
                  <h3 id={`Announcements_${25 + announcement.id}`} className="font-semibold text-gray-900 mb-1">
                    {announcement.title}
                  </h3>
                  <p id={`Announcements_${28 + announcement.id}`} className="text-gray-600 text-sm mb-2">
                    {announcement.content}
                  </p>
                  <span id={`Announcements_${31 + announcement.id}`} className="text-xs text-gray-500">
                    {new Date(announcement.date).toLocaleDateString()}
                  </span>
                </div>
                <div id={`Announcements_${34 + announcement.id}`} className={`ml-4 px-2 py-1 rounded-full text-xs font-medium ${
                  announcement.priority === 'high' ? 'bg-red-100 text-red-800' :
                  announcement.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {announcement.priority}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div id="Announcements_37" className="mt-6 pt-4 border-t">
        <button id="Announcements_38" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
          View All Announcements →
        </button>
      </div>
    </div>
  );
}