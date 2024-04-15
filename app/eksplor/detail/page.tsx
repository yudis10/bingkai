"use client"

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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import CardBingkai from "@/components/CardBingkai"
import TagCloud from "@/components/TagCloud"

const EksplorDetail = () => {
  const categoryResults = [
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
    {
      imgSrc: `${BASE_URL}/images/transmedia-1.png`,
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
    <>
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <h2 className="text-xl font-semibold">
          <span className="md:hidden">Topik: </span>Hari Kemerdekaan
        </h2>
        <div className="flex items-center gap-3">
          <span className="shrink-0 text-lg font-bold">Urutkan</span>
          <Select>
            <SelectTrigger className="h-auto w-52 grow rounded-none bg-transparent px-4 py-2 text-black-light1">
              <SelectValue placeholder="Pilih urutan..." />
            </SelectTrigger>
            <SelectContent className="rounded-none">
              <SelectGroup>
                <SelectLabel>Berdasarkan</SelectLabel>
                <SelectItem value="apple">Terpopuler</SelectItem>
                <SelectItem value="banana">Terbaru</SelectItem>
                <SelectItem value="blueberry">Direkomendasikan</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <h3 className="shrink-0 text-lg font-bold">Topik lainnya:</h3>
        <TagCloud />
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-5 sm:grid-cols-[repeat(auto-fill,minmax(245px,1fr))] sm:gap-x-10 sm:gap-y-12">
        {categoryResults.map((data, i) => (
          <CardBingkai key={i} {...data} />
        ))}
      </div>

      <Pagination className="md:my-14">
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
    </>
  )
}
export default EksplorDetail
