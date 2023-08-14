import React from "react";
import GoBackBtn from "./GoBackBtn";

export default class SingleItem extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <main className="single-item-container">
        <GoBackBtn />
        {item}
      </main>
    );
  }
}
