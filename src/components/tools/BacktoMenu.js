import React from "react";
import { Link } from "react-router-dom";

export default class BacktoMenu extends React.Component {
  render() {
    const { className, ResetLocation } = this.props;
    return (
      <Link to="/menu" className={className} onClick={ResetLocation}>
        Back to menu
      </Link>
    );
  }
}
