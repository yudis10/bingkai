import Link from "next/link"
import xml2js from "xml2js"

const IndeksPageDesign = async () => {
  const url =
    process.env.NODE_ENV === "production"
      ? "https://bingkai.vercel.app/sitemap-0.xml"
      : "http://localhost:3000/sitemap-0.xml"
  const staticData = await fetch(url, {
    cache: "no-store",
  })
    .then((response) => response.text())
    .then((str) => xml2js.parseStringPromise(str))
    .then((result) => {
      const urls = (result.urlset.url as Array<{ loc: string[] }>).map(
        (url) => url.loc[0]
      )
      return urls
    })
    .catch((err) => console.log("Error:", err))

  return (
    <div>
      <ul className="mt-5 grid gap-1">
        {staticData?.map((url) => (
          <li key={url}>
            <Link href={url}>{url}</Link>
          </li>
        ))}
        <li>
          <Link href="/404">https://bingkai.vercel.app/404</Link>
        </li>
      </ul>
    </div>
  )
}
export default IndeksPageDesign
