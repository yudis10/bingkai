"use client"

import Image from "next/image"

import { cn } from "@/lib/utils"

import "swiper/css"
import "swiper/css/effect-cards"
import "swiper/css/navigation"

import { EffectCards, Navigation } from "swiper/modules"
import { Swiper as SwiperContainer, SwiperSlide } from "swiper/react"

import { siteConfig } from "@/config/site"

const HeadlineCarousel = () => {
  const carouselData = [
    {
      title: "Slide 1",
      image: "/images/hl-1.png",
    },
    {
      title: "Slide 2",
      image: "/images/hl-2.jpg",
    },
    {
      title: "Slide 3",
      image: "/images/hl-3.jpg",
    },
  ]

  return (
    <SwiperContainer
      effect={"cards"}
      navigation
      grabCursor={true}
      modules={[EffectCards, Navigation]}
      style={{ width: "100%" }}
    >
      {carouselData.map((data, i) => (
        <SwiperSlide key={i} className="shadow-lg" style={{ height: "auto" }}>
          <div className="flex h-full flex-col items-center gap-4 bg-white p-3 text-center">
            <div className={cn("relative aspect-square w-full")}>
              <Image
                src={`${siteConfig.basePath}${data.image}`}
                className="size-full object-contain"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 100vw"
                fill
                alt={data.title}
                priority
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </SwiperContainer>
  )
}
export default HeadlineCarousel
