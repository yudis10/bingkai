"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { Download, ImagePlus, RefreshCcw } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

import { Icons } from "./icons"

const AddWatermark = () => {
  const [fileName, setFileName] = useState("Pilih Gambar")
  const [color, setColor] = useState("#AA248C")
  const [rotate, setRotate] = useState(180)
  const [opacity, setOpacity] = useState(100)
  const [previewImage, setPreviewImage] = useState("")
  const [watermarkType, setWatermarkType] = useState("text")

  const hiddenFileInput = useRef<HTMLInputElement>(null)

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  // Function to handle image drop
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const file = event.dataTransfer.files[0]
    if (file) {
      setPreviewImage(URL.createObjectURL(file))
    }
  }

  const openFileInput = () => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click()
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      setFileName("Pilih Gambar")
    } else {
      setFileName(event.target.files[0].name)
      setPreviewImage(URL.createObjectURL(event.target.files[0]))
    }
  }

  function handleReset() {
    setFileName("Pilih Gambar")
    setColor("#AA248C")
    setRotate(180)
    setOpacity(100)
    setPreviewImage("")
  }

  return (
    <div className="flex flex-col gap-6 md:flex-row lg:gap-10">
      <div className="flex flex-col gap-4">
        <div className="grid w-full items-center gap-1.5">
          <Label
            htmlFor="choose-file"
            className="bg-black-nightblack px-4 py-2 text-center text-xl font-bold text-white"
          >
            {fileName}
          </Label>
          <Input
            id="choose-file"
            type="file"
            className="hidden"
            onChange={handleChange}
            ref={hiddenFileInput}
            accept="image/*"
          />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label className="text-lg font-semibold">Pilih Watermark</Label>
          <Select
            onValueChange={(value) => setWatermarkType(value)}
            defaultValue={watermarkType}
          >
            <SelectTrigger className="rounded-none">
              <SelectValue placeholder="Pilih Watermark.." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="text">Teks</SelectItem>
                <SelectItem value="image">Image</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {watermarkType === "text" ? (
          <div className="grid w-full items-center gap-1.5">
            <Label className="text-lg font-semibold">Font</Label>
            <Select onValueChange={(value) => console.log(value)}>
              <SelectTrigger className="rounded-none">
                <SelectValue placeholder="Pilih Font.." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="helvetica">Helvetica</SelectItem>
                  <SelectItem value="arial">Arial</SelectItem>
                  <SelectItem value="montserrat">Montserrat</SelectItem>
                  <SelectItem value="opensans">Open Sans</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        ) : (
          <div className="grid w-full items-center gap-1.5">
            <Label className="text-lg font-semibold">Tile</Label>
            <div className="flex items-center">
              {[...Array(3)].map((_, i) => (
                <label className="grid size-9 place-content-center border border-gray-light3 bg-white has-[input:checked]:bg-gray-light4">
                  <input
                    type="radio"
                    name="tile"
                    id={`tile-${i + 1}`}
                    className="hidden"
                    defaultChecked={i === 0 ? true : false}
                  />
                  {i === 0 ? (
                    <Icons.tile1 />
                  ) : i === 1 ? (
                    <Icons.tile2 />
                  ) : (
                    <Icons.tile3 />
                  )}
                </label>
              ))}
            </div>
          </div>
        )}

        <div className="grid w-full items-center gap-1.5">
          <Label className="text-lg font-semibold">Posisi</Label>
          <Select onValueChange={(value) => console.log(value)}>
            <SelectTrigger className="rounded-none">
              <SelectValue placeholder="Pilih Posisi.." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="atas">Atas</SelectItem>
                <SelectItem value="tengah">Tengah</SelectItem>
                <SelectItem value="kiri">Kiri</SelectItem>
                <SelectItem value="kanan">Kanan</SelectItem>
                <SelectItem value="bawah">Bawah</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label className="text-lg font-semibold">Ukuran</Label>
          <Select onValueChange={(value) => console.log(value)}>
            <SelectTrigger className="rounded-none">
              <SelectValue placeholder="Pilih Ukuran.." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="besar">Besar</SelectItem>
                <SelectItem value="sedang">Sedang</SelectItem>
                <SelectItem value="kecil">Kecil</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {watermarkType === "text" ? (
          <div className="grid w-full items-center gap-1.5">
            <Label className="text-lg font-semibold">Warna</Label>
            <div className="flex items-center gap-5">
              <Input
                type="color"
                defaultValue={"#AA248C"}
                className="size-11 shrink-0 rounded-none border-0 p-0"
                onChange={(event) => setColor(event.target.value)}
              />
              <div className="flex h-10 w-full items-center justify-between rounded-none border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                {color}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="grid w-full items-center gap-1.5">
          <Label className="text-lg font-semibold">Rotasi</Label>
          <div className="flex items-center gap-5">
            <Slider
              defaultValue={[rotate]}
              max={360}
              step={1}
              onValueChange={(value) => setRotate(value[0])}
            />
            <div className="flex h-10 w-full items-center justify-between rounded-none border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
              {rotate}
            </div>
          </div>
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label className="text-lg font-semibold">Transparansi</Label>
          <div className="flex items-center gap-5">
            <Slider
              defaultValue={[opacity]}
              max={100}
              step={1}
              onValueChange={(value) => setOpacity(value[0])}
            />
            <div className="flex h-10 w-full items-center justify-between rounded-none border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
              {opacity}
            </div>
          </div>
        </div>

        <div className="flex gap-2.5">
          <button
            className="flex basis-1/2 items-center justify-center gap-2 border border-bingkai-orange bg-white px-5 py-1.5 text-lg font-semibold text-bingkai-darkorange"
            onClick={handleReset}
          >
            <RefreshCcw className="size-5 rotate-45" />
            Reset
          </button>
          <button className="flex basis-1/2 items-center justify-center gap-2 bg-black px-5 py-1.5 text-lg font-semibold text-white">
            <Download className="size-5" />
            Download
          </button>
        </div>
      </div>

      <div className="aspect-square w-full min-w-0 self-start border border-gray-300 p-4">
        {previewImage ? (
          <Image
            src={previewImage}
            alt={fileName}
            width={702}
            height={702}
            className="size-full object-cover"
            onClick={openFileInput}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          />
        ) : (
          <div
            className="grid size-full cursor-pointer place-content-center border-4 border-dashed border-gray-300"
            onClick={openFileInput}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center">
              <ImagePlus className="size-20 text-gray-400" />
              <p className="text-lg font-semibold">Tarik Gambarmu ke Sini</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default AddWatermark
