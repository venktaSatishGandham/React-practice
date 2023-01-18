import React, { useState } from "react";
import Table from "../components/Table";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

export default function SortableTable(props) {
  const { config, data } = props;
  const [sortOrder, setSortOrder] = useState(null); //asc,desc,null
  const [sortBy, setSortBy] = useState(null);

  const handleClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const getIcons = (label, sortOrder, sortBy) => {
    if (label !== sortBy) {
      return (
        <div>
          <BsFillCaretUpFill />
          <BsFillCaretDownFill />
        </div>
      );
    }
    if (sortOrder === null) {
      return (
        <div>
          <BsFillCaretUpFill />
          <BsFillCaretDownFill />
        </div>
      );
    } else if (sortOrder === "asc") {
      return <BsFillCaretUpFill />;
    } else if (sortOrder === "desc") {
      return <BsFillCaretDownFill />;
    }
  };

  const newConfig = config.map((column) => {
    if (column.sortValue) {
      return {
        ...column,
        header: () => (
          <th
            className="cursor-pointer hover:bg-gray-100"
            onClick={() => handleClick(column.label)}
          >
            <div className="flex items-center">
              {getIcons(column.label, sortOrder, sortBy)}
              {column.label}
            </div>
          </th>
        ),
      };
    }
    return column;
  });

  let sortedData = data;

  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;
      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      }
      return (valueA - valueB) * reverseOrder;
    });
  }

  return (
    <>
      <div>
        {sortOrder}-{sortBy}
        <Table {...props} data={sortedData} config={newConfig} />
      </div>
    </>
  );
}
