import PropTypes from "prop-types";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar should be here only ONCE */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Navbar should be here only ONCE */}
        <Navbar />

        {/* Main Page Content */}
        <div className="p-6 bg-gray-100 flex-1">{children}</div>
      </div>
    </div>
  );
};

// ✅ Fix: Add PropTypes validation
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
