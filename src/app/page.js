import Link from "next/link";
import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";
import ProyekCard from "@/components/ProyekCard";
import { buttonVariants } from "@/components/ui/button"
import { supabase } from "@/lib/supabase";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan Github", level: "Dasar" },
  { nama: "Desain Poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

export default async function Home() {
  const { data: proyekTerbaru, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(3);
    
  return (
    <main className="mx-auto max-w-5xl space-y-6 px-4 py-10">
      <Hero
        nama="Yogi El Safani"
        tagline="Siswa Kelas X SMK, calon Junior Web Developer di Kelas Industri UBIG."
      />

      <section id="keahlian">
        <h2 className="mb-4 text-2xl font-bold text-primary">Keahlian</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard
              key={skill.nama}
              nama={skill.nama}
              level={skill.level}
            />
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-primary">Proyek Terbaru</h2>
        {error ? (
          <p className="text-aksen">Data proyek gagal dimuat: {error.message}</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {proyekTerbaru?.map((item) => (
              <ProyekCard key={item.slug} proyek={item} />
            ))}
          </div>
        )}
        <Link
          href="/proyek"
          className={buttonVariants({ size: "lg", className: "mt-6"})}
        >
          Lihat semua proyek
        </Link>
      </section>
    </main>
  );
}
