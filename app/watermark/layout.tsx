import Link from "next/link"
import { ArrowRightCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

interface WatermarkLayoutProps {
  children: React.ReactNode
}
const WatermarkLayout = ({ children }: WatermarkLayoutProps) => {
  return (
    <div className="flex flex-col gap-11 pt-14">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold md:text-4xl">Watermark</h1>

        <Link
          href="#howto"
          className="inline-flex h-auto items-center gap-2 rounded-none bg-bingkai px-2 py-1.5 text-sm font-bold uppercase text-white sm:px-3  sm:text-sm"
        >
          Cara Pakai <ArrowRightCircle className="size-4 sm:size-6" />
        </Link>
      </div>
      {children}
    </div>
  )
}
export default WatermarkLayout
