"use client"

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

const Search = () => {
  const searchResults = [
    {
      imgSrc: "/images/bingkai-2.png",
      href: "/bingkai",
      views: 100,
      downloads: 20,
      title: "Hari Kemerdekaan ke-77 Lorem Ipsum Dolor Sit Amet",
    },
    {
      imgSrc: "/images/bingkai-3.png",
      href: "/bingkai",
      views: 100,
      downloads: 20,
    },
    {
      imgSrc: "/images/bingkai-4.png",
      href: "/bingkai",
      views: 100,
      downloads: 20,
    },
    {
      imgSrc: "/images/bingkai-1.png",
      href: "/bingkai",
      views: 100,
      downloads: 20,
    },
    {
      imgSrc: "/images/han-1.png",
      href: "/bingkai",
      views: 100,
      downloads: 20,
      title: "Hari Anak Nasional 2023",
    },
    {
      imgSrc: "/images/han-2.png",
      href: "#1",
      views: 100,
      downloads: 20,
      title: "Hari Anak Nasional 2023 Lorem Ipsum Dolor Sit Amet",
    },
    {
      imgSrc: "/images/han-3.png",
      href: "/bingkai",
      views: 100,
      downloads: 20,
      title: "Hari Anak Nasional 2023",
    },
    {
      imgSrc: "/images/han-4.png",
      href: "/bingkai",
      views: 100,
      downloads: 20,
      title: "Hari Anak Nasional 2023",
    },
    {
      imgSrc: "/images/transmedia-1.png",
      href: "/bingkai",
      views: 100,
      downloads: 20,
      title: "HUT Transmedia 2 Dekade",
    },
    {
      imgSrc: "/images/transmedia-2.png",
      href: "#1",
      views: 100,
      downloads: 20,
      title: "HUT Transmedia 2 Dekade Lorem Ipsum Dolor Sit Amet",
    },
    {
      imgSrc: "/images/transmedia-3.png",
      href: "/bingkai",
      views: 100,
      downloads: 20,
      title: "HUT Transmedia 2 Dekade",
    },
    {
      imgSrc: "/images/transmedia-4.png",
      href: "/bingkai",
      views: 100,
      downloads: 20,
      title: "HUT Transmedia 2 Dekade",
    },
    {
      imgSrc: "/images/tahunbaruislam-1.png",
      href: "/bingkai",
      views: 100,
      downloads: 20,
      title: "Tahun Baru Islam 1445 H",
    },
    {
      imgSrc: "/images/tahunbaruislam-2.png",
      href: "#1",
      views: 100,
      downloads: 20,
      title: "Tahun Baru Islam 1445 H Lorem Ipsum Dolor Sit Amet",
    },
    {
      imgSrc: "/images/tahunbaruislam-3.png",
      href: "/bingkai",
      views: 100,
      downloads: 20,
      title: "Tahun Baru Islam 1445 H",
    },
    {
      imgSrc: "/images/tahunbaruislam-4.png",
      href: "/bingkai",
      views: 100,
      downloads: 20,
      title: "Tahun Baru Islam 1445 H",
    },
  ]

  return (
    <>
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <h2 className="text-lg md:text-xl">
          Ditemukan 201 hasil pencarian &quot;
          <span className="font-bold tracking-tighter">Kemerdekaan</span>
          &quot;,
        </h2>
        <div className="flex items-center gap-3">
          <span className="shrink-0 text-lg font-bold">Urutkan</span>
          <Select>
            <SelectTrigger className="w-52 grow rounded-none bg-transparent px-4 py-2 text-black-light1">
              <SelectValue placeholder="Berdasarkan..." />
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

      <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-5 sm:grid-cols-[repeat(auto-fill,minmax(245px,1fr))] sm:gap-x-10 sm:gap-y-12">
        {searchResults.map((data, i) => (
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
export default Search
