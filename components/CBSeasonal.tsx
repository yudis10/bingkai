import { BASE_URL } from "@/config/const"

import CardBingkai from "./CardBingkai"
import CBTitle from "./CBTitle"

const CBSeasonal = () => {
  const tahunbaruislam = [
    {
      imgSrc: `${BASE_URL}/images/tahunbaruislam-1.png`,
      href: "#",
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
      href: "#",
      views: 100,
      downloads: 20,
      title: "Tahun Baru Islam 1445 H",
    },
  ]

  return (
    <div className="flex flex-col gap-3 py-12">
      <CBTitle title="Tahun Baru Islam" href="#" />
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-12">
        {tahunbaruislam.map((data, i) => (
          <CardBingkai
            key={i}
            className="group first:col-span-full sm:first:col-span-1"
            titleClass="group-first:text-2xl"
            {...data}
          />
        ))}
      </div>
    </div>
  )
}
export default CBSeasonal
