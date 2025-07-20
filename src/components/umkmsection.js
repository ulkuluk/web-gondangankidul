// src/components/umkm.js
import React, { useState } from "react";
import { MapPin, Phone, ChevronLeft, ChevronRight, ArrowRight, Grid3X3 } from "lucide-react";

const UmkmSection = ({ umkmData, openMaps, onViewAll }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const nextImage = (umkmId) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [umkmId]: ((prev[umkmId] || 0) + 1) % 3
    }));
  };

  const prevImage = (umkmId) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [umkmId]: ((prev[umkmId] || 0) - 1 + 3) % 3
    }));
  };

  const goToImage = (umkmId, index) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [umkmId]: index
    }));
  };

  // Placeholder images - Anda bisa mengganti dengan URL gambar sebenarnya
  const getPlaceholderImages = (umkmId) => [
    `https://via.placeholder.com/400x200/4B5563/FFFFFF?text=UMKM+${umkmId}+Foto+1`,
    `https://via.placeholder.com/400x200/6B7280/FFFFFF?text=UMKM+${umkmId}+Foto+2`,
    `https://via.placeholder.com/400x200/9CA3AF/FFFFFF?text=UMKM+${umkmId}+Foto+3`
  ];

  // Tampilkan hanya 4 UMKM pertama di section utama
  const displayedUmkm = umkmData.slice(0, 4);

  return (
    <div id="umkm" className="pt-16 pb-8">
      {/* Modifikasi di bagian ini */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center"> {/* Hapus flex, flex-col, dll. Biarkan teks di tengah */}
          <h1 className="text-3xl font-bold text-white mb-2">
            UMKM Dusun Gondangan Kidul
          </h1>
          <p className="text-gray-300 mb-6"> {/* Tambahkan mb-6 untuk jarak dari tombol */}
            Usaha Mikro, Kecil, dan Menengah yang berkembang di dusun kami
          </p>
        </div>
        <div className="flex justify-end"> {/* Ini adalah kunci untuk menggeser tombol ke kanan */}
          <button
            onClick={onViewAll}
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg"
          >
            <Grid3X3 className="w-5 h-5" />
            <span>Lihat Semua UMKM</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      {/* Akhir modifikasi */}

      <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {displayedUmkm.map((umkm) => {
          const images = umkm.foto || getPlaceholderImages(umkm.id);
          const currentIndex = currentImageIndex[umkm.id] || 0;
          
          return (
            <div
              key={umkm.id}
              className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-700"
            >
              {/* Carousel Section */}
              <div className="relative h-48 bg-gray-700">
                <img
                  src={images[currentIndex]}
                  alt={`${umkm.nama} - Foto ${currentIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Buttons */}
                <button
                  onClick={() => prevImage(umkm.id)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-1 rounded-full transition-all duration-200"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <button
                  onClick={() => nextImage(umkm.id)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-1 rounded-full transition-all duration-200"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(umkm.id, index)}
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
                  <h3 className="text-xl font-bold text-white">{umkm.nama}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      umkm.jenis === "Kuliner"
                        ? "bg-green-700 text-green-100"
                        : umkm.jenis === "Retail"
                        ? "bg-blue-700 text-blue-100"
                        : umkm.jenis === "Kerajinan"
                        ? "bg-yellow-700 text-yellow-100"
                        : "bg-purple-700 text-purple-100"
                    }`}
                  >
                    {umkm.jenis}
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-400">
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="text-sm">{umkm.kontak}</span>
                  </div>
                  <p className="text-gray-300">{umkm.deskripsi}</p>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => openMaps(umkm.koordinat)}
                    className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Lokasi</span>
                  </button>
                  <a
                    href={`tel:${umkm.kontak}`}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Hubungi</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Indikator jika ada lebih banyak UMKM */}
      {umkmData.length > 4 && (
        <div className="text-center mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-400 mb-4">
            Menampilkan 4 dari {umkmData.length} UMKM
          </p>
        </div>
      )}
    </div>
  );
};

export default UmkmSection;