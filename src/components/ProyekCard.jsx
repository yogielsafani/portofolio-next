import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProyekCard({ proyek }) {
    const kategoriProyek = [
        ...new Set([proyek.kategori, proyek.kategori2, proyek.kategori3].filter(Boolean)),
    ];

    return (
        <Link
         href={`/proyek/${proyek.slug}`}
         className="block rounded-xl hover:shadow-md"
         >
        <Card className="h-full">
            <Image
            src={proyek.gambar_url}
            alt={`Tangkapan layar ${proyek.judul}`}
            width={640}
            height={420}
            className="h-36 w-full object-cover"
            />
            <CardHeader>
                <div className="flex flex-wrap gap-2">
                    {kategoriProyek.map((kategori) => {
                        const variant = {
                            HTML: "html",
                            CSS: "css",
                            JavaScript: "javascript",
                        }[kategori] ?? "secondary";

                        return (
                            <Badge key={kategori} variant={variant}>
                                {kategori}
                            </Badge>
                        );
                    })}
                </div>
                <CardTitle className="text-lg text-primary">{proyek.judul}</CardTitle>
                <CardDescription>{proyek.deskripsi}</CardDescription>
            </CardHeader>
        </Card>
       </Link>
    );
   }