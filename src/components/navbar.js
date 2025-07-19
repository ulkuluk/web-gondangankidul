import React from "react";
import {
  Home,
  Store,
  Navigation,
  Calendar,
  ChevronDown,
  TreePine,
} from "lucide-react";

const Navbar = ({ showMobileMenu, setShowMobileMenu, scrollToSection }) => {
  const navItems = [
    { key: "beranda", label: "Beranda", icon: Home },
    { key: "umkm", label: "UMKM", icon: Store },
    { key: "tempat-penting", label: "Tempat Penting", icon: Navigation },
    { key: "kegiatan", label: "Kegiatan", icon: Calendar },
  ];

  return (
    <nav className="bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-700 to-green-600 rounded-full flex items-center justify-center">
                <TreePine className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">
                  Gondangan Kidul
                </h1>
                <p className="text-xs text-gray-300">KKN.AA.83.009</p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.key)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <item.icon className="w-4 h-4" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-700"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <ChevronDown
              className={`w-5 h-5 text-white transition-transform ${
                showMobileMenu ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {showMobileMenu && (
        <div className="md:hidden bg-gray-800 pb-4">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => scrollToSection(item.key)}
              className="block w-full text-left px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200 flex items-center space-x-2"
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;