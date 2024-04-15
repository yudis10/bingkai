import CardBingkai from "./CardBingkai"
import CBTitle from "./CBTitle"

type dataProps = {
  imgSrc: string
  href: string
  views: number
  downloads: number
}

type CBEksplorProps = {
  title?: string
  href?: string
  datas?: dataProps[]
}

const defaultData = [
  {
    imgSrc: "/images/bingkai-1.png",
    href: "#",
    views: 100,
    downloads: 20,
  },
  {
    imgSrc: "/images/bingkai-2.png",
    href: "#",
    views: 100,
    downloads: 20,
  },
  {
    imgSrc: "/images/bingkai-3.png",
    href: "#",
    views: 100,
    downloads: 20,
  },
  {
    imgSrc: "/images/bingkai-4.png",
    href: "#",
    views: 100,
    downloads: 20,
  },
]

const CBEksplor = ({
  title = "terbaru",
  href = "#",
  datas = defaultData,
}: CBEksplorProps) => {
  return (
    <div className="flex flex-col gap-5">
      <CBTitle title={title} href={href} />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-5 sm:grid-cols-[repeat(auto-fill,minmax(245px,1fr))] sm:gap-x-10 sm:gap-y-12">
        {datas.map((data, i) => (
          <CardBingkai key={i} {...data} />
        ))}
      </div>
    </div>
  )
}
export default CBEksplor
