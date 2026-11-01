export const metadata = {
  title: "Kontak",
  description: "Hubungi Yogi El Safani melalui form kontak, email, atau Github.",
};

export default function Kontak() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-8">
        <h1 className="mt-2 text-3xl font-bold text-utama md:text-4xl">
          Hubungi Saya
        </h1>
        <p className="mt-3 max-w-2xl text-gray-700">
          Saya terbuka untuk kolaborasi, pertanyaan, maupun tawaran proyek baru.
          Silakan kirim pesan melalui form di samping atau hubungi saya lewat media
          sosial yang tersedia.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <form className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm space-y-4">
          <div>
            <label htmlFor="nama" className="block font-semibold text-utama">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              placeholder="Contoh: Budi Santoso"
              required
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-3 focus:border-utama focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold text-utama">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Contoh: budi@email.com"
              required
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-3 focus:border-utama focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="tel" className="block font-semibold text-utama">
              Nomor Hp
            </label>
            <input
              type="tel"
              id="tel"
              name="tel"
              placeholder="08123456789"
              required
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-3 focus:border-utama focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="subjects" className="block font-semibold text-utama">
              Keperluan
            </label>
            <select
              name="subjects"
              id="subjects"
              required
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-3 focus:border-utama focus:outline-none"
            >
              <option value="">-- Pilih Keperluan --</option>
              <option value="kerjasama">Kerjasama / Proyek</option>
              <option value="pertanyaan">Pertanyaan Umum</option>
            </select>
          </div>

          <div>
            <label htmlFor="pesan" className="block font-semibold text-utama">
              Pesan
            </label>
            <textarea
              id="pesan"
              name="pesan"
              rows={5}
              placeholder="Tulis pesan Anda di sini..."
              required
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-3 focus:border-utama focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-aksen px-5 py-3 font-semibold text-white transition-colors hover:bg-red-800 focus-visible:outline-offset-2 focus-visible:outline-aksen"
          >
            Kirim
          </button>

          <p className="text-sm leading-6 text-slate-500">
            Form ini belum mengirim pesan. Pengiriman pesan akan diaktifkan pada
            tahap berikutnya.
          </p>
        </form>

        <aside className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-utama">Temukan Saya di</h2>

          <div className="mt-4 space-y-3 text-sm text-aksen">
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
