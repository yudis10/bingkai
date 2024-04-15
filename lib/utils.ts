import { usePathname } from "next/navigation"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function useActivePath(): (path: string) => boolean {
  const pathname = usePathname()

  const checkActivePath = (path: string) => {
    if (path === "/" && pathname !== path) {
      return false
    }
    return pathname.startsWith(path)
  }

  return checkActivePath
}
