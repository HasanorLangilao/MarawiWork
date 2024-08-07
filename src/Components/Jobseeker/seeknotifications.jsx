// src/Components/Notifications.js

import React, { useState, useEffect } from 'react';
import './jobseeker.css';

function seeknotifications() {
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
    <div className="notifications-container">
      <h1>Notifications</h1>
      <div className="notifications-header">
        <span>Unread: {unreadCount}</span>
      </div>
      <ul className="notifications-list">
        {notifications.map((notification) => (
          <li key={notification.id} className={notification.read ? 'read' : 'unread'}>
            <div className="notification-content">
              <p className="notification-message">{notification.message}</p>
              <p className="notification-timestamp">
                {new Date(notification.timestamp).toLocaleString()}
              </p>
            </div>
            {!notification.read && (
              <button
                className="mark-as-read-button"
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

export default seeknotifications;