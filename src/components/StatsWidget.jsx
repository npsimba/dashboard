import PropTypes from "prop-types";
import { FaFile } from "react-icons/fa6";

const StatsWidget = ({ title, count }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex items-center space-x-4 border border-gray-200">
      {/* Icon */}
      <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
        <FaFile className="text-3xl" />
      </div>

      {/* Title & Count */}
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-2xl font-bold">{count}</p>
      </div>
    </div>
  );
};

// ✅ **PropTypes Validation**
StatsWidget.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default StatsWidget;
