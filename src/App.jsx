import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import UserDashboard from "./pages/UserDashboard";
//import CertificateSettings from "./pages/CertificateSettings";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import IssuerDashboard from "./pages/IssuerDashboard";
import IssuerCertificates from "./pages/IssuerCertificates";
import IssuerApprovals from "./pages/IssuerApprovals";
import IssuerNavbar from "./components/IssuerNavbar";
 import CertificateSettings from "./pages/CertificateSettings";

// 🟢 User Layout
const UserLayout = () => (
  <div className="flex h-screen">
    <Sidebar />
    <div className="flex-1 flex flex-col">
      <Navbar />
      <div className="p-6 bg-gray-100 flex-1">
        <Outlet /> {/* Renders the child component */}
      </div>
    </div>
  </div>
);

// 🔵 Issuer Layout
const IssuerLayout = () => (
  <div className="flex flex-col h-screen">
    <IssuerNavbar />
    <div className="p-6 bg-gray-100 flex-1">
      <Outlet />
    </div>
  </div>
);

function App() {
  return (
    <Routes>
      {/* 🟢 User Routes (With Sidebar & Navbar) */}
      <Route path="/user" element={<UserLayout />}>
        <Route path="dashboard" element={<UserDashboard />} />
        <Route path="certificates" element={<CertificateSettings />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/user/dashboard" />} />
      </Route>

      {/* 🔵 Issuer Routes (With Navbar, No Sidebar) */}
      <Route path="/issuer" element={<IssuerLayout />}>
        <Route path="dashboard" element={<IssuerDashboard />} />
        <Route path="certificates" element={<IssuerCertificates />} />
        <Route path="approvals" element={<IssuerApprovals />} />
        <Route path="*" element={<Navigate to="/issuer/dashboard" />} />
      </Route>

      {/* Default Redirect */}
      <Route path="*" element={<Navigate to="/user/dashboard" />} />
    </Routes>
  );
}

export default App;
