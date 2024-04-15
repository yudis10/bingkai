import { Copy } from "lucide-react"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Icons } from "./icons"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

const SearchPopup = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="h-auto p-0">
          <Icons.search className="size-6" />
        </Button>
      </DialogTrigger>
      <DialogContent
        className="border-0 shadow-none sm:max-w-md"
        overlayClassName="bg-white/90"
      >
        <DialogHeader>
          <DialogTitle>Kata Pencarian</DialogTitle>
        </DialogHeader>
        <form
          action={"/search"}
          className="flex items-center space-x-2 border-b"
        >
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              className="border-0 focus-visible:ring-transparent focus-visible:ring-offset-transparent"
              placeholder="Cari bingkai untuk momenmu..."
            />
          </div>
          <Button type="submit" size="sm" variant={"ghost"} className="px-3">
            <span className="sr-only">Search</span>
            <Icons.search className="size-8" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
export default SearchPopup
