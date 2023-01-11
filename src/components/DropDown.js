import { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Panel from "./Panel";

function DropDown({ options, value, onChange }) {
  const [showDropDown, setShowDropDown] = useState(false);

  const handleDropDown = () => {
    setShowDropDown((prev) => !prev);
  };

  const handleOptionClick = (values) => {
    setShowDropDown(false);
    onChange(values);
  };

  const dropDownList = options.map((each) => (
    <div
      key={each.value}
      className="hover:bg-sky-100 rounded cursor-pointer p-1"
      onClick={() => {
        handleOptionClick(each);
      }}
    >
      {each.label}
    </div>
  ));

  return (
    <div className="relative w-48">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleDropDown}
      >
        {value?.label || "selected..."}{" "}
        <MdOutlineArrowDropDown style={{ width: "50px", height: "50px" }} />
      </Panel>
      {showDropDown && (
        <Panel className="absolute top-full ">{dropDownList}</Panel>
      )}
    </div>
  );
}
export default DropDown;

<></>;
