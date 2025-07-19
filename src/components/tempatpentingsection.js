import React, { useState } from "react";
import { MapPin, Heart, Droplets, Mountain, Building, ChevronLeft, ChevronRight } from "lucide-react";

const ImportantPlacesSection = ({ tempatPenting, openMaps }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const nextImage = (tempatId) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [tempatId]: ((prev[tempatId] || 0) + 1) % 3
    }));
  };

  const prevImage = (tempatId) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [tempatId]: ((prev[tempatId] || 0) - 1 + 3) % 3
    }));
  };

  const goToImage = (tempatId, index) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [tempatId]: index
    }));
  };

  // Placeholder images - Anda bisa mengganti dengan URL gambar sebenarnya
  const getPlaceholderImages = (tempatId, kategori) => [
    `https://via.placeholder.com/400x200/4B5563/FFFFFF?text=${kategori}+${tempatId}+Foto+1`,
    `https://via.placeholder.com/400x200/6B7280/FFFFFF?text=${kategori}+${tempatId}+Foto+2`,
    `https://via.placeholder.com/400x200/9CA3AF/FFFFFF?text=${kategori}+${tempatId}+Foto+3`
  ];

  return (
    <div id="tempat-penting" className="pt-16 pb-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">Tempat Penting</h1>
        <p className="text-gray-300">
          Lokasi-lokasi penting di Dusun Gondangan Kidul
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {tempatPenting.map((tempat) => {
          const images = tempat.foto || getPlaceholderImages(tempat.id, tempat.kategori);
          const currentIndex = currentImageIndex[tempat.id] || 0;
          
          return (
            <div
              key={tempat.id}
              className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-700"
            >
              {/* Carousel Section */}
              <div className="relative h-48 bg-gray-700">
                <img
                  src={images[currentIndex]}
                  alt={`${tempat.nama} - Foto ${currentIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Buttons */}
                <button
                  onClick={() => prevImage(tempat.id)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-1 rounded-full transition-all duration-200"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <button
                  onClick={() => nextImage(tempat.id)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-1 rounded-full transition-all duration-200"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(tempat.id, index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentIndex
                          ? "bg-white"
                          : "bg-white bg-opacity-50 hover:bg-opacity-75"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{tempat.nama}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1 ${
                      tempat.kategori === "Tempat Ibadah"
                        ? "bg-green-700 text-green-100"
                        : tempat.kategori === "Mata Air"
                        ? "bg-blue-700 text-blue-100"
                        : tempat.kategori === "Wisata"
                        ? "bg-yellow-700 text-yellow-100"
                        : "bg-purple-700 text-purple-100"
                    }`}
                  >
                    {tempat.kategori === "Tempat Ibadah" && (
                      <Heart className="w-4 h-4" />
                    )}
                    {tempat.kategori === "Mata Air" && (
                      <Droplets className="w-4 h-4" />
                    )}
                    {tempat.kategori === "Wisata" && (
                      <Mountain className="w-4 h-4" />
                    )}
                    {tempat.kategori === "Fasilitas Umum" && (
                      <Building className="w-4 h-4" />
                    )}
                    <span>{tempat.kategori}</span>
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  
                  <p className="text-gray-300">{tempat.deskripsi}</p>
                </div>

                <button
                  onClick={() => openMaps(tempat.koordinat)}
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <MapPin className="w-5 h-5" />
                  <span>Lihat Lokasi</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImportantPlacesSection;