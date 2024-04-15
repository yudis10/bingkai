"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import logo from "@/public/images/logo.png"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn, useActivePath } from "@/lib/utils"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const checkActivePath = useActivePath()
  return (
    <div className="flex w-full items-center gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src={logo}
          className="h-8 w-auto lg:h-12"
          alt={siteConfig.name}
          width={200}
          priority
        />
      </Link>
      {items?.length ? (
        <nav className="ml-auto mr-6 hidden gap-6 border-r-2 border-bingkai pr-6 lg:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-lg font-bold leading-tight text-bingkai transition-all duration-300 hover:text-bingkai-darkorange",
                    checkActivePath(item.href) && "text-bingkai-darkorange"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
