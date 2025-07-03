import React from 'react';
import { MapPin, Heart, Droplets, Mountain, Building } from 'lucide-react';

const TempatPenting = ({ tempatPenting, openMaps }) => {
  return (
    <div className="section">
      <div className="container">
        <h1 className="title">
          <span className="icon"><MapPin size={24} /></span>
          <span>Tempat Penting</span>
        </h1>
        
        <div className="columns is-multiline">
          {tempatPenting.map((tempat) => (
            <div key={tempat.id} className="column is-6">
              <div className="card">
                <div className="card-header">
                  <p className="card-header-title">{tempat.nama}</p>
                  <span className={`tag ${tempat.kategori === 'Tempat Ibadah' ? 'is-success' : 
                                       tempat.kategori === 'Mata Air' ? 'is-info' : 
                                       tempat.kategori === 'Wisata' ? 'is-warning' : 'is-primary'}`}>
                    {tempat.kategori === 'Tempat Ibadah' && <Heart size={16} />}
                    {tempat.kategori === 'Mata Air' && <Droplets size={16} />}
                    {tempat.kategori === 'Wisata' && <Mountain size={16} />}
                    {tempat.kategori === 'Fasilitas Umum' && <Building size={16} />}
                    <span className="ml-1">{tempat.kategori}</span>
                  </span>
                </div>
                <div className="card-content">
                  <div className="content">
                    <p><strong>Alamat:</strong> {tempat.alamat}</p>
                    <p>{tempat.deskripsi}</p>
                  </div>
                </div>
                <div className="card-footer">
                  <button 
                    className="card-footer-item button is-primary"
                    onClick={() => openMaps(tempat.koordinat)}
                  >
                    <span className="icon"><MapPin size={16} /></span>
                    <span>Lihat Lokasi</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TempatPenting;