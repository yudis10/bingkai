import AddWatermark from "@/components/AddWatermark"

const Watermark = () => {
  const howto = [
    {
      title: "Tambah Gambar",
      description:
        "Untuk memulai, langkah pertama adalah memilih gambar yang ingin Anda beri watermark. Tekan tombol 'Tambah Gambar' di bawah ini. Gambar yang ditambahkan tidak akan dikirim keluar dari perangkat yang Anda gunakan.",
    },
    {
      title: "Watermark Otomatis",
      description:
        "Jika Anda ingin menambahkan watermark secara otomatis, centang checkbox 'Watermark Otomatis'.",
    },
    {
      title: "Masukan Teks",
      description:
        "Setelah itu, ketikkan teks watermark yang diinginkan dalam kotak teks. Sebagai contoh, '10-10-2021 Verifikasi Pinjaman Online'.",
    },
    {
      title: "Pilih Font",
      description:
        "Pilih jenis teks yang diinginkan dengan memilihnya dari kotak 'Font' seperti yang terlihat pada gambar di bawah ini.",
    },
    {
      title: "Pilih Posisi Watermark",
      description:
        "Pilih posisi watermark melalui kotak 'Posisi Teks'. Alternatifnya, Anda dapat menentukan posisinya langsung dengan menekan teks pada kotak gambar di sebelah kanan dan menariknya ke lokasi yang diinginkan.",
    },
    {
      title: "Pilih Ukuran Watermark",
      description:
        "Pilih ukuran watermark dari opsi yang tersedia pada kotak 'Ukuran Font'.",
    },
    {
      title: "Tentukan Warna Watermark",
      description:
        "Setelah itu, pilih warna watermark yang diinginkan dari kotak opsi 'Warna Teks'.",
    },
    {
      title: "Mengatur Rotasi Watermark",
      description:
        "Sesuaikan rotasi watermark dengan menggunakan opsi 'Rotasi Teks'. Geser-geser nilai rotasi untuk mendapatkan tampilan yang diinginkan.",
    },
    {
      title: "Mengatur Opasitas Watermark",
      description:
        "Sesuaikan tingkat opasitas watermark dengan menggunakan opsi 'Opacity Teks'. Geser-geser nilai opasitas untuk mendapatkan efek yang diinginkan.",
    },
    {
      title: "Mereset watermark",
      description:
        "Jika Anda perlu mengatur ulang watermark, gunakan tombol 'Reset' untuk mengembalikan semua pengaturan ke nilai awal.",
    },
    {
      title: "Download Gambar",
      description:
        "Setelah menyesuaikan watermark sesuai keinginan Anda, tekan tombol 'Download' untuk menyimpan gambar KTP yang telah di-watermark ke perangkat Anda.",
    },
  ]

  return (
    <div className="flex flex-col gap-20">
      <AddWatermark />

      <div
        id="howto"
        className="mx-auto flex max-w-4xl scroll-mt-24 flex-col gap-8"
      >
        <h3 className="text-3xl font-bold">Cara Pakai</h3>
        <ol className="flex flex-col gap-5">
          {howto.map((item, i) => (
            <li key={item.title} className="text-lg">
              <h4 className="text-xl font-bold">
                {i + 1}. {item.title}
              </h4>
              <p>{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
export default Watermark
