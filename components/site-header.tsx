"use client"

import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"

import MenuSheet from "./MenuSheet"
import SearchPopup from "./SearchPopup"
import UserLogin from "./UserLogin"

export function SiteHeader() {
  const pathname = usePathname()
  const login = pathname === "/watermark" || pathname === "/bingkai"
  return (
    <header className="full-width sticky top-0 z-40 w-full border-b bg-background">
      <div className="flex items-center space-x-4 py-3 sm:justify-between sm:space-x-0 lg:py-4">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center gap-4">
            <div className="max-lg:hidden">
              <UserLogin />
            </div>
            <SearchPopup />
            {login}
            {login ? (
              <div className="lg:hidden">
                <UserLogin />
              </div>
            ) : (
              ""
            )}
            <div className="lg:hidden">
              <MenuSheet />
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
