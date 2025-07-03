import React, { useState } from 'react';
import { MapPin, Users, Building, Heart, Droplets, Mountain, Phone, Mail, Calendar } from 'lucide-react';
import UMKM from './umkm'; 
import TempatPenting from './tempatpenting'; 

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('beranda');

  const dataDusun = {
    nama: "Dusun Gondangan Kidul",
    desa: "Pakunden",
    kecamatan: "Ngluwar",
    kabupaten: "Magelang",
    koordinat: "-7.5284, 110.3456",
    luas: "2.5 km²",
    ketinggian: "450 mdpl"
  };

  const dataKependudukan = {
    totalPenduduk: 1250,
    kepalaKeluarga: 325,
    lakiLaki: 630,
    perempuan: 620,
    usia: {
      balita: 85,
      anakAnak: 180,
      remaja: 220,
      dewasa: 580,
      lansia: 185
    },
    pendidikan: {
      belumSekolah: 95,
      sd: 280,
      smp: 320,
      sma: 400,
      diploma: 85,
      sarjana: 70
    },
    pekerjaan: {
      petani: 380,
      buruh: 250,
      pedagang: 120,
      pns: 45,
      swasta: 180,
      ibu_rumah_tangga: 200,
      pelajar: 75
    }
  };

  const umkmData = [
    {
      id: 1,
      nama: "Warung Makan Bu Sari",
      jenis: "Kuliner",
      alamat: "Jl. Raya Gondangan Kidul",
      koordinat: "-7.5280, 110.3450",
      kontak: "0812-3456-7890",
      deskripsi: "Warung makan tradisional dengan menu khas Jawa"
    },
    {
      id: 2,
      nama: "Toko Sembako Pak Budi",
      jenis: "Retail",
      alamat: "Jl. Masjid Gondangan Kidul",
      koordinat: "-7.5285, 110.3455",
      kontak: "0813-4567-8901",
      deskripsi: "Toko sembako lengkap untuk kebutuhan sehari-hari"
    },
    {
      id: 3,
      nama: "Kerajinan Anyaman Bambu",
      jenis: "Kerajinan",
      alamat: "Jl. Sawah Gondangan Kidul",
      koordinat: "-7.5290, 110.3460",
      kontak: "0814-5678-9012",
      deskripsi: "Produksi kerajinan anyaman bambu tradisional"
    },
    {
      id: 4,
      nama: "Ternak Ayam Pak Joko",
      jenis: "Peternakan",
      alamat: "Jl. Kebun Gondangan Kidul",
      koordinat: "-7.5275, 110.3465",
      kontak: "0815-6789-0123",
      deskripsi: "Usaha ternak ayam kampung dan petelur"
    }
  ];

  const tempatPenting = [
    {
      id: 1,
      nama: "Masjid Al-Hidayah",
      kategori: "Tempat Ibadah",
      alamat: "Jl. Masjid Gondangan Kidul",
      koordinat: "-7.5285, 110.3455",
      deskripsi: "Masjid utama dusun untuk kegiatan ibadah dan sosial"
    },
    {
      id: 2,
      nama: "Mata Air Sendang Bening",
      kategori: "Mata Air",
      alamat: "Kawasan Hutan Gondangan Kidul",
      koordinat: "-7.5295, 110.3470",
      deskripsi: "Mata air alami yang jernih, sumber air bersih warga"
    },
    {
      id: 3,
      nama: "Bukit Pandang Indah",
      kategori: "Wisata",
      alamat: "Puncak Gondangan Kidul",
      koordinat: "-7.5270, 110.3480",
      deskripsi: "Bukit dengan pemandangan indah, spot foto favorit"
    },
    {
      id: 4,
      nama: "Balai Dusun",
      kategori: "Fasilitas Umum",
      alamat: "Jl. Raya Gondangan Kidul",
      koordinat: "-7.5282, 110.3452",
      deskripsi: "Pusat kegiatan masyarakat dan pertemuan warga"
    }
  ];

  const openMaps = (koordinat) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${koordinat}`;
    window.open(url, '_blank');
  };

  const renderKependudukan = () => (
    <div className="section">
      <div className="container">
        <h1 className="title">Data Kependudukan</h1>
        
        <div className="columns is-multiline">
          {/* Statistik Umum */}
          <div className="column is-full">
            <div className="card">
              <div className="card-header">
                <p className="card-header-title">
                  <span className="icon"><Users size={20} /></span>
                  <span>Statistik Umum</span>
                </p>
              </div>
              <div className="card-content">
                <div className="columns is-multiline">
                  <div className="column is-3">
                    <div className="has-text-centered">
                      <p className="heading">Total Penduduk</p>
                      <p className="title is-4">{dataKependudukan.totalPenduduk}</p>
                    </div>
                  </div>
                  <div className="column is-3">
                    <div className="has-text-centered">
                      <p className="heading">Kepala Keluarga</p>
                      <p className="title is-4">{dataKependudukan.kepalaKeluarga}</p>
                    </div>
                  </div>
                  <div className="column is-3">
                    <div className="has-text-centered">
                      <p className="heading">Laki-laki</p>
                      <p className="title is-4">{dataKependudukan.lakiLaki}</p>
                    </div>
                  </div>
                  <div className="column is-3">
                    <div className="has-text-centered">
                      <div>
                        <p className="heading">Perempuan</p>
                        <p className="title is-4">{dataKependudukan.perempuan}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Berdasarkan Usia */}
          <div className="column is-4">
            <div className="card">
              <div className="card-header">
                <p className="card-header-title">Berdasarkan Usia</p>
              </div>
              <div className="card-content">
                <div className="content">
                  <div className="field">
                    <label className="label">Balita (0-5 tahun)</label>
                    <progress className="progress is-primary" value={dataKependudukan.usia.balita} max={dataKependudukan.totalPenduduk}></progress>
                    <span className="tag is-primary">{dataKependudukan.usia.balita} orang</span>
                  </div>
                  <div className="field">
                    <label className="label">Anak-anak (6-12 tahun)</label>
                    <progress className="progress is-info" value={dataKependudukan.usia.anakAnak} max={dataKependudukan.totalPenduduk}></progress>
                    <span className="tag is-info">{dataKependudukan.usia.anakAnak} orang</span>
                  </div>
                  <div className="field">
                    <label className="label">Remaja (13-18 tahun)</label>
                    <progress className="progress is-success" value={dataKependudukan.usia.remaja} max={dataKependudukan.totalPenduduk}></progress>
                    <span className="tag is-success">{dataKependudukan.usia.remaja} orang</span>
                  </div>
                  <div className="field">
                    <label className="label">Dewasa (19-60 tahun)</label>
                    <progress className="progress is-warning" value={dataKependudukan.usia.dewasa} max={dataKependudukan.totalPenduduk}></progress>
                    <span className="tag is-warning">{dataKependudukan.usia.dewasa} orang</span>
                  </div>
                  <div className="field">
                    <label className="label">Lansia ( diatas 60 tahun)</label>
                    <progress className="progress is-danger" value={dataKependudukan.usia.lansia} max={dataKependudukan.totalPenduduk}></progress>
                    <span className="tag is-danger">{dataKependudukan.usia.lansia} orang</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Berdasarkan Pendidikan */}
          <div className="column is-4">
            <div className="card">
              <div className="card-header">
                <p className="card-header-title">Berdasarkan Pendidikan</p>
              </div>
              <div className="card-content">
                <div className="content">
                  <div className="field">
                    <label className="label">Belum Sekolah</label>
                    <progress className="progress is-light" value={dataKependudukan.pendidikan.belumSekolah} max={dataKependudukan.totalPenduduk}></progress>
                    <span className="tag is-light">{dataKependudukan.pendidikan.belumSekolah} orang</span>
                  </div>
                  <div className="field">
                    <label className="label">SD</label>
                    <progress className="progress is-primary" value={dataKependudukan.pendidikan.sd} max={dataKependudukan.totalPenduduk}></progress>
                    <span className="tag is-primary">{dataKependudukan.pendidikan.sd} orang</span>
                  </div>
                  <div className="field">
                    <label className="label">SMP</label>
                    <progress className="progress is-info" value={dataKependudukan.pendidikan.smp} max={dataKependudukan.totalPenduduk}></progress>
                    <span className="tag is-info">{dataKependudukan.pendidikan.smp} orang</span>
                  </div>
                  <div className="field">
                    <label className="label">SMA</label>
                    <progress className="progress is-success" value={dataKependudukan.pendidikan.sma} max={dataKependudukan.totalPenduduk}></progress>
                    <span className="tag is-success">{dataKependudukan.pendidikan.sma} orang</span>
                  </div>
                  <div className="field">
                    <label className="label">Diploma</label>
                    <progress className="progress is-warning" value={dataKependudukan.pendidikan.diploma} max={dataKependudukan.totalPenduduk}></progress>
                    <span className="tag is-warning">{dataKependudukan.pendidikan.diploma} orang</span>
                  </div>
                  <div className="field">
                    <label className="label">Sarjana</label>
                    <progress className="progress is-danger" value={dataKependudukan.pendidikan.sarjana} max={dataKependudukan.totalPenduduk}></progress>
                    <span className="tag is-danger">{dataKependudukan.pendidikan.sarjana} orang</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Berdasarkan Pekerjaan */}
          <div className="column is-4">
            <div className="card">
              <div className="card-header">
                <p className="card-header-title">Berdasarkan Pekerjaan</p>
              </div>
              <div className="card-content">
                <div className="content">
                  <div className="field">
                    <label className="label">Petani</label>
                    <progress className="progress is-success" value={dataKependudukan.pekerjaan.petani} max={dataKependudukan.totalPenduduk}></progress>
                    <span className="tag is-success">{dataKependudukan.pekerjaan.petani} orang</span>
                  </div>
                  <div className="field">
                    <label className="label">Buruh</label>
                    <progress className="progress is-warning" value={dataKependudukan.pekerjaan.buruh} max={dataKependudukan.totalPenduduk}></progress>
                    <span className="tag is-warning">{dataKependudukan.pekerjaan.buruh} orang</span>
                  </div>
                  <div className="field">
                    <label className="label">Pedagang</label>
                    <progress className="progress is-info" value={dataKependudukan.pekerjaan.pedagang} max={dataKependudukan.totalPenduduk}></progress>
                    <span className="tag is-info">{dataKependudukan.pekerjaan.pedagang} orang</span>
                  </div>
                  <div className="field">
                    <label className="label">PNS</label>
                    <progress className="progress is-primary" value={dataKependudukan.pekerjaan.pns} max={dataKependudukan.totalPenduduk}></progress>
                    <span className="tag is-primary">{dataKependudukan.pekerjaan.pns} orang</span>
                  </div>
                  <div className="field">
                    <label className="label">Swasta</label>
                    <progress className="progress is-danger" value={dataKependudukan.pekerjaan.swasta} max={dataKependudukan.totalPenduduk}></progress>
                    <span className="tag is-danger">{dataKependudukan.pekerjaan.swasta} orang</span>
                  </div>
                  <div className="field">
                    <label className="label">Ibu Rumah Tangga</label>
                    <progress className="progress is-light" value={dataKependudukan.pekerjaan.ibu_rumah_tangga} max={dataKependudukan.totalPenduduk}></progress>
                    <span className="tag is-light">{dataKependudukan.pekerjaan.ibu_rumah_tangga} orang</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="App"> {/* Class App disini mungkin perlu diganti atau dihapus jika hanya untuk styling umum */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css" />
      
      {/* Navigation */}
      <nav className="navbar is-primary" role="navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="#beranda">
            <strong>Dusun Gondangan Kidul</strong>
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <a 
              className={`navbar-item ${activeTab === 'beranda' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('beranda')}
            >
              Beranda
            </a>
            <a 
              className={`navbar-item ${activeTab === 'kependudukan' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('kependudukan')}
            >
              Data Kependudukan
            </a>
            <a 
              className={`navbar-item ${activeTab === 'umkm' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('umkm')}
            >
              UMKM
            </a>
            <a 
              className={`navbar-item ${activeTab === 'tempat-penting' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('tempat-penting')}
            >
              Tempat Penting
            </a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main>
        {activeTab === 'beranda' && (
          <div>
            {/* Hero Section */}
            <section className="hero is-primary is-medium">
              <div className="hero-body">
                <div className="container">
                  <h1 className="title is-1">Dusun Gondangan Kidul</h1>
                  <h2 className="subtitle is-3">Desa Pakunden, Kecamatan Ngluwar, Kabupaten Magelang</h2>
                  <p className="subtitle is-5">Dusun yang sejuk dengan pemandangan indah dan masyarakat yang ramah</p>
                  <button 
                    className="button is-white is-large"
                    onClick={() => openMaps(dataDusun.koordinat)}
                  >
                    <span className="icon"><MapPin size={20} /></span>
                    <span>Lihat Lokasi</span>
                  </button>
                </div>
              </div>
            </section>

            {/* Info Dusun */}
            <section className="section">
              <div className="container">
                <div className="columns is-multiline">
                  <div className="column is-half">
                    <div className="card">
                      <div className="card-header">
                        <p className="card-header-title">Informasi Dusun</p>
                      </div>
                      <div className="card-content">
                        <div className="content">
                          <p><strong>Nama:</strong> {dataDusun.nama}</p>
                          <p><strong>Desa:</strong> {dataDusun.desa}</p>
                          <p><strong>Kecamatan:</strong> {dataDusun.kecamatan}</p>
                          <p><strong>Kabupaten:</strong> {dataDusun.kabupaten}</p>
                          <p><strong>Koordinat:</strong> {dataDusun.koordinat}</p>
                          <p><strong>Luas Wilayah:</strong> {dataDusun.luas}</p>
                          <p><strong>Ketinggian:</strong> {dataDusun.ketinggian}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column is-half">
                    <div className="card">
                      <div className="card-header">
                        <p className="card-header-title">Statistik Penduduk</p>
                      </div>
                      <div className="card-content">
                        <div className="level">
                          <div className="level-item has-text-centered">
                            <div>
                              <p className="heading">Total Penduduk</p>
                              <p className="title">{dataKependudukan.totalPenduduk}</p>
                            </div>
                          </div>
                          <div className="level-item has-text-centered">
                            <div>
                              <p className="heading">Kepala Keluarga</p>
                              <p className="title">{dataKependudukan.kepalaKeluarga}</p>
                            </div>
                          </div>
                        </div>
                        <div className="level">
                          <div className="level-item has-text-centered">
                            <div>
                              <p className="heading">Laki-laki</p>
                              <p className="title">{dataKependudukan.lakiLaki}</p>
                            </div>
                          </div>
                          <div className="level-item has-text-centered">
                            <div>
                              <p className="heading">Perempuan</p>
                              <p className="title">{dataKependudukan.perempuan}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
        {activeTab === 'kependudukan' && renderKependudukan()}
        {activeTab === 'umkm' && <UMKM umkmData={umkmData} openMaps={openMaps} />}
        {activeTab === 'tempat-penting' && <TempatPenting tempatPenting={tempatPenting} openMaps={openMaps} />}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Website Profil Dusun Gondangan Kidul</strong><br />
            Dibuat untuk Program KKN - Desa Pakunden, Kecamatan Ngluwar, Kabupaten Magelang
          </p>
          <p className="mt-3">
            <span className="icon"><Calendar size={16} /></span>
            <span>© 2024 - Program KKN</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;