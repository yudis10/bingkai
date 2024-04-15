import CBCarousel from "@/components/CBCarousel"
import CBdetikNetwork from "@/components/CBdetikNetwork"
import CBSeasonal from "@/components/CBSeasonal"
import CBTerbaru from "@/components/CBTerbaru"
import CBWatermark from "@/components/CBWatermark"
import Headline from "@/components/Headline"

export const dynamic = "force-dynamic"
export default function IndexPage() {
  return (
    <>
      <Headline />
      <CBTerbaru />
      <CBCarousel />
      <CBSeasonal />
      <CBWatermark />
      <CBdetikNetwork />
    </>
  )
}
