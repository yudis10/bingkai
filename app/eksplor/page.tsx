import { BASE_URL } from "@/config/const"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import CBEksplor from "@/components/CBEksplor"

const Eksplor = () => {
  const hariKemerdekaan = [
    {
      imgSrc: `${BASE_URL}/images/bingkai-2.png`,
      href: "/bingkai",
      views: 100,
      downloads: 20,
      title: "Hari Kemerdekaan ke-77 Lorem Ipsum Dolor Sit Amet",
    },
    {
      imgSrc: `${BASE_URL}/images/bingkai-3.png`,
      href: "/bingkai",
      views: 100,
      downloads: 20,
    },
    {
      imgSrc: `${BASE_URL}/images/bingkai-4.png`,
      href: "/bingkai",
      views: 100,
      downloads: 20,
    },
    {
      imgSrc: `${BASE_URL}/images/bingkai-1.png`,
      href: "/bingkai",
      views: 100,
      downloads: 20,
    },
  ]
  const hariAnakNasional = [
    {
      imgSrc: `${BASE_URL}/images/han-1.png`,
      href: "/bingkai",
      views: 100,
      downloads: 20,
      title: "Hari Anak Nasional 2023",
    },
    {
      imgSrc: `${BASE_URL}/images/han-2.png`,
      href: "#1",
      views: 100,
      downloads: 20,
      title: "Hari Anak Nasional 2023 Lorem Ipsum Dolor Sit Amet",
    },
    {
      imgSrc: `${BASE_URL}/images/han-3.png`,
      href: "/bingkai",
      views: 100,
      downloads: 20,
      title: "Hari Anak Nasional 2023",
    },
    {
      imgSrc: `${BASE_URL}/images/han-4.png`,
      href: "/bingkai",
      views: 100,
      downloads: 20,
      title: "Hari Anak Nasional 2023",
    },
  ]
  const hutTransmedia = [
    {
      imgSrc: `/images/transmedia-1.png`,
      href: "/bingkai",
      views: 100,
      downloads: 20,
      title: "HUT Transmedia 2 Dekade",
    },
    {
      imgSrc: `${BASE_URL}/images/transmedia-2.png`,
      href: "#1",
      views: 100,
      downloads: 20,
      title: "HUT Transmedia 2 Dekade Lorem Ipsum Dolor Sit Amet",
    },
    {
      imgSrc: `${BASE_URL}/images/transmedia-3.png`,
      href: "/bingkai",
      views: 100,
      downloads: 20,
      title: "HUT Transmedia 2 Dekade",
    },
    {
      imgSrc: `${BASE_URL}/images/transmedia-4.png`,
      href: "/bingkai",
      views: 100,
      downloads: 20,
      title: "HUT Transmedia 2 Dekade",
    },
  ]
  const tahunbaruislam = [
    {
      imgSrc: `${BASE_URL}/images/tahunbaruislam-1.png`,
      href: "/bingkai",
      views: 100,
      downloads: 20,
      title: "Tahun Baru Islam 1445 H",
    },
    {
      imgSrc: `${BASE_URL}/images/tahunbaruislam-2.png`,
      href: "#1",
      views: 100,
      downloads: 20,
      title: "Tahun Baru Islam 1445 H Lorem Ipsum Dolor Sit Amet",
    },
    {
      imgSrc: `${BASE_URL}/images/tahunbaruislam-3.png`,
      href: "/bingkai",
      views: 100,
      downloads: 20,
      title: "Tahun Baru Islam 1445 H",
    },
    {
      imgSrc: `${BASE_URL}/images/tahunbaruislam-4.png`,
      href: "/bingkai",
      views: 100,
      downloads: 20,
      title: "Tahun Baru Islam 1445 H",
    },
  ]

  return (
    <div className="grid min-h-0 auto-rows-max gap-12 sm:gap-14">
      <CBEksplor
        title="Hari Kemerdekaan"
        href="/eksplor/detail"
        datas={hariKemerdekaan}
      />
      <CBEksplor
        title="Hari Anak Nasional"
        href="/eksplor/detail"
        datas={hariAnakNasional}
      />
      <CBEksplor
        title="HUT Transmedia"
        href="/eksplor/detail"
        datas={hutTransmedia}
      />
      <CBEksplor
        title="Tahun Baru Islam"
        href="/eksplor/detail"
        datas={tahunbaruislam}
      />

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem className="hidden sm:block">
            <PaginationLink href="#">14</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
export default Eksplor
