import FormKontak from "@/components/FormKontak";

export const metadata = {
  title: "Kontak",
  description: "Hubungi Yogi El Safani melalui form kontak, email, atau Github.",
};

export default function Kontak() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <div className="mb-8">
        <h1 className="mt-2 text-3xl font-bold text-utama dark:text-sky-200 md:text-4xl">
          Hubungi Saya
        </h1>
        <p className="mt-3 max-w-2xl text-gray-700 dark:text-gray-300">
          Saya terbuka untuk kolaborasi, pertanyaan, maupun tawaran proyek baru.
          Silakan kirim pesan melalui form di samping atau hubungi saya lewat media
          sosial yang tersedia.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <section className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
          <FormKontak />
        </section>

        <aside className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-utama dark:text-sky-200">Temukan Saya di</h2>

          <div className="mt-4 space-y-3 text-sm text-aksen dark:text-red-300">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="block hover:underline"
            >
              GitHub →
            </a>
            <a
              href="mailto:yelsrplkanesa@gmail.com"
              className="block break-words hover:underline"
            >
              yelsrplkanesa@gmail.com
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}
