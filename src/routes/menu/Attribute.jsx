

const Attribute = ({ attribute, handleSelectedAttributes, className, targetAttribute }) => {
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

export default Attribute;
