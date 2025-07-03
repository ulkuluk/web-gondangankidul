import React from 'react';
import { Building, MapPin, Phone } from 'lucide-react';

const UMKM = ({ umkmData, openMaps }) => {
  return (
    <div className="section">
      <div className="container">
        <h1 className="title">
          <span className="icon"><Building size={24} /></span>
          <span>UMKM Dusun Gondangan Kidul</span>
        </h1>
        
        <div className="columns is-multiline">
          {umkmData.map((umkm) => (
            <div key={umkm.id} className="column is-6">
              <div className="card">
                <div className="card-header">
                  <p className="card-header-title">{umkm.nama}</p>
                  <span className={`tag ${umkm.jenis === 'Kuliner' ? 'is-success' : 
                                       umkm.jenis === 'Retail' ? 'is-info' : 
                                       umkm.jenis === 'Kerajinan' ? 'is-warning' : 'is-primary'}`}>
                    {umkm.jenis}
                  </span>
                </div>
                <div className="card-content">
                  <div className="content">
                    <p><strong>Alamat:</strong> {umkm.alamat}</p>
                    <p><strong>Kontak:</strong> {umkm.kontak}</p>
                    <p>{umkm.deskripsi}</p>
                  </div>
                </div>
                <div className="card-footer">
                  <button 
                    className="card-footer-item button is-primary"
                    onClick={() => openMaps(umkm.koordinat)}
                  >
                    <span className="icon"><MapPin size={16} /></span>
                    <span>Lihat Lokasi</span>
                  </button>
                  <a href={`tel:${umkm.kontak}`} className="card-footer-item button is-info">
                    <span className="icon"><Phone size={16} /></span>
                    <span>Hubungi</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UMKM;