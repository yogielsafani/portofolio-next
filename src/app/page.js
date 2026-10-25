import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";
import Kartu from "@/components/Kartu";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan Github", level: "Dasar" },
  { nama: "Desain Poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

const hobi = [
  "Belajar pemrograman",
  "Membuat desain",
  "Mendengarkan musik",
];

const rencana = [
  "Menguasai HTML, CSS, dan JavaScript",
  "Mempelajari Next.js",
  "Menjadi Junior Web Developer",
];

const jadwal = [
  {
    hari: "Senin",
    waktu: "19.00–20.00",
    kegiatan: "Mempelajari dan memahami modul",
  },
  {
    hari: "Rabu",
    waktu: "19.00–20.00",
    kegiatan: "Mengerjakan tugas praktik",
  },
  {
    hari: "Jumat",
    waktu: "19.00–20.00",
    kegiatan: "Merekam vidio dan menulis laporan",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl space-y-6 px-4 py-10">
      <Hero
        nama="Yogi El Safani"
        tagline="Siswa Kelas X SMK, calon Junior Web Developer di Kelas Industri UBIG."
      />

      <Kartu judul="Tentang Saya">
        <p className="text-gray-700">
          Saya adalah pelajar SMKN 1 Kepanjen yang sedang mempelajari dan mencoba memahami web development di kelas maupun di dunia industry, dengan mengikuti kelas industri saya bisa mengikuti proyek/tugas yang di sesuaikan oleh industri yang di berikan oleh PT Ubig
        </p>
      </Kartu>

      <div className="grid gap-6 md:grid-cols-2">
        <Kartu judul="Hobi">
          <ul className="list-disc pl-5 text-gray-700">
            {hobi.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Kartu>

        <Kartu judul="Cita-cita">
          <ol className="list-decimal pl-5 text-gray-700">
            {rencana.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </Kartu>
      </div>

      <Kartu judul="Keahlian">
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard
              key={skill.nama}
              nama={skill.nama}
              level={skill.level}
            />
          ))}
        </div>
      </Kartu>

      <Kartu judul="Jadwal Belajar">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-utama text-white">
              <tr>
                <th className="p-3">Hari</th>
                <th className="p-3">Waktu</th>
                <th className="p-3">Kegiatan</th>
              </tr>
            </thead>

            <tbody>
              {jadwal.map((item) => (
                <tr key={item.hari} className="border-b">
                  <td className="p-3">{item.hari}</td>
                  <td className="p-3">{item.waktu}</td>
                  <td className="p-3">{item.kegiatan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Kartu>
    </main>
  );
}
