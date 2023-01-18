import React from "react";

function Table({ data, config, keyFn }) {
  const renderHeaders = config.map((column) => {
    if (column.header) {
      return (
        <React.Fragment key={column.label}>{column.header()}</React.Fragment>
      );
    }
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((rowData) => {
    const renderdCells = config.map((column) => {
      return <td key={column.label}>{column.render(rowData)}</td>;
    });
    return (
      <tr key={keyFn(rowData)} className="border-b ">
        {renderdCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2 ml-10">
      <thead>
        <tr className="border-b-2 ">{renderHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
