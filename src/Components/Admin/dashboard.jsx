import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaBriefcase, FaTasks, FaSignOutAlt } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div className="flex">
            <main className="flex-1 p-6">
                <h1 className="text-3xl font-bold mb-4">Dashboard Overview</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-5 shadow rounded">
                        <h3 className="text-xl font-semibold mb-2">Total Users</h3>
                        <p className="text-2xl">150</p>
                    </div>
                    <div className="bg-white p-5 shadow rounded">
                        <h3 className="text-xl font-semibold mb-2">Total Jobs</h3>
                        <p className="text-2xl">45</p>
                    </div>
                    <div className="bg-white p-5 shadow rounded">
                        <h3 className="text-xl font-semibold mb-2">Pending Tasks</h3>
                        <p className="text-2xl">12</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
