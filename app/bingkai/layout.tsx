import { BASE_URL } from "@/config/const"
import CBEksplor from "@/components/CBEksplor"

interface BingkaiLayoutProps {
  children: React.ReactNode
}

const hariKemerdekaan = [
  {
    imgSrc: `${BASE_URL}/images/bingkai-2.png`,
    href: "#",
    views: 100,
    downloads: 20,
    title: "Hari Kemerdekaan ke-77 Lorem Ipsum Dolor Sit Amet",
  },
  {
    imgSrc: `${BASE_URL}/images/han-1.png`,
    href: "#",
    views: 100,
    downloads: 20,
    title: "Hari Anak Nasional 2023",
  },
  {
    imgSrc: `${BASE_URL}/images/transmedia-1.png`,
    href: "#",
    views: 100,
    downloads: 20,
    title: "HUT Transmedia 2 Dekade",
  },
  {
    imgSrc: `${BASE_URL}/images/tahunbaruislam-1.png`,
    href: "#",
    views: 100,
    downloads: 20,
    title: "Tahun Baru Islam 1445 H",
  },
]

const BingkaiLayout = ({ children }: BingkaiLayoutProps) => {
  return (
    <div className="flex flex-col gap-7 pt-14 md:gap-11">
      {children}
      <CBEksplor
        title="Terbaru"
        href="/eksplor/detail"
        datas={hariKemerdekaan}
      />
    </div>
  )
}
export default BingkaiLayout
