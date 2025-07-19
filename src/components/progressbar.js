import React from "react";

const ProgressBar = ({ label, value, max, color }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-medium text-gray-300">{label}</span>
      <span className="text-sm font-bold text-white">{value} orang</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-3">
      <div
        className={`h-3 rounded-full ${color} transition-all duration-500`}
        style={{ width: `${(value / max) * 100}%` }}
      ></div>
    </div>
  </div>
);

export default ProgressBar;