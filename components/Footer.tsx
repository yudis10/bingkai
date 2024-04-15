import Image from "next/image"
import Link from "next/link"
import logo from "@/public/images/logo.png"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

const Footer = () => {
  const additionalLink = {
    title: "Contact Us",
    href: "/contact",
  }
  const updatedMainNav = [...siteConfig.mainNav, additionalLink]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="full-width relative isolate mt-12 bg-white py-10 sm:px-0 sm:py-7">
      <div
        className="full-width absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#ffb54c] via-[#ed131b] to-[#ffb54c]"
        role="presentation"
        aria-hidden="true"
      ></div>
      <div className="flex flex-col items-center justify-between gap-y-6 sm:flex-row">
        <Link href="/">
          <Image
            src={logo}
            alt="logo bingkai.id"
            className="h-11 w-auto object-contain"
          />
        </Link>
        {updatedMainNav?.length ? (
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-3">
            {updatedMainNav?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex items-center text-sm text-bingkai transition-all duration-300 hover:text-bingkai-darkorange"
                    )}
                  >
                    {item.title}
                  </Link>
                )
            )}
          </nav>
        ) : null}
      </div>
      <hr
        className="my-5 block h-[1px] border-none bg-transparent sm:my-3 sm:bg-black-light5"
        role="presentation"
        aria-hidden="true"
      />

      <div className="sm: flex flex-col items-center sm:flex-row sm:justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="text-center text-xs">Connect With Us</h3>
          {siteConfig.links?.length ? (
            <div className="flex justify-center gap-1.5">
              {siteConfig.links?.map(
                (item, index) =>
                  item.href && (
                    <Link
                      key={index}
                      href={item.href}
                      className={cn("flex size-8 overflow-hidden rounded-full")}
                    >
                      <Image
                        src={item.image}
                        width={32}
                        height={32}
                        alt={item.title}
                        className="size-full object-contain"
                      />
                    </Link>
                  )
              )}
            </div>
          ) : null}
        </div>
        <hr
          className="my-5 block h-[1px] border-none bg-black-light5 sm:hidden"
          role="presentation"
          aria-hidden="true"
        />
        <div className="flex flex-col gap-2 text-center text-sm sm:text-right lg:flex-row">
          <div>Copyright @ {currentYear} detikevent. All right reserved.</div>
          <div>
            <Link
              href="#"
              className="text-bingkai transition-all duration-300 hover:text-bingkai-darkorange"
            >
              Kotak Pos
            </Link>{" "}
            /{" "}
            <Link
              href="#"
              className="text-bingkai transition-all duration-300 hover:text-bingkai-darkorange"
            >
              Iklan
            </Link>{" "}
            /{" "}
            <Link
              href="#"
              className="text-bingkai transition-all duration-300 hover:text-bingkai-darkorange"
            >
              Privacy
            </Link>{" "}
            /{" "}
            <Link
              href="#"
              className="text-bingkai transition-all duration-300 hover:text-bingkai-darkorange"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
