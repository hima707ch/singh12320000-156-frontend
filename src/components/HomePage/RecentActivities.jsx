import React from 'react';
import images from '../assets/images';

export default function RecentActivities({ activities, loading }) {
  const defaultActivities = [
    {
      id: 1,
      type: 'assignment',
      title: 'Mathematics Assignment Submitted',
      description: 'John Smith submitted Calculus Assignment #3',
      timestamp: '2024-02-15T10:30:00Z',
      user: 'John Smith',
      icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
    },
    {
      id: 2,
      type: 'grade',
      title: 'Grade Posted',
      description: 'Physics Quiz #2 grades have been posted',
      timestamp: '2024-02-15T09:15:00Z',
      user: 'Dr. Sarah Johnson',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      id: 3,
      type: 'announcement',
      title: 'New Course Material',
      description: 'Chemistry lab manual has been updated',
      timestamp: '2024-02-15T08:45:00Z',
      user: 'Prof. Michael Brown',
      icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
    }
  ];

  const displayActivities = activities || defaultActivities;

  const getActivityColor = (type) => {
    switch (type) {
      case 'assignment': return 'blue';
      case 'grade': return 'green';
      case 'announcement': return 'purple';
      default: return 'gray';
    }
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div id="RecentActivities_1" className="bg-white rounded-xl shadow-lg p-8">
      <div id="RecentActivities_2" className="flex items-center justify-between mb-6">
        <h2 id="RecentActivities_3" className="text-2xl font-bold text-gray-900">Recent Activities</h2>
        <div id="RecentActivities_4" className="bg-purple-100 p-2 rounded-lg">
          <svg id="RecentActivities_5" className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
      
      {loading ? (
        <div id="RecentActivities_6" className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} id={`RecentActivities_${6 + item}`} className="animate-pulse flex items-start space-x-4">
              <div id={`RecentActivities_${9 + item}`} className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div id={`RecentActivities_${12 + item}`} className="flex-1 space-y-2">
                <div id={`RecentActivities_${15 + item}`} className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div id={`RecentActivities_${18 + item}`} className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div id="RecentActivities_22" className="space-y-4">
          {displayActivities.map((activity) => {
            const color = getActivityColor(activity.type);
            return (
              <div key={activity.id} id={`RecentActivities_${22 + activity.id}`} className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                <div id={`RecentActivities_${25 + activity.id}`} className={`flex-shrink-0 w-10 h-10 bg-${color}-100 rounded-full flex items-center justify-center`}>
                  <svg id={`RecentActivities_${28 + activity.id}`} className={`w-5 h-5 text-${color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={activity.icon} />
                  </svg>
                </div>
                <div id={`RecentActivities_${31 + activity.id}`} className="flex-1 min-w-0">
                  <div id={`RecentActivities_${34 + activity.id}`} className="flex items-center justify-between">
                    <h3 id={`RecentActivities_${37 + activity.id}`} className="text-sm font-medium text-gray-900 truncate">
                      {activity.title}
                    </h3>
                    <span id={`RecentActivities_${40 + activity.id}`} className="text-xs text-gray-500">
                      {formatTime(activity.timestamp)}
                    </span>
                  </div>
                  <p id={`RecentActivities_${43 + activity.id}`} className="text-sm text-gray-600 mt-1">
                    {activity.description}
                  </p>
                  <p id={`RecentActivities_${46 + activity.id}`} className="text-xs text-gray-500 mt-1">
                    by {activity.user}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
      
      <div id="RecentActivities_49" className="mt-6 pt-4 border-t">
        <button id="RecentActivities_50" className="text-purple-600 hover:text-purple-800 font-medium text-sm">
          View All Activities →
        </button>
      </div>
    </div>
  );
}