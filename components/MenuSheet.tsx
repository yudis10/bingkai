"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import logo from "@/public/images/logo.png"

import { siteConfig } from "@/config/site"
import { cn, useActivePath } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Icons } from "./icons"

const MenuSheet = () => {
  const checkActivePath = useActivePath()
  const pathname = usePathname()
  const login = pathname === "/watermark" || pathname === "/bingkai"
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="p-0">
          <Icons.menu className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle asChild>
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={logo}
                className="h-8 w-auto lg:h-12"
                alt={siteConfig.name}
                width={200}
              />
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="my-5 grid">
          {siteConfig.mainNav.map((item, i) => (
            <SheetClose asChild key={item.href}>
              <Link
                key={item.title}
                href={item.href}
                className={cn(
                  "w-full bg-transparent p-3 text-lg font-semibold transition-all duration-300",
                  checkActivePath(item.href) &&
                    "bg-gradient-to-r from-bingkai-darkorange to-bingkai-orange/75 text-white"
                )}
              >
                {item.title}
              </Link>
            </SheetClose>
          ))}
          {!login ? (
            <>
              <SheetClose asChild>
                <Link
                  href="#"
                  className="mb-3 bg-gray-100 px-3 py-2.5 text-center text-sm font-semibold text-bingkai-darkorange"
                >
                  Daftar MPC
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="#"
                  className="bg-slate-200 px-3 py-2.5 text-center text-sm font-semibold text-bingkai"
                >
                  Masuk
                </Link>
              </SheetClose>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="flex-col">
          <div
            className="-mx-6 mb-5 h-0.5 bg-gradient-to-r from-[#ffb54c] via-[#ed131b] to-[#ffb54c]"
            role="presentation"
            aria-hidden="true"
          ></div>
          <div className="flex flex-col gap-2">
            <h3 className="text-center text-xs">Connect With Us</h3>
            {siteConfig.links?.length ? (
              <div className="flex flex-wrap justify-center gap-1.5">
                {siteConfig.links?.map(
                  (item, index) =>
                    item.href && (
                      <Link
                        key={index}
                        href={item.href}
                        className={cn(
                          "flex size-8 overflow-hidden rounded-full"
                        )}
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
        </div>
      </SheetContent>
    </Sheet>
  )
}
export default MenuSheet
