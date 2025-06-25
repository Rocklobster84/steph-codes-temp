"use client";

import React from "react";
import { FormLabelProps, TextInputProps } from "@/types";
import { Info } from "lucide-react";

export const FormLabel: React.FC<FormLabelProps> = ({
  htmlFor,
  required = false,
  tooltip,
  className = "",
  children,
  ...rest
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`mb-1 flex items-center gap-1 cursor-pointer text-white-700 transition-colors duration-200 focus-visible:bg-accent peer-focus:bg-accent-hover ${className}`}
      {...rest}
    >
      <span>{children}</span>
      {required && <span className="text-red-600">*</span>}

      {tooltip && (
        <span className="relative group">
          <Info
            size={16}
            className="text-gray-400 group-hover:text-gray-700 group-focus-within:text-gray-700"
            aria-label="More info"
          />
          <span
            role="tooltip"
            className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-max -translate-x-1/2 rounded-md bg-gray-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
          >
            {tooltip}
          </span>
        </span>
      )}
    </label>
  );
};

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ className = "", error, ...rest }, ref) => {
    const baseClasses =
      "peer w-full rounded-md border px-3 py-2 shadow-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50";

    const stateClasses = error
      ? "border-red-600 focus-visible:ring-red-600"
      : "border-gray-300 focus-visible:ring-blue-600";

    return (
      <div className="flex flex-col gap-1">
        <input
          ref={ref}
          className={`${baseClasses} ${stateClasses} ${className}`}
          {...rest}
        />
        {error && (
          <span className="text-sm text-red-600 peer-focus:text-red-600">
            {error}
          </span>
        )}
      </div>
    );
  }
);
TextInput.displayName = "TextInput";

