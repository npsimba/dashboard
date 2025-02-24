import IssuerNavbar from "../components/IssuerNavbar";

function IssuerDashboard() {
  return (
    <div className="h-screen bg-gray-100">
      {/* Issuer Navbar */}
      <IssuerNavbar />

      {/* Dashboard Content */}
      <div className="p-6">
        <h2 className="text-xl font-semibold">Track the certificates you have issued.</h2>

        <div className="grid grid-cols-2 gap-6 mt-6">
          {/* Issued Certificates */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Certificates Issued</h3>
            <p className="text-3xl font-bold">200</p>
          </div>

          {/* Pending Approvals */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Pending Approvals</h3>
            <p className="text-3xl font-bold">10</p>
          </div>

          {/* Add Charts & More Features Here */}
        </div>
      </div>
    </div>
  );
}

export default IssuerDashboard;
