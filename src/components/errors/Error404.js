import React from "react";
export default class Error404 extends React.Component {
  render() {
    document.title = "Error | Pizza Time";
    return (
      <h2 className="error-404">
        Oh, Now! Couldn't find the page you are looking for!
      </h2>
    );
  }
}
