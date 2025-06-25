"use client";

import React from "react";
import { TextAreaProps } from "@/types";

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className = "", error, rows = 3, ...rest }, ref) => {
    const baseClasses =
      "peer w-full rounded-md border px-3 py-2 shadow-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50 resize-none";

    const stateClasses = error
      ? "border-red-600 focus-visible:ring-red-600"
      : "border-gray-300 focus-visible:ring-blue-600";

    return (
      <div className="flex flex-col gap-1">
        <textarea
          ref={ref}
          rows={rows}
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
TextArea.displayName = "TextArea";