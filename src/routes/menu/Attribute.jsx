const Attribute = ({
  attribute,
  handleSelectedAttributes,
  className,
  targetAttribute,
}) => {
  return (
    <ul className={className}>
      {attribute.attributeOptions?.map((item) => {
        return (
          <li
            key={item.id}
            onClick={() => {
              handleSelectedAttributes(attribute.id, item.value);
            }}
            style={
              targetAttribute === item.value
                ? {
                    transition: "all 0.3s ease-in-out",
                    color: "white",
                    borderColor: "#fac564",
                  }
                : undefined
            }>
            {item.value}
          </li>
        );
      })}
    </ul>
  );
};

export default Attribute;
