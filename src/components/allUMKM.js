import React, { useState } from "react";
import { MapPin, Phone, ChevronLeft, ChevronRight, ArrowLeft, Search, Filter, Star, Clock, Eye } from "lucide-react";

const AllUmkmPage = ({ umkmData, openMaps, onBack }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [filterJenis, setFilterJenis] = useState("Semua");

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

  const getPlaceholderImages = (umkmId) => [
    `https://via.placeholder.com/400x200/4B5563/FFFFFF?text=UMKM+${umkmId}+Foto+1`,
    `https://via.placeholder.com/400x200/6B7280/FFFFFF?text=UMKM+${umkmId}+Foto+2`,
    `https://via.placeholder.com/400x200/9CA3AF/FFFFFF?text=UMKM+${umkmId}+Foto+3`
  ];

  // Filter dan search functionality
  const filteredUmkm = umkmData.filter(umkm => {
    const matchesSearch = umkm.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          umkm.deskripsi.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterJenis === "Semua" || umkm.jenis === filterJenis;
    return matchesSearch && matchesFilter;
  });

  // Get unique jenis for filter
  const jenisOptions = ["Semua", ...new Set(umkmData.map(umkm => umkm.jenis))];

  const getJenisColor = (jenis) => {
    switch(jenis) {
      case "Kuliner": return "from-green-500 to-green-600";
      case "Retail": return "from-blue-500 to-blue-600";
      case "Kerajinan": return "from-yellow-500 to-yellow-600";
      default: return "from-purple-500 to-purple-600";
    }
  };

  const getJenisIcon = (jenis) => {
    switch(jenis) {
      case "Kuliner": return "🍽️";
      case "Retail": return "🛍️";
      case "Kerajinan": return "🎨";
      default: return "💼";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, #4F46E5 0%, transparent 50%), radial-gradient(circle at 75% 75%, #06B6D4 0%, transparent 50%)'
        }}></div>
      </div>

      {/* Header */}
      <div className="bg-gray-800/80 backdrop-blur-md sticky top-0 z-10 border-b border-gray-700/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-200 hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Kembali</span>
            </button>
            <div className="text-center">
              <h1 className="text-3xl font-bold text-white">
                UMKM Dusun Gondangan Kidul
              </h1>
              <p className="text-gray-400 text-sm mt-1">Dukung produk lokal terbaik</p>
            </div>
            <div className="w-20"></div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-400 transition-colors" />
              <input
                type="text"
                placeholder="Cari UMKM favorit Anda..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-xl py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-200"
              />
            </div>
            <div className="relative group">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-400 transition-colors" />
              <select
                value={filterJenis}
                onChange={(e) => setFilterJenis(e.target.value)}
                className="bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-xl py-3 pl-10 pr-8 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-200"
              >
                {jenisOptions.map(jenis => (
                  <option key={jenis} value={jenis} className="bg-gray-800">
                    {jenis}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        {/* Results Info */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-green-600 rounded-lg px-4 py-2">
                <p className="text-white font-medium">
                  {filteredUmkm.length} dari {umkmData.length} UMKM
                </p>
              </div>
              {searchTerm && (
                <div className="text-gray-400 text-sm">
                  Hasil pencarian "{searchTerm}"
                </div>
              )}
            </div>
          </div>
        </div>

        {/* UMKM Grid */}
        {filteredUmkm.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUmkm.map((umkm) => {
              const images = umkm.foto || getPlaceholderImages(umkm.id);
              const currentIndex = currentImageIndex[umkm.id] || 0;
              
              return (
                <div
                  key={umkm.id}
                  className="bg-gray-800/40 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 border border-gray-700/50 hover:border-gray-600/50 flex flex-col hover:scale-105 hover:-translate-y-1 group"
                >
                  {/* Carousel Section */}
                  <div className="relative h-52 bg-gray-700 overflow-hidden">
                    <img
                      src={images[currentIndex]}
                      alt={`${umkm.nama} - Foto ${currentIndex + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Navigation Buttons */}
                    <button
                      onClick={() => prevImage(umkm.id)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-sm hover:bg-black/80 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    
                    <button
                      onClick={() => nextImage(umkm.id)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-sm hover:bg-black/80 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToImage(umkm.id, index)}
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                            index === currentIndex
                              ? "bg-white scale-110"
                              : "bg-white/50 hover:bg-white/75"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`bg-gradient-to-r ${getJenisColor(umkm.jenis)} px-3 py-1 rounded-full text-white text-sm font-medium shadow-lg flex items-center space-x-1`}>
                        <span>{getJenisIcon(umkm.jenis)}</span>
                        <span>{umkm.jenis}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                        {umkm.nama}
                      </h3>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-400">
                        <Phone className="w-4 h-4 mr-2 text-blue-400" />
                        <span className="text-sm font-medium">{umkm.kontak}</span>
                      </div>
                      <p className="text-gray-300 text-sm line-clamp-3 leading-relaxed">
                        {umkm.deskripsi}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3 mt-auto">
                      <button
                        onClick={() => openMaps(umkm.koordinat)}
                        className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-4 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        <MapPin className="w-4 h-4" />
                        <span className="font-medium">Lokasi</span>
                      </button>
                      <a
                        href={`tel:${umkm.kontak}`}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        <Phone className="w-4 h-4" />
                        <span className="font-medium">Hubungi</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-12 max-w-md mx-auto border border-gray-700/50">
              <div className="text-gray-400 mb-6">
                <div className="bg-gray-700/50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 opacity-50" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Tidak ada UMKM yang ditemukan</h3>
                <p className="text-sm text-gray-400">
                  Coba ubah kata kunci pencarian atau filter untuk menemukan UMKM yang Anda cari
                </p>
              </div>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setFilterJenis("Semua");
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium"
              >
                Reset Filter
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllUmkmPage;