import Link from "next/link"
import { Swiper as SwiperType } from "swiper"
import { Navigation } from "swiper/modules"
import { Swiper as SwiperContainer, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const TagCloud = () => {
  const dataTag = [
    {
      id: 1,
      name: "Hari Kemerdekaan",
      url: "#",
    },
    {
      id: 2,
      name: "Hari Anak Nasional",
      url: "#",
    },
    {
      id: 3,
      name: "HUT Transmedia",
      url: "#",
    },
    {
      id: 4,
      name: "Tahun Baru Islam",
      url: "#",
    },
    {
      id: 5,
      name: "Hari Pendidikan Nasional",
      url: "#",
    },
    {
      id: 6,
      name: "Sudah Vaksin Jilid 2",
      url: "#",
    },
    {
      id: 7,
      name: "Hari Guru",
      url: "#",
    },
    {
      id: 8,
      name: "Natal dan Tahun Baru",
      url: "#",
    },
    {
      id: 9,
      name: "Hari Pahlawan",
      url: "#",
    },
    {
      id: 10,
      name: "Maulid Nabi",
      url: "#",
    },
  ]
  const swiperRef = useRef<SwiperType>()
  return (
    <div className="relative flex w-full min-w-0 items-center md:mx-2">
      <button
        className="absolute -left-2.5 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-0.5 shadow max-md:hidden"
        type="button"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <ChevronLeft className="size-4" />
      </button>
      <SwiperContainer
        style={{ width: "100%" }}
        speed={600}
        loop={false}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={12}
      >
        {dataTag.map((data) => (
          <SwiperSlide
            key={data.id}
            style={{ height: "auto", width: "fit-content" }}
          >
            <Link
              href={data.url}
              className="flex bg-white px-4 py-1 font-medium text-black-nightblack transition-all hover:text-bingkai-darkorange sm:text-lg"
            >
              {data.name}
            </Link>
          </SwiperSlide>
        ))}
      </SwiperContainer>
      <button
        className="absolute -right-2.5 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-0.5 shadow max-md:hidden"
        type="button"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <ChevronRight className="size-4" />
      </button>
    </div>
  )
}
export default TagCloud
