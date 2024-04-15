"use client"

import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper as SwiperContainer, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"

import Image from "next/image"
import Link from "next/link"

import { BASE_URL } from "@/config/const"

const Swiper = () => {
  const carouselData = [
    {
      image: `${BASE_URL}/images/transmedia-1.png`,
      title: "HUT Transmedia",
      href: "#",
    },
    {
      image: `${BASE_URL}/images/transmedia-2.png`,
      title: "HUT Transmedia 2 Dekade",
      href: "#",
    },
    {
      image: `${BASE_URL}/images/bingkai-2.png`,
      title: "Hari Kemerdekaan ke-77",
      href: "#",
    },
    {
      image: `${BASE_URL}/images/bingkai-1.png`,
      title: "Hari Kemerdekaan ke-77",
      href: "#",
    },
    {
      image: `${BASE_URL}/images/han-1.png`,
      title: "Hari Anak Nasional 2023",
      href: "#",
    },
    {
      image: `${BASE_URL}/images/han-2.png`,
      title: "Hari Anak Nasional 2023",
      href: "#",
    },
    {
      image: `${BASE_URL}/images/tahunbaruislam-2.png`,
      title: "Tahun Baru Islam 1445 H",
      href: "#",
    },
    {
      image: `${BASE_URL}/images/tahunbaruislam-1.png`,
      title: "Tahun Baru Islam 1445 H",
      href: "#",
    },
    {
      image: `${BASE_URL}/images/han-3.png`,
      title: "Hari Anak Nasional 2023",
      href: "#",
    },
    {
      image: `${BASE_URL}/images/transmedia-3.png`,
      title: "HUT Transmedia 2 Dekade",
      href: "#",
    },
  ]

  return (
    <SwiperContainer
      style={{ width: "100%" }}
      navigation
      pagination={{ type: "bullets", clickable: true }}
      autoplay={false}
      speed={600}
      loop={true}
      modules={[Autoplay, Navigation, Pagination]}
      slidesPerView={1.8}
      spaceBetween={20}
      breakpoints={{
        640: { slidesPerView: 3, spaceBetween: 30 },
        768: { slidesPerView: 3, spaceBetween: 30 },
      }}
    >
      {carouselData.map((data, i) => (
        <SwiperSlide key={i} style={{ height: "auto" }}>
          <div className="flex h-full flex-col items-center gap-4 border bg-white p-5 text-center">
            <Image
              src={data.image}
              className="aspect-square w-full shrink-0 grow-0 object-cover"
              width={300}
              height={300}
              alt={data.title}
            />
            <h2 className="line-clamp-2 font-medium">{data.title}</h2>
            <Link
              href={data.href}
              className="mt-auto inline-block bg-bingkai-darkorange px-5 py-1.5 text-lg font-bold text-white"
            >
              Pakai
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </SwiperContainer>
  )
}
export default Swiper
