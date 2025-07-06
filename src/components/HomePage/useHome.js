import { useState, useEffect } from 'react';

export default function useHome() {
  const [announcements, setAnnouncements] = useState([]);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      
      // Simulate API calls with setTimeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Since specific announcement endpoints aren't provided,
      // we'll use mock data but structure it to be easily replaceable
      const mockAnnouncements = [
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

      const mockActivities = [
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

      setAnnouncements(mockAnnouncements);
      setActivities(mockActivities);
      
    } catch (err) {
      setError(err.message);
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch announcements from API when endpoint is available
  const fetchAnnouncements = async () => {
    try {
      const response = await fetch('/api/announcements');
      if (!response.ok) {
        throw new Error('Failed to fetch announcements');
      }
      const data = await response.json();
      setAnnouncements(data);
    } catch (err) {
      console.error('Error fetching announcements:', err);
    }
  };

  // Function to fetch activities from API when endpoint is available
  const fetchActivities = async () => {
    try {
      const response = await fetch('/api/activities');
      if (!response.ok) {
        throw new Error('Failed to fetch activities');
      }
      const data = await response.json();
      setActivities(data);
    } catch (err) {
      console.error('Error fetching activities:', err);
    }
  };

  return {
    announcements,
    activities,
    loading,
    error,
    refetch: fetchData,
    fetchAnnouncements,
    fetchActivities
  };
}