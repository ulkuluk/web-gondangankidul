import React from "react";
import { Calendar, TreePine } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
              <TreePine className="w-6 h-6 text-green-300" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Dusun Gondangan Kidul</h3>
              <p className="text-gray-300">KKN.AA.83.009</p>
            </div>
          </div>
          <p className="text-gray-300 mb-2">Website Profil Dusun Gondangan Kidul</p>
          <p className="text-gray-300 mb-4">
            Dibuat untuk Program KKN - Desa Pakunden, Kecamatan Ngluwar,
            Kabupaten Magelang
          </p>
          <div className="flex justify-center items-center space-x-2 text-gray-300">
            <Calendar className="w-4 h-4" />
            <span>© 2024 - Program KKN</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;