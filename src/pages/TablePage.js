import React from "react";
import SortableTable from "../components/sortableTable";

export default function TablePage() {
  const data = [
    { name: "orange", color: "bg-orange-400", score: 5 },
    { name: "Apple", color: "bg-red-700", score: 3 },
    { name: "Banana", color: "bg-yellow-300", score: 1 },
    { name: "Lime", color: "bg-green-200", score: 4 },
    { name: "Grapes", color: "bg-violet-900", score: 2 },
  ];

  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
  ];

  const keyFn = (dataObj) => dataObj.name;

  return (
    <>
      <div>TablePage</div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </>
  );
}
