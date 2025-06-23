import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard({ role }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!role) {
      navigate("/login");
    }
  }, [role, navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const renderDashboard = () => {
    switch (role) {
      case "student":
        return <h2>🎓 Student Dashboard – View & Submit Practicals</h2>;
      case "faculty":
        return <h2>👨‍🏫 Faculty Dashboard – Create & Evaluate Practicals</h2>;
      case "hod":
        return <h2>🧑‍💼 HOD Dashboard – Manage Courses & Faculty</h2>;
      default:
        return <p>⚠️ Unknown Role</p>;
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1>Welcome to Virtual Lab</h1>
        <p><strong>Logged in as:</strong> {role.toUpperCase()}</p>
        {renderDashboard()}
        <button className="logout-button" onClick={handleLogout}>
          🔓 Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
