import React from "react";
import { TrendingUp } from "lucide-react";

const StatCard = ({ title, value, icon: Icon, color, trend }) => (
  <div className="bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-400 text-sm font-medium">{title}</p>
        <p className="text-3xl font-bold text-white mt-1">{value}</p>
        
      </div>
      <div className={`p-3 rounded-full ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
    </div>
  </div>
);

export default StatCard;