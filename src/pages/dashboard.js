// src/pages/dashboard.js
import React, { useState, useEffect } from "react";
import {
  dataDusun,
  dataKependudukan,
  umkmData, // Ini adalah data UMKM yang akan kita gunakan
  tempatPenting,
  dataKegiatan,
} from "../data/data";
import {
  Navbar,
  HeroSection,
  DemographicsSection,
  UmkmSection, // Komponen UmkmSection
  TempatPentingSection,
  KegiatanSection,
  Footer,
} from "../components"; // Import komponen lain dari index.js di components
import AllUmkmPage from "../components/allUMKM"; // Import AllUmkmPage secara spesifik

const Dashboard = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  // State baru untuk mengontrol tampilan UMKM
  const [showAllUmkm, setShowAllUmkm] = useState(false);

  // **Tambahkan definisi URL untuk peta PDF di sini**
  // Ganti '/assets/peta-dusun-gondangan-kidul.pdf' dengan path yang benar ke file PDF Anda.
  // Pastikan file PDF Anda berada di folder 'public' di root proyek Anda.
  const MAP_PDF_URL = "/peta.pdf"; // Perhatikan juga perubahan path yang saya sarankan sebelumnya
  // Contoh: Jika file Anda ada di public/peta/dusun-map.pdf, maka: "/peta/dusun-map.pdf"

  // Fungsi untuk scroll ke bagian tertentu
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setShowMobileMenu(false); // Tutup menu mobile setelah klik
    }
  };

  const openMaps = (koordinat) => {
    // Perbaikan: Pastikan koordinat tidak null atau undefined
    if (koordinat && koordinat.length === 2) { // Menambahkan validasi array
      // Perhatikan penggunaan template literal dan variabel koordinat yang benar
      // Contoh URL Google Maps dengan koordinat:
      const url = `http://maps.google.com/?q=${koordinat[0]},${koordinat[1]}`;
      window.open(url, "_blank");
    } else {
      alert("Koordinat tidak tersedia atau tidak valid.");
    }
  };

  // Fungsi untuk menampilkan semua UMKM
  const handleViewAllUmkm = () => {
    setShowAllUmkm(true);
  };

  // Fungsi untuk kembali ke tampilan utama
  const handleBackToDashboard = () => {
    setShowAllUmkm(false);
  };

  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/background_dusun.png')`,
      }}
    >
      <Navbar
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
        scrollToSection={scrollToSection}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        {/* Kondisi untuk merender AllUmkmPage atau komponen lainnya */}
        {showAllUmkm ? (
          <AllUmkmPage
            umkmData={umkmData} // Teruskan data UMKM lengkap
            openMaps={openMaps}
            onBack={handleBackToDashboard} // Teruskan fungsi kembali
          />
        ) : (
          // Tampilkan komponen halaman utama jika showAllUmkm adalah false
          <>
            <HeroSection
              dataDusun={dataDusun}
              dataKependudukan={dataKependudukan}
              openMaps={openMaps}
              mapPdfUrl={MAP_PDF_URL} // Hapus komentar di sini
            />
            <DemographicsSection
              dataDusun={dataDusun}
              dataKependudukan={dataKependudukan}
            />
            {/* Teruskan prop onViewAll ke UmkmSection */}
            <UmkmSection
              umkmData={umkmData}
              openMaps={openMaps}
              onViewAll={handleViewAllUmkm}
            />
            <TempatPentingSection
              tempatPenting={tempatPenting}
              openMaps={openMaps}
            />
            <KegiatanSection dataKegiatan={dataKegiatan} />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;