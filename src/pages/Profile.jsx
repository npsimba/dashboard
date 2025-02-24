const Profile = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Profile</h1>
      <p className="text-gray-600">Manage your account details.</p>

      <div className="mt-6 bg-white p-4 shadow rounded-lg">
        <h2 className="text-lg font-semibold">User Information</h2>
        <input type="text" placeholder="Full Name" className="border p-2 w-full mt-2" />
        <input type="email" placeholder="Email" className="border p-2 w-full mt-2" />
      </div>
    </div>
  );
};

export default Profile;
