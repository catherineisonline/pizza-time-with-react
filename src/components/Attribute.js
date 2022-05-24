import React from "react";

export default class Attribute extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedAttribute: "",
    };
  }
  render() {
    const { attribute, handleSelectedAttributes, className } = this.props;
    return (
      <ul className={className}>
        {attribute?.items?.map((item) => {
          return (
            <li
            key={item.id}
              onClick={() => {
                this.setState({
                  selectedAttribute: item.value,
                });
                handleSelectedAttributes(attribute.id, item.value);
              }}
              style={
                this.state.selectedAttribute === item.value
                  ? {
                      transition: "all, ease-in-out, 0.3s",
                      color: "white",
                      borderColor: "#fac564",
                    }
                  : null
              }
            >
              {item.value}
            </li>
          );
        })}
      </ul>
    );
  }
}
