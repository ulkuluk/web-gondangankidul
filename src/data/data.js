// src/data/data.js

export const dataDusun = {
  nama: "Gondangan Kidul",
  desa: "Pakunden",
  kecamatan: "Ngluwar",
  kabupaten: "Magelang",
  koordinat: "-7.671192, 110.272707", // Contoh koordinat
  luas: "40.5 ha",
  ketinggian: "250 mdpl",
};

export const dataKependudukan = {
  totalPenduduk: 394,
  kepalaKeluarga: 135,
  lakiLaki: 197,
  perempuan: 197,
  usia: {
    balita: 100, // 0-5 tahun
    anakAnak: 180, // 6-12 tahun
    remaja: 150, // 13-18 tahun
    dewasa: 600, // 19-60 tahun
    lansia: 220, // >60 tahun
  },
  pendidikan: {
    belumSekolah: 67,
    belumSd: 37,
    sd: 100,
    sltp: 46,
    slta: 134,
    d3: 2,
    d4s1: 7,
  },
  pekerjaan: {
    petani: 17,
    buruh: 70,
    pedagang: 3,
    wiraswasta: 21,
    pns: 3,
    swasta: 59,
    ibu_rumah_tangga: 28,
    mahasiswa: 60,
    belumBekerja: 62,
    pensiunan: 2
  },
};

export const umkmData = [
  {
    id: 1,
    nama: "Basreng Annisa",
    jenis: "Kuliner",
    alamat: "Jl. Melati No. 10",
    kontak: "+6285327302400",
    deskripsi: "Menyediakan aneka keripik basreng renyah dan gurih.",
    koordinat: "-7.6724580,110.2723400",
    foto: [
      `${process.env.PUBLIC_URL}/images/basreng1.jpg`,
      `${process.env.PUBLIC_URL}/images/basreng2.jpg`,
      `${process.env.PUBLIC_URL}/images/basreng3.jpg`
    ]
  },
  {
    id: 2,
    nama: "Jasa Pembuatan Emping Melinjo",
    jenis: "Jasa",
    alamat: "Dusun Tengah RT 02/RW 01",
    kontak: "-",
    deskripsi: "Menyediakan jasa pembuatan emping melinjo dari biji melinjo mentah hingga menjadi emping siap konsumsi atau kering.",
    koordinat: "-7.6728120,110.2702100",
    foto: [
      `${process.env.PUBLIC_URL}/images/emping1.jpg`,
      `${process.env.PUBLIC_URL}/images/emping2.jpg`,
      `${process.env.PUBLIC_URL}/images/emping3.jpg`
    ]
  },
  {
    id: 3,
    nama: "Toko Ijo",
    jenis: "Retail",
    alamat: "Jl. Raya Ngluwar No. 5",
    kontak: "-",
    deskripsi: "Warung yang menjual aneka barang kebutuhan sehari-hari dan berbagai jenis makanan.",
    koordinat: "-7.6726491,110.2699263",
    foto: [
      `${process.env.PUBLIC_URL}/images/tokoijo1.jpg`,
      `${process.env.PUBLIC_URL}/images/tokoijo2.jpg`,
      `${process.env.PUBLIC_URL}/images/tokoijo3.jpg`
    ]
  },
  {
    id: 4,
    nama: "Percetakan Batako",
    jenis: "Jasa",
    alamat: "Dekat Balai Dusun",
    kontak: "+6285865341028",
    deskripsi: "Memproduksi dan menyediakan batako (blok beton).",
    koordinat: "-7.6705710,110.2722180",
    foto: [
      `${process.env.PUBLIC_URL}/images/batako1.jpg`,
      `${process.env.PUBLIC_URL}/images/batako2.jpg`,
      `${process.env.PUBLIC_URL}/images/batako3.jpg`
    ]
  },
  {
    id: 5,
    nama: "Mebel Mandiri Pak Suyanto",
    jenis: "Jasa",
    alamat: "Dekat Balai Dusun",
    kontak: "+6285803066884",
    deskripsi: "Menyediakan jasa pembuatan dan penjualan aneka perabotan rumah tangga dari kayu.",
    koordinat: "-7.671640,110.273248",
    foto: [
      `${process.env.PUBLIC_URL}/images/mebel1.jpg`,
      `${process.env.PUBLIC_URL}/images/mebel2.jpg`,
      `${process.env.PUBLIC_URL}/images/mebel3.jpg`
    ]
  },
  {
    id: 6,
    nama: "Mie Ayam Ijo",
    jenis: "Kuliner",
    alamat: "Dekat Balai Dusun",
    kontak: "+6285865341028",
    deskripsi: "Usaha kuliner yang menyajikan mie ayam dengan cita rasa khas",
    koordinat: "-7.6714316,110.2681463",
    foto: [
      `${process.env.PUBLIC_URL}/images/mieayam1.jpg`,
      `${process.env.PUBLIC_URL}/images/mieayam2.jpg`,
      `${process.env.PUBLIC_URL}/images/mieayam3.jpg`
    ]
  },
];

