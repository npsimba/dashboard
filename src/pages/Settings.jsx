const Settings = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Settings</h1>
      <p className="text-gray-600">Manage your account settings.</p>

      <div className="mt-6 bg-white p-4 shadow rounded-lg">
        <h2 className="text-lg font-semibold">Change Password</h2>
        <input type="password" placeholder="Current Password" className="border p-2 w-full mt-2" />
        <input type="password" placeholder="New Password" className="border p-2 w-full mt-2" />
      </div>
    </div>
  );
};

export default Settings;
