import React from "react";
import { Link } from "react-router-dom";

export default class GoBackBtn extends React.Component {
  render() {
    return (
      <Link to="/menu" className="back-btn">
        ← Back
      </Link>
    );
  }
}
