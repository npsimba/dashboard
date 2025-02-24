import StatsWidget from "../components/StatsWidget";
import ActivityLog from "../components/ActivityLog"; 
import Charts from "../components/Charts";  
import { useState, useEffect } from "react";

const UserDashboard = () => {
  // State for Dynamic Data (Replace with real API later)
  const [dashboardData, setDashboardData] = useState({
    certificatesIssued: 0,
    certificatesReceived: 0,
    activityLogs: [],
    charts: {
      issuedReceived: [],
      categoryDistribution: [],
      issuedOverTime: []
    }
  });

  // Simulated API Call (Replace with real fetch API)
  useEffect(() => {
    const fetchDashboardData = async () => {
      const data = {
        certificatesIssued: 24,
        certificatesReceived: 15,
        activityLogs: [
          "You issued a certificate to John Doe",
          "You received a certificate from XYZ Org",
          "Certificate for AI/ML course added"
        ],
        charts: {
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
        }
      };
      setDashboardData(data);
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="p-6 bg-gray-100 flex-1">
      <h1 className="text-2xl font-bold">User Dashboard</h1>
      <p className="text-gray-600">Welcome to your certificate management dashboard.</p>

      {/* Stats Widgets Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <StatsWidget title="Certificates Issued" count={dashboardData.certificatesIssued} />
        <StatsWidget title="Certificates Received" count={dashboardData.certificatesReceived} />
      </div>

      {/* Activity Log Section */}
      <div className="mt-6">
        <ActivityLog logs={dashboardData.activityLogs} />
      </div>

      {/* Charts Section */}
      <div className="mt-6"> 
        <Charts data={dashboardData.charts} />
      </div>
    </div>
  );
};

export default UserDashboard;
