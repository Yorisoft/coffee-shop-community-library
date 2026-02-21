import React from "react";
import { NavLink } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="jumbotron">
      <h1>Page Not Found</h1>
      <p>
        <NavLink to="/">Back to Home</NavLink>
      </p>
    </div>
  );
}

export default NotFoundPage;
