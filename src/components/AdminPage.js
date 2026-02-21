import React from "react";
import AdminList from "./BookListAdmin";
import "bootstrap/dist/css/bootstrap.min.css";
import CenterImage from "../assets/many-old-bookss.jpg";
import { Link } from "react-router-dom";

function AdminPage() {
  const jumboStyle = {
    height: 700,
    textAlign: "bottom",
    background: "#17a2b8",
    backgroundImage: `url(${CenterImage})`,
    backgroundSize: "cover",
  };
  const adminText = {
    marginTop: "22rem",
    color: "#FFEB3B",
    fontSize: "70px",
  };

  return (
    <>
      <div className="jumbotron" style={jumboStyle}>
        <h1 style={adminText}>Admin Page</h1>

        <Link to="/bookEditAdmin">
          <button
            className="btn btn-primary"
            style={{ marginTop: "3rem", marginLeft: "17rem" }}
          >
            Edit Library
          </button>
        </Link>
      </div>
      <h3 style={{ marginLeft: "9rem", color: "#17a2b8" }}> Edit Library </h3>
      <AdminList />
    </>
  );
}

export default AdminPage;
