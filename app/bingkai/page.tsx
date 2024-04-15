"use client"

import "swiper/css"
import "swiper/css/navigation"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import logodmaster from "@/public/images/logo-dmaster.png"
import { ArrowLeft, RotateCcw, ZoomIn, ZoomOut } from "lucide-react"
import { Navigation } from "swiper/modules"
import { Swiper as SwiperContainer, SwiperSlide } from "swiper/react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Icons } from "@/components/icons"
import TermsAndCondition from "@/components/TermsAndCondition"

const Bingkai = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [shape, setShape] = useState("square")
  const [previewImage, setPreviewImage] = useState<string | null>()
  const [imageSize, setImageSize] = useState(50)
  const [activeStep, setActiveStep] = useState(0)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (
      event.target.files &&
      event.target.files.length > 0 &&
      event.target.files[0].type.includes("image")
    ) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]))
      setActiveStep(1)
    }
  }

  const step = [
    {
      title: "Pilih desain",
      active: true,
    },
    {
      title: "Atur posisi foto",
      active: false,
    },
    {
      title: "Unduh & bagikan",
      active: false,
    },
  ]

  const carouselData = [
    {
      square:
        "https://akcdn.detik.net.id/photowall/1630984319-framedesign-square.png",
      portrait:
        "https://akcdn.detik.net.id/photowall/1630984325-framedesign-potrait.png",
      title: "Vaksin Covid-19",
    },
    {
      square:
        "https://akcdn.detik.net.id/photowall/1700550637-framedesign-square.png",
      portrait:
        "https://akcdn.detik.net.id/photowall/1700550661-framedesign-potrait.png",
      title: "Selamat Hari Guru",
    },
    {
      square:
        "https://akcdn.detik.net.id/photowall/1689866290-framedesign-square.png",
      portrait:
        "https://akcdn.detik.net.id/photowall/1689866365-framedesign-potrait.png",
      title: "Hari Anak Nasional 2023",
    },
  ]
  return (
    <>
      <h1 className="text-2xl font-bold sm:text-4xl">Hari Kemerdekaan</h1>
      <div className="mx-auto w-full max-w-2xl">
        <div className="mb-9 flex items-center justify-center gap-6">
          <Image
            src={logodmaster}
            className="h-20 w-auto min-w-0 object-contain"
            alt="logo"
          />
          <Image
            src="https://akcdn.detik.net.id/community/media/visual/2019/06/28/2846568b-3057-49c6-8125-ff5135d07312.png?d=1"
            className="h-auto min-w-0 max-w-52 object-contain"
            alt="logo"
            width={340}
            height={65}
          />
        </div>
        <div className="mx-auto flex max-w-lg flex-col gap-5 rounded bg-white px-3 py-6 sm:gap-6 sm:p-6">
          <div className="flex w-full items-start gap-0.5">
            {step.map((item, i) => (
              <div
                key={item.title}
                className={cn(
                  "grid basis-1/3 gap-3 text-center text-xs font-semibold sm:text-base",
                  activeStep >= i ? "text-black-light1" : "text-zinc-300"
                )}
              >
                <div
                  className={cn(
                    "h-1.5 rounded-md",
                    activeStep >= i ? "bg-blue" : "bg-zinc-300"
                  )}
                />
                {`${i + 1}. ${item.title}`}
              </div>
            ))}
          </div>
          {/* Step 1 */}
          <div
            className={cn("flex flex-col gap-5", activeStep !== 0 && "hidden")}
          >
            <SwiperContainer
              style={{
                width: "100%",
              }}
              className="[--swiper-navigation-sides-offset:0] max-sm:[--swiper-navigation-size:12px] max-sm:[&>.swiper-button-next]:p-4 max-sm:[&>.swiper-button-prev]:p-4"
              navigation
              autoplay={false}
              speed={600}
              loop={false}
              modules={[Navigation]}
              slidesPerView={1}
              onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
            >
              {carouselData.map((data, i) => (
                <SwiperSlide key={i} style={{ height: "auto" }}>
                  <div className="flex h-full flex-col items-center gap-4 bg-white px-6 text-center md:px-12">
                    <div
                      className={cn(
                        "relative w-full",
                        shape === "square" ? "aspect-square" : "aspect-[9/16]"
                      )}
                    >
                      <Image
                        src={shape === "square" ? data.square : data.portrait}
                        className="size-full object-contain"
                        fill
                        alt={data.title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </SwiperContainer>
            <h2 className="text-center text-sm font-semibold sm:text-lg">
              Pilih bentuk/ukuran foto.
            </h2>
            <div className="flex w-full max-w-sm gap-5 self-center">
              <PilihAspek
                id="square"
                value="square"
                shape={shape}
                setShape={setShape}
              >
                <span className="font-semibold">Square</span>
                Feed, foto profil
              </PilihAspek>

              <PilihAspek
                id="portrait"
                value="portrait"
                shape={shape}
                setShape={setShape}
              >
                <span className="font-semibold">Portrait</span>
                Story (IG, FB, WA)
              </PilihAspek>
            </div>
            <label
              htmlFor="choose-file"
              className="w-full max-w-52 self-center bg-bingkai-darkorange px-8 py-2 text-center font-bold text-white transition-colors duration-300 ease-in-out hover:bg-bingkai-orange hover:ring-2 hover:ring-bingkai-orange focus:outline-none focus:ring-2 focus:ring-bingkai-orange focus:ring-offset-bingkai-darkorange sm:max-w-xs sm:py-3 sm:text-2xl"
            >
              Lanjutkan
            </label>
            <input
              id="choose-file"
              type="file"
              className="hidden"
              onChange={handleChange}
              onClick={(e) => (e.currentTarget.value = "")}
              accept="image/*"
            />
          </div>

          {/* Step 2 */}

          <div
            className={cn("flex flex-col gap-5", activeStep !== 1 && "hidden")}
          >
            <div className="relative w-full border-2 border-dashed p-3">
              <div
                className={cn(
                  "relative",
                  shape === "square" ? "aspect-square" : "aspect-[9/16]"
                )}
              >
                <Image
                  src={
                    carouselData[activeSlide][
                      shape as keyof (typeof carouselData)[0]
                    ]
                  }
                  alt="bingkai"
                  fill
                  className="z-10"
                />
                {previewImage && (
                  <Image
                    src={previewImage}
                    alt="preview"
                    width={702}
                    height={702}
                    className="absolute inset-0 size-full object-cover"
                  />
                )}
              </div>
            </div>
            <h2 className="text-center text-sm font-semibold sm:text-lg">
              Sesuaikan foto kamu dengan cara menggesernya.
            </h2>
            <div className="mx-auto flex w-full max-w-xs items-center gap-2">
              <button type="button">
                <ZoomOut />
              </button>
              <Slider
                defaultValue={[imageSize]}
                max={100}
                step={1}
                onValueChange={(value) => setImageSize(value[0])}
                trackClassName="h-0.5"
                rangeClassName="bg-blue"
                thumbClassName="size-3 bg-blue"
              />
              <button type="button">
                <ZoomIn />
              </button>
              <button type="button">
                <RotateCcw />
              </button>
            </div>
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                className="border-2 border-bingkai-darkorange p-3.5 text-bingkai-darkorange transition-all hover:bg-bingkai-darkorange hover:text-white focus:outline-none focus:ring-2 focus:ring-bingkai-darkorange focus:ring-offset-bingkai-darkorange"
                onClick={() => setActiveStep(0)}
              >
                <ArrowLeft />
              </button>
              <button
                type="button"
                className="w-full max-w-52 self-center bg-bingkai-darkorange px-8 py-2 text-center font-bold text-white transition-colors duration-300 ease-in-out hover:bg-bingkai-orange hover:ring-2 hover:ring-bingkai-orange focus:outline-none focus:ring-2 focus:ring-bingkai-orange focus:ring-offset-bingkai-darkorange sm:max-w-xs sm:py-3 sm:text-2xl"
                onClick={() => setActiveStep(2)}
              >
                Lanjutkan
              </button>
            </div>
          </div>

          {/* Step 3 */}

          <div
            className={cn("flex flex-col gap-5", activeStep !== 2 && "hidden")}
          >
            <div className="relative mx-auto aspect-square w-full max-w-80">
              <Image
                src="https://akcdn.detik.net.id/photowall/1630984319-framedesign-square.png"
                alt="bingkai"
                fill
                className="z-10"
              />
            </div>
            <h2 className="text-balance text-center text-sm font-semibold sm:text-lg">
              Salin hashtag di bawah ini dan bagikan ke sosial media Anda.
            </h2>
            <div className="mx-auto flex max-w-sm items-center justify-between gap-3 rounded bg-white-dark1 px-3 py-2.5 text-sm">
              <span className="font-semibold">#dmasterclass #detikcom</span>
              <button
                type="button"
                className="flex shrink-0 items-center gap-2 rounded border border-blue px-2 py-1.5 text-xs italic text-blue transition-all hover:bg-blue hover:text-white"
              >
                <Icons.copy />
                Salin hashtag
              </button>
            </div>
            <div className="grid gap-2">
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-md bg-blue py-3 font-semibold text-white"
              >
                <Icons.download />
                Unduh
              </button>
              <Link
                href="/eksplor"
                className="rounded-md border border-blue py-3 text-center font-semibold text-blue"
              >
                Eksplore Photowall Lainnya
              </Link>
              <Button
                variant={"ghost"}
                className="flex h-auto items-center gap-2 py-1 font-semibold"
                onClick={() => setActiveStep(0)}
              >
                <Icons.undo /> Ulangi Desain
              </Button>
            </div>
          </div>

          <TermsAndCondition />
        </div>
      </div>
    </>
  )
}

const PilihAspek = ({
  id,
  value,
  children,
  shape,
  setShape,
}: {
  id: string
  value: string
  children: React.ReactNode
  shape: string
  setShape: (value: string) => void
}) => {
  return (
    <label className="flex grow cursor-pointer items-start gap-3 rounded-md border border-zinc-300 p-3">
      <input
        type="radio"
        id={id}
        name="shape"
        value={value}
        className="mt-1 size-3 border-gray-300 bg-gray-100 text-black-light1 focus:ring-2 focus:ring-black-light1"
        checked={shape === value}
        onChange={(e) => setShape(e.target.value)}
      />
      <p className="grid text-xs text-black-light1 sm:text-sm">{children}</p>
    </label>
  )
}
export default Bingkai
