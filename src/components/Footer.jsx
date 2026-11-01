export default function Footer() {
  return (
    <footer className="mt-auto bg-utama p-5 text-center text-white">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Yogi El Safani.
        Dibuat dengan Next.js di Kelas Industri UBIG.
      </p>
    </footer>
  );
}
