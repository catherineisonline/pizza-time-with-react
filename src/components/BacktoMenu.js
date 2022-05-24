import React from "react";
import { Link } from "react-router-dom";

export default class BacktoMenu extends React.Component {

  render() {
    const {className } = this.props;
    return (
      <>
        <Link to="/menu" className={className}>
          Back to menu
        </Link>
      </>
    );
  }
}
