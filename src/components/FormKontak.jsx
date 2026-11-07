"use client";

import { useState } from "react";

const kelasInput =
  "mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-3 focus:border-utama dark:focus:border-sky-200 focus:outline-none";

export default function FormKontak() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    tel: "",
    subjects: "",
    pesan: "",
  });
  const [error, setError] = useState({});

  function ubahForm(e) {
    const { name, value } = e.target;
    setForm((formSaatIni) => ({ ...formSaatIni, [name]: value }));
  }

  function kirim(e) {
    e.preventDefault();
    const errorBaru = {};

    if (form.nama.trim() === "") {
      errorBaru.nama = "Nama wajib diisi.";
    }
    if (!form.email.includes("@")) {
      errorBaru.email = "Email harus memuat tanda @, contoh nama@gmail.com.";
    }
    if (form.tel.trim() === "") {
      errorBaru.tel = "Nomor HP wajib diisi.";
    }
    if (form.subjects === "") {
      errorBaru.subjects = "Silakan pilih keperluan.";
    }
    if (form.pesan.trim() === "") {
      errorBaru.pesan = "Pesan wajib diisi.";
    }

    setError(errorBaru);
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
          value={form.nama}
          onChange={ubahForm}
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
          value={form.email}
          onChange={ubahForm}
          placeholder="Contoh: budi@email.com"
          className={kelasInput}
        />
        {error.email && <p className="mt-1 text-sm text-aksen dark:text-red-300">{error.email}</p>}
      </div>

      <div>
        <label htmlFor="tel" className="block font-semibold text-utama dark:text-sky-200">
          Nomor Hp
        </label>
        <input
          type="tel"
          id="tel"
          name="tel"
          value={form.tel}
          onChange={ubahForm}
          placeholder="08123456789"
          className={kelasInput}
        />
        {error.tel && <p className="mt-1 text-sm text-aksen dark:text-red-300">{error.tel}</p>}
      </div>

      <div>
        <label htmlFor="subjects" className="block font-semibold text-utama dark:text-sky-200">
          Keperluan
        </label>
        <select
          name="subjects"
          id="subjects"
          value={form.subjects}
          onChange={ubahForm}
          className={kelasInput}
        >
          <option value="">-- Pilih Keperluan --</option>
          <option value="kerjasama">Kerjasama / Proyek</option>
          <option value="pertanyaan">Pertanyaan Umum</option>
        </select>
        {error.subjects && (
          <p className="mt-1 text-sm text-aksen dark:text-red-300">{error.subjects}</p>
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
          value={form.pesan}
          onChange={ubahForm}
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

      <p className="text-sm leading-6 text-slate-500">
        Form ini belum mengirim pesan. Pengiriman pesan akan diaktifkan pada
        tahap berikutnya.
      </p>
    </form>
  );
}
