import { BASE_URL } from "@/config/const"

import CardBingkai from "./CardBingkai"
import CBTitle from "./CBTitle"

const CBTerbaru = () => {
  const terbaru = [
    {
      imgSrc: `${BASE_URL}/images/bingkai-1.png`,
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
      imgSrc: `${BASE_URL}/images/tahunbaruislam-3.png`,
      href: "#",
      views: 100,
      downloads: 20,
      title: "Tahun Baru Islam 1445 H",
    },
    {
      imgSrc: `${BASE_URL}/images/han-2.png`,
      href: "#",
      views: 100,
      downloads: 20,
      title: "Hari Anak Nasional 2023 Lorem Ipsum Dolor Sit Amet",
    },
    {
      imgSrc: `${BASE_URL}/images/transmedia-2.png`,
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
    {
      imgSrc: `${BASE_URL}/images/tahunbaruislam-4.png`,
      href: "#",
      views: 100,
      downloads: 20,
      title: "Tahun Baru Islam 1445 H",
    },
    {
      imgSrc: `${BASE_URL}/images/bingkai-3.png`,
      href: "#",
      views: 100,
      downloads: 20,
    },
  ]

  return (
    <div className="flex flex-col gap-3 py-12">
      <CBTitle title="Terbaru" href="#" />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-5 sm:grid-cols-[repeat(auto-fill,minmax(245px,1fr))] sm:gap-x-10 sm:gap-y-12">
        {terbaru.map((data, i) => (
          <CardBingkai key={i} {...data} />
        ))}
      </div>
    </div>
  )
}
export default CBTerbaru
