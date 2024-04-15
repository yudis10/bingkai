import Image from "next/image"
import Link from "next/link"
import cover from "@/public/images/404.png"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <Image
        src={cover}
        alt="Page Not Found"
        width={480}
        height={287}
        priority
      />
      <h1 className="text-center text-xl font-medium">
        <strong className=" text-3xl font-extrabold">Mohon maaf,</strong>
        <br />
        campaign tidak dapat ditemukan.
      </h1>
      <Link
        href="/"
        className="w-full max-w-[344px] self-center bg-bingkai-darkorange px-0 py-5 text-center text-xl font-semibold text-white sm:w-auto sm:px-10"
      >
        Eksplore Photowall Lainnya
      </Link>
    </div>
  )
}
