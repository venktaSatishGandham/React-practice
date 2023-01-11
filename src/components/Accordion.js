import { useState } from "react";
import { BsCaretLeft, BsCaretDown } from "react-icons/bs";
function Accordion({ items }) {
  const [extendedIndex, setExtendedIndex] = useState(null);

  const handleOnclick = (indexValue) => {
    if (extendedIndex === indexValue) {
      setExtendedIndex(null);
    } else {
      setExtendedIndex(indexValue);
    }
  };

  const renderedItems = items.map((each, index) => {
    const showBootomContent = index === extendedIndex;

    const icon = (
      <span className="text-2xl">
        {showBootomContent ? <BsCaretDown /> : <BsCaretLeft />}
      </span>
    );

    return (
      <div key={each.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => {
            handleOnclick(index);
          }}
        >
          {each.label}
          {icon}
        </div>
        {showBootomContent && (
          <div className="border-b p-5">{each.content}</div>
        )}
      </div>
    );
  });
  return (
    <div className="border-x border-t rounded mx-40 mt-20">{renderedItems}</div>
  );
}

export default Accordion;
