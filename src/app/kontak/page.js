import FormKontak from "@/components/FormKontak";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Kontak",
  description: "Hubungi Yogi El Safani melalui form kontak, email, atau Github.",
};

export default function Kontak() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <div className="mb-8">
        <h1 className="mt-2 text-3xl font-bold text-primary md:text-4xl">
          Hubungi Saya
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Saya terbuka untuk kolaborasi, pertanyaan, maupun tawaran proyek baru.
          Silakan kirim pesan melalui form di samping atau hubungi saya lewat media
          sosial yang tersedia.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardContent>
            <FormKontak />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">
              Temukan Saya di
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="space-y-3 text-sm text-aksen">
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
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
