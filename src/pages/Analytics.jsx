import { LineChart, Line, PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

const lineData = [
  { name: "Jan", issued: 30, received: 20 },
  { name: "Feb", issued: 50, received: 35 },
  { name: "Mar", issued: 70, received: 45 },
  { name: "Apr", issued: 90, received: 60 },
];

const pieData = [
  { name: "Education", value: 45 },
  { name: "Work", value: 25 },
  { name: "Training", value: 30 },
];

const barData = [
  { name: "Q1", issued: 120, received: 90 },
  { name: "Q2", issued: 150, received: 110 },
  { name: "Q3", issued: 180, received: 130 },
  { name: "Q4", issued: 200, received: 170 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const Analytics = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Analytics</h1>
      <p className="text-gray-600">Insights on issued and received certificates.</p>

      {/* Line Chart */}
      <div className="mt-6 bg-white p-4 shadow rounded-lg">
        <h2 className="text-lg font-semibold">Issued vs. Received Certificates (Monthly)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="issued" stroke="#8884d8" />
            <Line type="monotone" dataKey="received" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="mt-6 bg-white p-4 shadow rounded-lg flex justify-center">
        <h2 className="text-lg font-semibold">Certificate Categories</h2>
        <ResponsiveContainer width={300} height={300}>
          <PieChart>
            <Pie data={pieData} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value">
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* ✅ Added Bar Chart to Fix the Warning */}
      <div className="mt-6 bg-white p-4 shadow rounded-lg">
        <h2 className="text-lg font-semibold">Quarterly Performance</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="issued" fill="#8884d8" />
            <Bar dataKey="received" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics;
