import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatsWidget from "../components/StatsWidget";
import Charts from "../components/Charts";

const IssuerDashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />
        
        {/* Dashboard Content */}
        <div className="p-6 bg-gray-100 flex-1">
          <h1 className="text-2xl font-bold">Issuer Dashboard</h1>
          <p className="text-gray-600">Track the certificates you have issued.</p>

          {/* Stats Widgets Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatsWidget title="Total Certificates Issued" count={50} />
            <StatsWidget title="Categories Tracked" count={5} />
          </div>
          
          {/* Charts Section */}
          <div className="mt-6"> 
            <Charts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssuerDashboard;
