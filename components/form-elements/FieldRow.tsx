import React from "react";


export const FieldRow: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className = "",
  children,
  ...rest
}) => (
  <div
    className={`flex flex-col sm:flex-row gap-4 ${className}`}
    {...rest}
  >
    {React.Children.map(children, (child) => (
      <div className="flex-1 flex flex-col">{child}</div>
    ))}
  </div>
);