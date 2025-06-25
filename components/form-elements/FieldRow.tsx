import React from "react";

interface FieldRowProps extends React.HTMLAttributes<HTMLDivElement> {}

export const FieldRow: React.FC<FieldRowProps> = ({
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