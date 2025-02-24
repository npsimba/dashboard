import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useState } from "react";

const Settings = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    password: "********",
  });

  
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar />

        {/* Settings Content */}
        <div className="p-6 bg-gray-100 flex-1">
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-gray-600">Manage your account settings.</p>

          {/* Profile Section */}
          <div className="mt-6 bg-white p-4 shadow rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Profile</h2>
            <div className="space-y-3">
              <div>
                <label className="text-gray-700">Full Name</label>
                <input
                  type="text"
                  value={user.name}
                  className="w-full p-2 border rounded-lg bg-gray-100"
                  readOnly
                />
              </div>
              <div>
                <label className="text-gray-700">Email</label>
                <input
                  type="email"
                  value={user.email}
                  className="w-full p-2 border rounded-lg bg-gray-100"
                  readOnly
                />
              </div>
            </div>
          </div>

          {/* Change Password Section */}
          <div className="mt-6 bg-white p-4 shadow rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Change Password</h2>
            <div className="space-y-3">
              <div>
                <label className="text-gray-700">Current Password</label>
                <input
                  type="password"
                  className="w-full p-2 border rounded-lg"
                  placeholder="Enter current password"
                />
              </div>
              <div>
                <label className="text-gray-700">New Password</label>
                <input
                  type="password"
                  className="w-full p-2 border rounded-lg"
                  placeholder="Enter new password"
                />
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Update Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
