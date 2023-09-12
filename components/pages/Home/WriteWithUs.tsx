'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"


const WriteWithUs = () => {
  return (
    <div className="container">
        <div className=" backgroundColor py-5 px-6 md:px-12 flex max-md:flex-col-reverse items-center gap-4 rounded-2xl">
        <div className="w-1/2 max-md:w-full md:p-6 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
            <span className="text-xs sm:text-sm font-semibold opacity-60">Yazar Kadromuza Katıl</span>
            <h4 className="heading !font-bold uppercase">Yazınızı sitemizde yayımlayalım.</h4>
            </div>
            <p className="text-xs sm:text-sm font-semibold opacity-60">
            Değerlendirilmek ve sonrasında yayımlamak için yazı havuzumuza güncel politik yazılarınızı gönderebilirsiniz. Detaylı bilgi için iletişime geçiniz.
            </p>

            <div>
            <Button className="bg-thirth dark:bg-thirth" size='lg'>
                İletişime Geçiniz
            </Button>
            </div>
        </div>
        <div className="w-1/2 max-md:w-full aspect-square overflow-hidden relative">
            <Image alt="writeWithus" fill quality={100} className="object-contain" src='/images/writewithus.webp'/>
        </div>
    </div>
    </div>
  )
}

export default WriteWithUs