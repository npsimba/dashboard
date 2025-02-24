import { LineChart, Line, PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const Charts = ({ data }) => {
  if (!data || !data.issuedOverTime) return <p>Loading charts...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {/* Line Chart */}
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Issued Certificates Over Time</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data.issuedOverTime}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="issued" stroke="#4CAF50" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Certificate Categories</h2>
        <PieChart width={300} height={300}>
          <Pie data={data.issuedOverTime} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="issued">
            {data.issuedOverTime.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default Charts;
