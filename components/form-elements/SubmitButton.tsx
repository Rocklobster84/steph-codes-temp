"use client";

import React from "react";
import { Loader2 } from "lucide-react";
import { SubmitButtonProps } from "types";

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  children = "Submit",
  loading = false,
  className = "",
  disabled,
  ...rest
}) => {
  const isDisabled = disabled || loading;

  return (
    <button
      type="submit"
      disabled={isDisabled}
      className={`inline-flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-2 font-medium text-white shadow-sm transition-colors duration-200 hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:bg-accent disabled:cursor-not-allowed disabled:bg-gray-400 ${className}`}
      {...rest}
    >
      {loading && <Loader2 size={16} className="animate-spin" />}
      <span>{children}</span>
    </button>
  );
};