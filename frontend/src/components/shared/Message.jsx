import React from "react";

function Message({ variant = "info", children }) {
  const variantStyles = {
    success: "bg-green-100 text-green-800 border border-green-300",
    danger: "bg-red-100 text-red-800 border border-red-300",
    warning: "bg-yellow-100 text-yellow-800 border border-yellow-300",
    info: "bg-blue-100 text-blue-800 border border-blue-300",
  };

  return (
    <div
      className={`w-full rounded-lg px-4 py-3 text-sm font-medium ${
        variantStyles[variant] || variantStyles.info
      }`}
    >
      {children}
    </div>
  );
}

export default Message;