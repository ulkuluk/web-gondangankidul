import React from "react";
import { MapPin, Users, Home, Sun, FileText } from "lucide-react"; // Import FileText icon
import StatCard from "./statcard"; // Import StatCard

const HeroSection = ({ dataDusun, dataKependudukan, openMaps, mapPdfUrl }) => { // Tambahkan mapPdfUrl sebagai prop
  const handleOpenPdf = () => {
    if (mapPdfUrl) {
      window.open(mapPdfUrl, "_blank"); // Buka URL PDF di tab baru
    } else {
      alert("URL Peta PDF tidak tersedia."); // Pesan jika URL tidak ada
    }
  };

  return (
    <div id="beranda" className="pt-16 pb-8">
      <div className="bg-gradient-to-r from-green-700 to-green-600 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl border border-green-800">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Dusun Gondangan Kidul
              </h1>
              <p className="text-xl text-green-200 mb-2">
                Desa Pakunden, Kecamatan Ngluwar
              </p>
              <p className="text-lg text-green-200 mb-6">Kabupaten Magelang</p>
              <p className="text-green-200 mb-8">
                Dusun yang sejuk dengan pemandangan indah dan masyarakat yang
                ramah
              </p>
              <div className="flex flex-col sm:flex-row gap-4"> {/* Menggunakan flexbox untuk menata tombol */}
                <button
                  onClick={() => openMaps(dataDusun.koordinat)}
                  className="bg-white text-green-700 px-6 py-3 rounded-xl font-semibold hover:bg-green-100 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
                >
                  <MapPin className="w-5 h-5" />
                  <span>Lihat Lokasi</span>
                </button>
                <button
                  onClick={handleOpenPdf}
                  className="bg-white text-green-700 px-6 py-3 rounded-xl font-semibold hover:bg-green-100 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
                >
                  <FileText className="w-5 h-5" /> {/* Icon untuk PDF */}
                  <span>Lihat Peta (PDF)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <StatCard
          title="Total Penduduk"
          value={dataKependudukan.totalPenduduk}
          icon={Users}
          color="bg-green-600"
          trend="+2.5%"
        />
        <StatCard
          title="Kepala Keluarga"
          value={dataKependudukan.kepalaKeluarga}
          icon={Home}
          color="bg-blue-600"
        />
        <StatCard
          title="Laki-laki"
          value={dataKependudukan.lakiLaki}
          icon={Users}
          color="bg-purple-600"
        />
        <StatCard
          title="Perempuan"
          value={dataKependudukan.perempuan}
          icon={Users}
          color="bg-pink-600"
        />
      </div>
    </div>
  );
};

export default HeroSection;