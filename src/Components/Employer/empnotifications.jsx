import React, { useState } from 'react';

const NotificationsPage = () => {
  // Example notifications data
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      jobTitle: 'Frontend Developer',
      candidateName: 'John Doe',
      applicationDate: 'August 17, 2024',
      preview: 'I am excited to apply for the Frontend Developer role...',
      status: 'unread', // can be 'unread' or 'viewed'
    },
    {
      id: 2,
      jobTitle: 'Backend Developer',
      candidateName: 'Jane Smith',
      applicationDate: 'August 16, 2024',
      preview: 'My experience in backend development includes...',
      status: 'viewed',
    },
  ]);

  // Handle actions
  const handleViewApplication = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id
          ? { ...notification, status: 'viewed' }
          : notification
      )
    );
    // Navigate to the application detail page
    console.log(`Viewing application for notification ID: ${id}`);
  };

  const handleRejectApplication = (id) => {
    console.log(`Rejecting application for notification ID: ${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      {notifications.length > 0 ? (
        notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 mb-4 border rounded-lg ${
              notification.status === 'unread'
                ? 'bg-gray-100'
                : 'bg-white'
            }`}
          >
            <div className="flex justify-between items-center mb-2">
              <div>
                <h2 className="text-xl font-semibold">{notification.jobTitle}</h2>
                <p className="text-sm text-gray-500">{notification.candidateName} applied on {notification.applicationDate}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleViewApplication(notification.id)}
                  className="px-4 py-2 text-sm bg-blue-500 text-white rounded"
                >
                  View Application
                </button>
                <button
                  onClick={() => handleRejectApplication(notification.id)}
                  className="px-4 py-2 text-sm bg-red-500 text-white rounded"
                >
                  Reject
                </button>
              </div>
            </div>
            <p className="text-gray-700">{notification.preview}</p>
          </div>
        ))
      ) : (
        <p>No new applications yet.</p>
      )}
    </div>
  );
};

export default NotificationsPage;
