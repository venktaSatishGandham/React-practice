import DropDown from "./components/DropDown";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (value) => {
    setSelected(value);
  };

  const options = [
    { label: "RED", value: "red" },
    { label: "BLACK", value: "black" },
    { label: "WHITE", value: "white" },
    { label: "GREEN", value: "green" },
    { label: "ORANGE", value: "orange" },
  ];

  return (
    <div>
      <DropDown options={options} value={selected} onChange={handleSelect} />
    </div>
  );
}

export default App;
