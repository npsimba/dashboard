import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatsWidget from "../components/StatsWidget";
import ActivityLog from "../components/ActivityLog"; 
import Charts from "../components/Charts"; 


const UserDashboard = () => {
    const chartData = {
        issuedReceived: [
          { name: "Issued", value: 24 },
          { name: "Received", value: 15 }
        ],
        categoryDistribution: [
          { category: "Web Dev", issued: 8, received: 5 },
          { category: "AI/ML", issued: 6, received: 4 },
          { category: "Cybersecurity", issued: 5, received: 3 }
        ],
        issuedOverTime: [
          { month: "Jan", issued: 2 },
          { month: "Feb", issued: 5 },
          { month: "Mar", issued: 7 },
          { month: "Apr", issued: 10 }
        ]
      };
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
          <h1 className="text-2xl font-bold">User Dashboard</h1>
          <p className="text-gray-600">Welcome to your certificate management dashboard.</p>

          {/* Stats Widgets Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatsWidget title="Certificates Issued" count={24} />
            <StatsWidget title="Certificates Received" count={15} />
          </div>
          {/* Activity Log Section */}
         <div className="mt-6">
            <ActivityLog />
           </div>
           {/* Charts Section */}
           <div className="mt-6"> 
             <Charts data={chartData} />
           </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
