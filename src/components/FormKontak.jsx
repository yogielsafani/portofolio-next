"use client";

import { useState } from "react";

const kelasInput =
  "mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-3 focus:border-utama dark:focus:border-sky-200 focus:outline-none";

export default function FormKontak() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState("");
  const [keperluan, setKeperluan] = useState("");
  const [pesan, setPesan] = useState("");
  const [error, setError] = useState({});
  const [berhasil, setBerhasil] = useState(false);

  function kirim(e) {
    e.preventDefault();
    const errorBaru = {};

    if (nama.trim() === "") {
      errorBaru.nama = "Nama wajib diisi.";
    }
    if (!email.includes("@")) {
      errorBaru.email = "Email harus memuat tanda @, contoh nama@gmail.com.";
    }
    if (hp.length < 10) {
      errorBaru.hp = "Nomor HP minimal 10 angka.";
    }
    if (keperluan === "") {
      errorBaru.keperluan = "Pilih salah satu keperluan.";
    }
    if (pesan.trim().length < 10) {
      errorBaru.pesan = "Pesan minimal 10 karakter.";
    }

    setError(errorBaru);
    setBerhasil(Object.keys(errorBaru).length === 0);
  }

  return (
    <form onSubmit={kirim} noValidate className="space-y-4">
      <div>
        <label htmlFor="nama" className="block font-semibold text-utama dark:text-sky-200">
          Nama Lengkap
        </label>
        <input
          type="text"
          id="nama"
          name="nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Contoh: Budi Santoso"
          className={kelasInput}
        />
        {error.nama && <p className="mt-1 text-sm text-aksen dark:text-red-300">{error.nama}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block font-semibold text-utama dark:text-sky-200">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Contoh: budi@email.com"
          className={kelasInput}
        />
        {error.email && <p className="mt-1 text-sm text-aksen dark:text-red-300">{error.email}</p>}
      </div>

      <div>
        <label htmlFor="hp" className="block font-semibold text-utama dark:text-sky-200">
          Nomor Hp
        </label>
        <input
          type="tel"
          id="hp"
          name="hp"
          value={hp}
          onChange={(e) => setHp(e.target.value)}
          placeholder="08123456789"
          className={kelasInput}
        />
        {error.hp && <p className="mt-1 text-sm text-aksen dark:text-red-300">{error.hp}</p>}
      </div>

      <div>
        <label htmlFor="keperluan" className="block font-semibold text-utama dark:text-sky-200">
          Keperluan
        </label>
        <select
          id="keperluan"
          name="keperluan"
          value={keperluan}
          onChange={(e) => setKeperluan(e.target.value)}
          className={kelasInput}
        >
          <option value="">-- Pilih keperluan --</option>
          <option value="bertanya">Bertanya</option>
          <option value="kerja-sama">Kerja sama proyek</option>
          <option value="lainnya">Lainnya</option>
        </select>
        {error.keperluan && (
          <p className="mt-1 text-sm text-aksen dark:text-red-300">{error.keperluan}</p>
        )}
      </div>

      <div>
        <label htmlFor="pesan" className="block font-semibold text-utama dark:text-sky-200">
          Pesan
        </label>
        <textarea
          id="pesan"
          name="pesan"
          rows={5}
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
          placeholder="Tulis pesan Anda di sini..."
          className={kelasInput}
        />
        {error.pesan && <p className="mt-1 text-sm text-aksen dark:text-red-300">{error.pesan}</p>}
      </div>

      <button
        type="submit"
        className="rounded-lg bg-aksen px-5 py-3 font-semibold text-white transition-colors hover:bg-red-800 focus-visible:outline-offset-2 focus-visible:outline-aksen"
      >
        Kirim
      </button>

      <p className="text-sm leading-6 text-slate-500 dark:text-gray-400">
        Form ini belum mengirim pesan. Pengiriman pesan akan diaktifkan pada
        tahap berikutnya.
      </p>

      {berhasil && (
        <p className="rounded-lg bg-green-100 p-3 text-green-800 dark:bg-green-900 dark:text-green-100" role="status">
          Terima kasih, {nama}! Pesanmu sudah lolos pemeriksaan.
        </p>
      )}
    </form>
  );
}
