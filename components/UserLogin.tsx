"use client"

import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

import { Icons } from "./icons"

const UserLogin = () => {
  const pathname = usePathname()
  const login = pathname === "/watermark" || pathname === "/bingkai"
  return (
    <div className="grid size-8 place-content-center">
      {login ? (
        <Menubar className="size-8 border-0 p-0">
          <MenubarMenu>
            <MenubarTrigger className="size-8 cursor-pointer justify-center p-0">
              <Avatar className="size-full">
                <AvatarImage
                  src={`${siteConfig.basePath}/images/profile.webp`}
                  alt="user profile picture"
                  className="object-cover"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </MenubarTrigger>
            <MenubarContent className="min-w-max rounded-none">
              <MenubarItem asChild className="w-full px-5 font-semibold">
                <button type="button">Logout</button>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      ) : (
        <Menubar className="size-8 border-0 p-0">
          <MenubarMenu>
            <MenubarTrigger className="size-8 cursor-pointer justify-center p-0">
              <Icons.user className="size-6" />
            </MenubarTrigger>
            <MenubarContent className="min-w-max rounded-none">
              <MenubarItem asChild className="w-full px-5 font-semibold">
                <button type="button">Daftar MPC</button>
              </MenubarItem>
              <MenubarItem asChild className="w-full px-5 font-semibold">
                <button type="button">Masuk</button>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      )}
    </div>
  )
}
export default UserLogin
