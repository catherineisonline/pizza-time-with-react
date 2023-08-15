import React from "react";
import { Link } from "react-router-dom";

const GoBackBtn = () => {
  return (
    <Link to="/menu" className="back-btn">
      ← Back
    </Link>
  );
}

export default GoBackBtn;
