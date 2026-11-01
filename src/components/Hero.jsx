import Image from "next/image"
import Link from "next/link"

export default function Hero({ nama, tagline }) {
    return (
        <section className="flex flex-col items-center gap-6 text-center
        md:flex-row md:text-left">
            <Image
              src="/yogik.png"
              alt={'Foto profil ${nama}'}
              width={180}
              height={180}
              loading="eager"
              className="rounded-full border-4 border-aksen"
              />
              <div>
                <h1 className="text-3xl font-bold text-utama
                md:text-5xl">Halo, saya {nama}</h1>
                <p className="mt-3 text-lg text-gray-700">{tagline}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      href="/tentang"
                      className="rounded-lg bg-aksen px-5 py-2.5 font-semibold text-white"
                    >
                      Tentang saya
                    </Link>
                    <Link
                      href="/#keahlian"
                      className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 font-semibold text-utama"
                    >
                      Lihat keahlian
                    </Link>
                </div>
              </div>
        </section>
    );
}