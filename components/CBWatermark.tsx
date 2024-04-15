import Image from "next/image"
import Link from "next/link"

import { BASE_URL } from "@/config/const"

import { Button } from "./ui/button"

const CBWatermark = () => {
  return (
    <div className="flex w-full flex-col bg-bingkai-yellow sm:flex-row">
      <Image
        src={`${BASE_URL}/images/watermark.png`}
        alt="Bingkai watermark"
        className="aspect-square w-full shrink-0 object-cover sm:aspect-square sm:w-5/12 lg:aspect-[480/428] lg:w-[480px]"
        placeholder="blur"
        width={480}
        height={428}
        blurDataURL="data:image/webp;base64,UklGRlwCAABXRUJQVlA4WAoAAAAgAAAANgAAMAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggbgAAADAEAJ0BKjcAMQA+7XCyVDoyL6MkGAkjQB2JZwDL4AWlGk5KuFIAuQrWAAD+3Yf0nTZkE30QvEYa3RPPcrqD2sIetNOPJZ16IRxyTEP0LeIf2TAf/ws81D4aRqLOP3nwmwuvwFvE9wIFwrVlgqAA"
      />
      <div className="flex flex-col items-center gap-4 px-6 py-8 sm:items-start sm:justify-center">
        <h2 className="text-2xl font-bold sm:text-4xl">
          Proteksi Data Anda dengan Watermark
        </h2>
        <p className="mb-1.5 text-xl sm:text-2xl">
          Jaga privasi Anda dengan pilihan Watermark kami yang mudah dan
          terpercaya
        </p>
        <Button
          asChild
          className="inline-block h-auto rounded-none bg-bingkai-orange px-8 py-3 text-xl font-bold text-white"
        >
          <Link href="/watermark">Pasang Watermark</Link>
        </Button>
      </div>
    </div>
  )
}
export default CBWatermark
