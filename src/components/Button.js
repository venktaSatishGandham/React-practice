import React from "react";

export default function Button({
  children,
  primary,
  secondary,
  success,
  danger,
  warning,
  outline,
  rounde,
}) {
  return <button>{children}</button>;
}
