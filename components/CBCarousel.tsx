"use client"

import Link from "next/link"

import Swiper from "@/components/Swiper"

import { Button } from "./ui/button"

const CBCarousel = () => {
  return (
    <div
      className="full-width"
      style={{
        background: "linear-gradient(180deg, #DB4200 0%, #FFB800 100%)",
      }}
    >
      <div className="breakout grid grid-cols-1 gap-7 py-11 lg:flex">
        <div className="flex shrink-0 flex-col items-start gap-4 bg-white px-10 py-16">
          <h2 className="text-4xl font-bold text-bingkai">
            Bingkai Hadir
            <br />
            Untukmu!
          </h2>
          <p className="mb-3 text-xl">Rayakan setiap momen dengan Bingkai</p>
          <Button
            asChild
            className="rounded-none bg-bingkai-darkorange px-5 py-2 text-xl font-bold"
          >
            <Link href="/bingkai">Eksplor Bingkai</Link>
          </Button>
        </div>
        <div className="w-full min-w-0 overflow-hidden xl:max-h-96">
          <Swiper />
        </div>
      </div>
    </div>
  )
}
export default CBCarousel
