import React from "react";
import { Users, Heart, Building, Sparkles, BookOpen, Music, Trophy } from "lucide-react";
import ActivityCard from "./activitycard"; // Import ActivityCard

const ActivitiesSection = ({ dataKegiatan }) => {
  // Mapping ikon untuk kegiatan berdasarkan nama ikon dari data
  const getActivityIcon = (iconName) => {
    switch (iconName) {
      case "Users":
        return Users;
      case "Heart":
        return Heart;
      case "Building":
        return Building;
      case "Sparkles":
        return Sparkles;
      case "BookOpen":
        return BookOpen;
      case "Music":
        return Music;
      case "Trophy":
        return Trophy;
      default:
        return Sparkles; // Default icon
    }
  };

  return (
    <div id="kegiatan" className="pt-16 pb-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">
          Kegiatan Masyarakat
        </h1>
        <p className="text-gray-300">
          Berbagai kegiatan yang aktif diselenggarakan di Dusun Gondangan Kidul
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        {dataKegiatan.map((kegiatan) => (
          <ActivityCard
            key={kegiatan.id}
            nama={kegiatan.nama}
            tanggal={kegiatan.tanggal}
            deskripsi={kegiatan.deskripsi}
            icon={getActivityIcon(kegiatan.icon)}
          />
        ))}
      </div>
    </div>
  );
};

export default ActivitiesSection;