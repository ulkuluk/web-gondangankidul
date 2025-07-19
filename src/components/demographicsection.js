import React from "react";
import { MapPin, Users, Award, Building } from "lucide-react";
import ProgressBar from "./progressbar"; // Import ProgressBar

const DemographicsSection = ({ dataDusun, dataKependudukan }) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-700 col-span-2">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-green-500" />
            Informasi Dusun
          </h3>
          <div className="space-y-4">
            {[
              { label: "Nama", value: dataDusun.nama },
              { label: "Desa", value: dataDusun.desa },
              { label: "Kecamatan", value: dataDusun.kecamatan },
              { label: "Kabupaten", value: dataDusun.kabupaten },
              { label: "Koordinat", value: dataDusun.koordinat },
            ].map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0"
              >
                <span className="text-gray-400 font-medium">{item.label}:</span>
                <span className="text-white font-semibold">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center">
            <Award className="w-5 h-5 mr-2 text-green-500" />
            Tingkat Pendidikan
          </h3>
          <div className="space-y-4">
            <ProgressBar
              label="Belum Sekolah"
              value={dataKependudukan.pendidikan.belumSekolah}
              max={dataKependudukan.totalPenduduk}
              color="bg-red-500" // Warna baru
            />
            <ProgressBar
              label="Belum Tamat SD"
              value={dataKependudukan.pendidikan.belumSd}
              max={dataKependudukan.totalPenduduk}
              color="bg-orange-500" // Warna baru
            />
            <ProgressBar
              label="Tamat SD"
              value={dataKependudukan.pendidikan.sd}
              max={dataKependudukan.totalPenduduk}
              color="bg-yellow-500" // Warna baru
            />
            <ProgressBar
              label="SLTP"
              value={dataKependudukan.pendidikan.sltp}
              max={dataKependudukan.totalPenduduk}
              color="bg-green-500" // Warna baru
            />
            <ProgressBar
              label="SLTA"
              value={dataKependudukan.pendidikan.slta}
              max={dataKependudukan.totalPenduduk}
              color="bg-teal-500" // Warna baru
            />
            <ProgressBar
              label="Diploma 3"
              value={dataKependudukan.pendidikan.d3}
              max={dataKependudukan.totalPenduduk}
              color="bg-blue-500" // Warna baru
            />
            <ProgressBar
              label="Diploma 4 / Strata 1"
              value={dataKependudukan.pendidikan.d4s1}
              max={dataKependudukan.totalPenduduk}
              color="bg-indigo-500" // Warna baru
            />
          </div>
        </div>

        <div className="bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center">
            <Building className="w-5 h-5 mr-2 text-green-500" />
            Jenis Pekerjaan
          </h3>
          <div className="space-y-4">
            <ProgressBar
              label="Petani"
              value={dataKependudukan.pekerjaan.petani}
              max={dataKependudukan.totalPenduduk}
              color="bg-lime-500" // Warna baru
            />
            <ProgressBar
              label="Buruh Tani"
              value={dataKependudukan.pekerjaan.buruh}
              max={dataKependudukan.totalPenduduk}
              color="bg-amber-500" // Warna baru
            />
            <ProgressBar
              label="Pedagang"
              value={dataKependudukan.pekerjaan.pedagang}
              max={dataKependudukan.totalPenduduk}
              color="bg-cyan-500" // Warna baru
            />
            <ProgressBar
              label="Wiraswasta"
              value={dataKependudukan.pekerjaan.wiraswasta}
              max={dataKependudukan.totalPenduduk}
              color="bg-sky-500" // Warna baru
            />
            <ProgressBar
              label="PNS"
              value={dataKependudukan.pekerjaan.pns}
              max={dataKependudukan.totalPenduduk}
              color="bg-violet-500" // Warna baru
            />
            <ProgressBar
              label="Karyawan Swasta"
              value={dataKependudukan.pekerjaan.swasta}
              max={dataKependudukan.totalPenduduk}
              color="bg-fuchsia-500" // Warna baru
            />
            <ProgressBar
              label="Mengurus Rumah Tangga"
              value={dataKependudukan.pekerjaan.ibu_rumah_tangga}
              max={dataKependudukan.totalPenduduk}
              color="bg-rose-500" // Warna baru
            />
            <ProgressBar
              label="Mahasiswa"
              value={dataKependudukan.pekerjaan.mahasiswa}
              max={dataKependudukan.totalPenduduk}
              color="bg-emerald-500" // Warna baru
            />
            <ProgressBar
              label="Belum Bekerja"
              value={dataKependudukan.pekerjaan.belumBekerja}
              max={dataKependudukan.totalPenduduk}
              color="bg-stone-500" // Warna baru
            />
            <ProgressBar
              label="Pensiunan"
              value={dataKependudukan.pekerjaan.pensiunan}
              max={dataKependudukan.totalPenduduk}
              color="bg-slate-500" // Warna baru
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemographicsSection;