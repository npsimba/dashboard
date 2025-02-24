import PropTypes from "prop-types";
import { 
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer, 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, 
  LineChart, Line 
} from "recharts";

// Colors for Pie Chart
const COLORS = ["#4CAF50", "#FF9800"];

const Charts = ({ data }) => {
  if (!data) return <p>Loading charts...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {/* Pie Chart */}
      <div className="bg-white p-4 shadow-md rounded-xl">
        <h2 className="text-lg font-semibold mb-4">Issued vs Received</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data.issuedReceived}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.issuedReceived.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="bg-white p-4 shadow-md rounded-xl">
        <h2 className="text-lg font-semibold mb-4">Category-wise Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data.categoryDistribution}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="issued" fill="#4CAF50" />
            <Bar dataKey="received" fill="#FF9800" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Line Chart */}
      <div className="col-span-1 md:col-span-2 bg-white p-4 shadow-md rounded-xl">
        <h2 className="text-lg font-semibold mb-4">Issued Certificates Over Time</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data.issuedOverTime}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="issued" stroke="#4CAF50" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// PropTypes validation
Charts.propTypes = {
  data: PropTypes.shape({
    issuedReceived: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
      })
    ).isRequired,
    categoryDistribution: PropTypes.arrayOf(
      PropTypes.shape({
        category: PropTypes.string.isRequired,
        issued: PropTypes.number.isRequired,
        received: PropTypes.number.isRequired,
      })
    ).isRequired,
    issuedOverTime: PropTypes.arrayOf(
      PropTypes.shape({
        month: PropTypes.string.isRequired,
        issued: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Charts;
