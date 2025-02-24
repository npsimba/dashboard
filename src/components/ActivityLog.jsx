import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // Success & Error Icons

const ActivityLog = () => {
  const activities = [
    { id: 1, type: "Issued", certificate: "React Developer", user: "John Doe", status: "success" },
    { id: 2, type: "Received", certificate: "Data Science", user: "Alice Smith", status: "success" },
    { id: 3, type: "Issued", certificate: "MERN Stack", user: "Michael Lee", status: "error" },
  ];

  return (
    <div className="bg-white p-4 shadow-md rounded-xl">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id} className="flex justify-between items-center py-2 border-b last:border-none">
            <div>
              <p className="text-sm font-medium">{activity.user} - {activity.certificate}</p>
              <p className="text-xs text-gray-500">{activity.type}</p>
            </div>
            {activity.status === "success" ? (
              <FaCheckCircle className="text-green-500" />
            ) : (
              <FaTimesCircle className="text-red-500" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityLog;
