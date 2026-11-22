import FilterProyek from "@/components/FilterProyek";
import { supabase } from "@/lib/supabase";
import { lengkapiKategori } from "@/data/proyek";

export const metadata = {
    title: "Proyek",
    description: "Daftar proyek HTML, CSS, dan JavaScript karya Yogi El Safani",
};

export default async function DaftarProyek() {
    const { data: proyek, error } = await supabase
      .from("projects")
      .select("*")
      .order("minggu", { ascending: true });
    const daftarProyek = lengkapiKategori(proyek ?? []);

    return (
        <main className="mx-auto w-full max-w-5xl px-4 py-10">
            <h1 className="text-3xl font-bold text-primary md:text-4xl">Proyek Saya</h1>
            <p className="mt-3 text-lg text-muted-foreground">
                Kumpulan hasil belajar saya di kelas Industri UBIG. Klik kartu untuk melihat detailnya.
            </p>

            {error && (
                <p className="mt-8 rounded-xl border border-dashed border-
                input p-6 text-center text-aksen">
                    Data proyek gagal di muat: {error.message}
                </p>
            )}
            {!error && daftarProyek.length === 0 && (
                <p className="mt-8 rounded-xl border border-dashed border-
                input p-6 text-center text-muted-foreground">
                        Belum ada proyek di database
                </p>
            )}
            {daftarProyek.length > 0 && <FilterProyek proyek={daftarProyek} />}
        </main>
    );
}