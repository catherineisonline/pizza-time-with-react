import React from "react";
import { Link } from "react-router-dom";
import ResetLocation from "../helpers/ResetLocation";

export default class BacktoMenu extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <Link to="/menu" className={className} onClick={ResetLocation}>
        Back to menu
      </Link>
    );
  }
}
