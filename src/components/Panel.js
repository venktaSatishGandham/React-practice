import React from "react";
import classNames from "classnames";
export default function Panel({ children, className, ...rest }) {
  const finalClassNames = classNames(
    "border  rounded p-3 bg-white w-full shadow",
    className
  );

  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}
