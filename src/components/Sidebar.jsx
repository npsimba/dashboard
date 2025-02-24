import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, LayoutDashboard, FileText, BarChart3, Settings } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`h-screen bg-gray-900 text-white ${isOpen ? "w-64" : "w-20"} transition-all duration-300 p-4 flex flex-col`}> 
      <button
        className="text-white mb-6 self-end"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <div className="flex items-center justify-center mb-6">
        <span className="text-xl font-bold">{isOpen ? "Certificate Dashboard" : "CD"}</span>
      </div>
      <nav className="space-y-4 flex-1">
        <Link to="/user/dashboard" className="flex items-center gap-4 p-3 hover:bg-gray-800 rounded-lg">
          <LayoutDashboard size={20} /> {isOpen && "Dashboard"}
        </Link>
        <Link to="/user/certificates" className="flex items-center gap-4 p-3 hover:bg-gray-800 rounded-lg">
          <FileText size={20} /> {isOpen && "Certificates"}
        </Link>
        <Link to="/user/analytics" className="flex items-center gap-4 p-3 hover:bg-gray-800 rounded-lg">
          <BarChart3 size={20} /> {isOpen && "Analytics"}
        </Link>
        <Link to="/user/settings" className="flex items-center gap-4 p-3 hover:bg-gray-800 rounded-lg">
          <Settings size={20} /> {isOpen && "Settings"}
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;