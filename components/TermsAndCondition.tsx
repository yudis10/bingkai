import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const TermsAndCondition = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="h-auto py-0.5 text-lg font-semibold leading-4 tracking-tighter text-black-light1 underline underline-offset-2"
        >
          Syarat & Ketentuan
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] max-w-[90vw] overflow-scroll sm:max-w-[425px] sm:rounded-none">
        <DialogHeader>
          <DialogTitle className="text-2xl">Syarat dan ketentuan</DialogTitle>
          <DialogDescription className="text-black">
            Photowall detikcom merupakan kontes foto dengan menggunakan bingkai
            menarik dari detikcom. Peserta kontes harus mengikuti mekanisme yang
            telah ditentukan agar berkesempatan menjadi pemenang, dan berhak
            mendapatkan hadiah uang tunai senilai puluhan juta rupiah Mekanisme:
          </DialogDescription>
        </DialogHeader>

        <ol className="grid list-decimal gap-2 px-3 text-sm">
          <li>
            Silakan tentukan desain yang kamu sukai, dengan menekan tombol panah
            kanan atau kiri
          </li>
          <li>
            Pilih ukuran Foto Frame yang kamu inginkan. Pilih Portrait untuk
            kamu yang ingin upload fotonya ke IG Stories, dan pilih Square untuk
            kamu ingin upload fotonya ke IG Feed. Jika sudah, silakan klik
            tombol “lanjutkan”
          </li>
          <li>
            Upload foto terbaikmu, dan sesuaikan foto di dalam frame agar
            posisinya pas; dengan menggeser, memperbesar, memperkecil, atau
            memutar foto. Jika sudah, silakan klik tombol “lanjutkan”
          </li>
          <li>Salin hashtag</li>
          <li>Download foto yang sudah terpasang dalam frame</li>
          <li>
            Tempel hashtag #detikcombisa pada caption foto, dan mention
            @detikcom
          </li>
          <li>Upload foto yang sudah terpasang frame ke Instagram pribadimu</li>
        </ol>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" variant={"outline"} className="w-full">
              Saya Mengerti
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
export default TermsAndCondition
