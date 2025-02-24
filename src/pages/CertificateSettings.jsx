const CertificateSettings = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Certificate Management</h1>
      <p className="text-gray-600">Manage issued and received certificates.</p>

      <div className="mt-6 bg-white p-4 shadow rounded-lg">
        <h2 className="text-lg font-semibold">Issued Certificates</h2>
        <p className="text-gray-500">No issued certificates yet.</p>
      </div>

      <div className="mt-6 bg-white p-4 shadow rounded-lg">
        <h2 className="text-lg font-semibold">Received Certificates</h2>
        <p className="text-gray-500">No received certificates yet.</p>
      </div>
    </div>
  );
};

export default CertificateSettings;
