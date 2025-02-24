export const fetchDashboardStats = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          issued: 120,
          received: 80,
        });
      }, 1000);
    });
  };
  
  export const fetchActivityLogs = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, action: "Issued Certificate", user: "John Doe", timestamp: "2025-02-20 10:30 AM" },
          { id: 2, action: "Received Certificate", user: "Jane Smith", timestamp: "2025-02-19 3:15 PM" },
        ]);
      }, 1000);
    });
  };
  
  export const fetchChartData = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          issuedReceived: [
            { name: "Issued", value: 120 },
            { name: "Received", value: 80 },
          ],
          categoryDistribution: [
            { category: "Education", issued: 50, received: 30 },
            { category: "Workshops", issued: 40, received: 20 },
            { category: "Seminars", issued: 30, received: 30 },
          ],
          issuedOverTime: [
            { month: "Jan", issued: 20 },
            { month: "Feb", issued: 35 },
            { month: "Mar", issued: 50 },
            { month: "Apr", issued: 15 },
          ],
        });
      }, 1000);
    });
  };
  