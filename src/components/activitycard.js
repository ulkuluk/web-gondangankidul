import React from "react";
import { Calendar } from "lucide-react";

const ActivityCard = ({ nama, tanggal, deskripsi, icon: Icon }) => (
  <div className="bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-700">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-bold text-white">{nama}</h3>
      {Icon && (
        <div className="p-2 rounded-full bg-green-700">
          <Icon className="w-5 h-5 text-white" />
        </div>
      )}
    </div>
    <p className="text-gray-400 text-sm mb-3 flex items-center">
      <Calendar className="w-4 h-4 mr-2 text-gray-500" />
      {tanggal}
    </p>
    <p className="text-gray-300">{deskripsi}</p>
  </div>
);

export default ActivityCard;