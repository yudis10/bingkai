import Link from "next/link"
import { X } from "lucide-react"

import { siteConfig } from "@/config/site"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"

import { Icons } from "./icons"

const MenuPopup = () => {
  return (
    <Menubar className="size-8 border-0 p-0">
      <MenubarMenu>
        <MenubarTrigger className="group grid size-8 place-content-center justify-center p-0">
          <Icons.menu className="col-start-1 row-start-1 size-6 rotate-90 opacity-0 transition-all group-data-[state='closed']:rotate-0 group-data-[state='closed']:opacity-100" />
          <X className="col-start-1 row-start-1 size-6 rotate-0 opacity-0 transition-all group-data-[state='open']:rotate-90 group-data-[state='open']:opacity-100" />
        </MenubarTrigger>
        <MenubarContent className="min-w-max rounded-none">
          {siteConfig.mainNav.map((item, i) => (
            <MenubarItem
              key={item.title}
              asChild
              className="w-full px-5 font-semibold"
            >
              <Link href={item.href}>{item.title}</Link>
            </MenubarItem>
          ))}
          <MenubarSeparator className="bg-black-light5" />
          <MenubarItem asChild className="w-full px-5 font-semibold">
            <Link href="#">Daftar MPC</Link>
          </MenubarItem>
          <MenubarItem asChild className="w-full px-5 font-semibold">
            <Link href="#">Masuk</Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
export default MenuPopup
