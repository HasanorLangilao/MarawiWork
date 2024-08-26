import React from 'react'
import { Link } from 'react-router-dom';
import { FaUsers, FaBriefcase, FaTasks, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-5">
                <h2 className="text-2xl font-semibold mb-6">Hello Admin!</h2>
                <nav>
                    <ul>
                        <li className="mb-4">
                            <Link to="/dashboard" className="flex items-center">
                                <FaUsers className="mr-2" /> Dashboard
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link to="/users" className="flex items-center">
                                <FaBriefcase className="mr-2" /> Users
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link to="/jobs" className="flex items-center">
                                <FaTasks className="mr-2" /> Jobs
                            </Link>
                        </li>
                        <li className="mt-auto">
                            <button className="flex items-center text-red-500">
                                <FaSignOutAlt className="mr-2" /> Log out
                            </button>
                        </li>
                    </ul>
                </nav>
            </aside>
  )
}

export default Sidebar