export const tempatPenting = [
  {
    id: 1,
    nama: "Masjid",
    kategori: "Tempat Ibadah",
    alamat: "Pusat Dusun Gondangan Kidul",
    deskripsi: "Masjid utama dusun, tempat sholat berjamaah dan kegiatan keagamaan.",
    koordinat: "-7.6697690,110.2727970",
    foto: [
      `${process.env.PUBLIC_URL}/images/masjid1.jpg`,
      `${process.env.PUBLIC_URL}/images/masjid2.jpg`,
      `${process.env.PUBLIC_URL}/images/masjid3.jpg`
    ]
  },
  {
    id: 2,
    nama: "Mata Air Serilin",
    kategori: "Mata Air",
    alamat: "Ujung Barat Dusun",
    deskripsi: "Sumber mata air alami yang dimanfaatkan warga untuk kebutuhan sehari-hari.",
    koordinat: "-7.668591, 110.271853",
    foto: [
      `${process.env.PUBLIC_URL}/images/mataair1.jpg`,
      `${process.env.PUBLIC_URL}/images/mataair2.jpg`,
      `${process.env.PUBLIC_URL}/images/mataair3.jpg`
    ]
  },
  {
    id: 3,
    nama: "Musholla Al-Iman",
    kategori: "Tempat Ibadah",
    alamat: "Area Perkebunan Dusun",
    deskripsi: "Musholla tempat sholat berjamaah dan kegiatan keagamaan.",
    koordinat: "-7.6720850,110.2717320",
    foto: [
      `${process.env.PUBLIC_URL}/images/musholla1.jpg`,
      `${process.env.PUBLIC_URL}/images/musholla2.jpg`,
      `${process.env.PUBLIC_URL}/images/musholla3.jpg`
    ]
  }
];

// Data baru untuk kegiatan masyarakat
export const dataKegiatan = [
  {
    id: 1,
    nama: "Hadroh Ar-Rohman",
    tanggal: "Satu Minggu Sekali",
    deskripsi: "Kegiatan kesenian musik Islami yang menggunakan rebana (alat musik perkusi) sebagai instrumen utamanya, dimainkan secara berkelompok dengan iringan sholawat, puji-pujian, dan lantunan syair berbahasa Arab atau lokal.",
    icon: "Music", // Kita akan pakai ikon Lucide `Users` atau `Sparkles`
  },
  {
    id: 2,
    nama: "Mujahadah",
    tanggal: "2 Minggu Sekali, Setiap Malam Jumat",
    deskripsi: "Kegiatan keagamaan rutin dengan membaca wirid, sholawat, doa tolak bala, atau doa keselamatan.",
    icon: "Heart", // Bisa pakai ikon `Heart` atau `BookOpen`
  }
];