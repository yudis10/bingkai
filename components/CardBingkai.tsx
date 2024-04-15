import Image from "next/image"
import Link from "next/link"
import { Download, Eye } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { Button } from "./ui/button"

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#e5e7eb" offset="20%" />
      <stop stop-color="#f3f4f6" offset="50%" />
      <stop stop-color="#e5e7eb" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#e5e7eb" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str)

type CardBingkaiProps = {
  className?: string
  titleClass?: string
  btnClass?: string
  imgSrc?: string
  href?: string
  views?: number
  downloads?: number
  title?: string
}
const CardBingkai = ({
  imgSrc = "/images/bingkai-1.png",
  href = "#",
  views = 100,
  downloads = 20,
  className,
  titleClass,
  btnClass,
  title = "Hari Kemerdekaan ke-77",
}: CardBingkaiProps) => {
  return (
    <div className={cn("group flex flex-col items-start gap-2.5", className)}>
      <Link
        href={href}
        className="relative isolate aspect-square w-full overflow-hidden bg-white"
      >
        <Image
          src={`${imgSrc}`}
          alt={title}
          className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(245, 245))}`}
        />
      </Link>
      <Link href={href}>
        <h2
          className={cn(
            "line-clamp-2 text-balance text-base font-bold transition-all duration-300 group-hover:text-bingkai-darkorange md:text-xl",
            titleClass
          )}
        >
          {title}
        </h2>
      </Link>
      <Button
        asChild
        className={cn(
          "inline-flex h-auto items-center gap-2 rounded-none bg-bingkai px-2.5 py-1 text-xs md:text-sm",
          btnClass
        )}
      >
        <Link href={href}>
          <Eye />
          {views} Views
        </Link>
      </Button>
      <span className="flex items-center gap-1 font-semibold text-black-light2 max-sm:text-xs">
        <Download className="size-3.5 text-black" />
        {downloads} downloads
      </span>
    </div>
  )
}
export default CardBingkai
