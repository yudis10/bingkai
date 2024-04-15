import { getPlaiceholder } from "plaiceholder"

export default async function getBase64(imageUrl: string) {
  try {
    const res = await fetch(imageUrl)

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`)
    }

    const buffer = await res.arrayBuffer()

    const { base64 } = await getPlaiceholder(Buffer.from(buffer))

    //console.log(`base64: ${base64}`)

    return base64
  } catch (e) {
    if (e instanceof Error) console.log(e.stack)
  }
}

interface imageResult {
  title: string
  img: string
  time: string
  label: string
  labelSizes: { width: number; height: number }
  href: string
  blurredData?: string
}

export async function addBlurredDataUrls(
  images: imageResult[]
): Promise<imageResult[]> {
  // make requests at once instead of awaiting each one - avoid waterfall
  const base64Promises = images.map((photo) => getBase64(photo.img))
  // resolve all requests in order
  const base64Results = await Promise.all(base64Promises)

  const photosWithBlur: imageResult[] = images.map((photo, i) => {
    photo.blurredData = base64Results[i]
    return photo
  })

  return photosWithBlur
}

// const imageBlur = await fetch(
//     `your image url`
//   ).then(async (res) => {
//     return Buffer.from(await res.arrayBuffer()).toString("base64");
//   });

//   <Image
//   src={`your image url`}
//   alt="Some Placeholder"
//   width={100}
//   height={100}
//   blurDataURL={`data:image/png;base64,${imageBlur}`}
//   placeholder="blur"
// />
