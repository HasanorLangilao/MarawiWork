import React, { useState, useEffect } from 'react';

function SeekNotifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'job_match',
      message: 'You matched with a job: Software Engineer at ABC Corporation',
      timestamp: '2023-03-01T10:00:00.000Z',
      read: false,
    },
    {
      id: 2,
      type: 'interview_invitation',
      message: 'You have been invited for an interview at DEF Startups',
      timestamp: '2023-03-02T11:00:00.000Z',
      read: true,
    },
    {
      id: 3,
      type: 'job_rejection',
      message: 'Unfortunately, you were not selected for the position at GHI Inc.',
      timestamp: '2023-03-03T12:00:00.000Z',
      read: false,
    },
  ]);

  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const unreadNotifications = notifications.filter((notification) => !notification.read);
    setUnreadCount(unreadNotifications.length);
  }, [notifications]);

  const handleMarkAsRead = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => {
        if (notification.id === id) {
          return { ...notification, read: true };
        }
        return notification;
      })
    );
  };

  return (
    <div className="max-w-[1200px] w-full mx-auto my-10 p-5 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-5">Notifications</h1>
      <div className="flex justify-between items-center mb-5">
        <span className="text-lg">Unread: {unreadCount}</span>
      </div>
      <ul className="list-none p-0 m-0">
        {notifications.map((notification) => (
          <li
            key={notification.id}
            className={`p-4 border-b border-gray-300 ${
              notification.read ? 'bg-gray-100' : 'bg-white border-l-4 border-gray-700'
            }`}
          >
            <div className="mb-2">
              <p className="text-lg font-semibold mb-1">{notification.message}</p>
              <p className="text-sm text-gray-600">
                {new Date(notification.timestamp).toLocaleString()}
              </p>
            </div>
            {!notification.read && (
              <button
                className="bg-gray-700 text-white py-2 px-4 text-sm rounded hover:bg-gray-600"
                onClick={() => handleMarkAsRead(notification.id)}
              >
                Mark as Read
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SeekNotifications;
