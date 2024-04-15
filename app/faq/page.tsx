import Image from "next/image"

import { BASE_URL } from "@/config/const"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Faq = () => {
  const guideline = [
    {
      number: "01",
      title: "Eksplor dan Pilih Photowall",
      description:
        "Cari dan pilih bingkai yang ingin digunakan berdasarkan topik pilihan.",
      imageUrl: `${BASE_URL}/images/guideline-1.png`,
    },
    {
      number: "02",
      title: "Pasang Photowall",
      description: "Pasang foto terbaikmu di dalam photowall.",
      imageUrl: `${BASE_URL}/images/guideline-2.png`,
    },
    {
      number: "03",
      title: "Unduh Foto",
      description: "Bingkai foto berhasil dipasang dan foto siap diunduh.",
      imageUrl: `${BASE_URL}/images/guideline-3.png`,
    },
    {
      number: "04",
      title: "Bagikan Foto",
      description: "Bagikan foto ke media sosial favoritmu.",
      imageUrl: `${BASE_URL}/images/guideline-4.png`,
    },
  ]

  const faq = [
    {
      title: "Apa itu topik?",
      description:
        "Topik adalah tema yang digunakan untuk memilih bingkai foto.",
    },
    {
      title: "Ada berapa bentuk bingkai foto?",
      description: "Terdapat berbagai bentuk bingkai foto yang dapat dipilih.",
    },
    {
      title: "Bagaimana cara memasang bingkai di foto saya?",
      description:
        "Anda dapat memasang bingkai pada foto dengan mengikuti langkah-langkah berikut.",
    },
    {
      title: "Apakah saya bisa membuat bingkai foto sendiri?",
      description:
        "Ya, Anda dapat membuat bingkai foto sendiri sesuai keinginan Anda.",
    },
    {
      title:
        "Bagaimana cara mengunggah foto yang ingin saya pasangkan bingkai?",
      description:
        "Anda dapat mengunggah foto dengan mengakses menu unggah pada aplikasi kami.",
    },
    {
      title: "Di mana saya dapat menemukan foto yang sudah dibingkai?",
      description:
        "Foto yang sudah dibingkai dapat ditemukan dalam koleksi Anda.",
    },
    {
      title:
        "Apakah yang harus saya lakukan ketika saya menemukan error 'waktu sudah habis'?",
      description:
        "Jika Anda menemui pesan error tersebut, silakan menghubungi dukungan pelanggan kami.",
    },
    {
      title:
        "Ketika saya memasang bingkai foto, apakah foto saya disimpan oleh detik?",
      description:
        "Kami hanya menyimpan data foto yang dibingkai dan tidak menyimpan informasi pribadi pengguna.",
    },
    {
      title:
        "Ketika saya memasang bingkai foto, apakah identitas saya disimpan oleh detik?",
      description:
        "Tidak, kami tidak menyimpan identitas pengguna yang memasang bingkai foto.",
    },
  ]

  return (
    <>
      <h1 className="mb-11 mt-14 text-3xl font-bold">Guideline</h1>
      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-16">
        {guideline.map((item) => (
          <li
            key={item.number}
            className="flex flex-col items-center gap-2 text-center"
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={1028}
              height={641}
              className="mb-4 w-full object-contain"
            />
            <span className="text-7xl font-extrabold tracking-tight text-orange-light1">
              {item.number}
            </span>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-balance text-lg">{item.description}</p>
          </li>
        ))}
      </ul>
      <div className="mb-11 mt-16">
        <h2 className="mb-9 text-2xl font-bold">
          FAQ (Frequently Asked Questions)
        </h2>
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faq.map((item, i) => (
            <AccordionItem
              key={item.title}
              value={`item-${i}`}
              className="border-none bg-white px-5"
            >
              <AccordionTrigger className="gap-2 text-left text-lg font-semibold">
                {item.title}
              </AccordionTrigger>
              <AccordionContent>{item.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  )
}
export default Faq
