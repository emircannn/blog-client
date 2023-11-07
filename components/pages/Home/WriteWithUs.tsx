
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface Props {
  data: Settings
}

const WriteWithUs: React.FC<Props> = ({
  data
}) => {
  return (
    <div className="container">
        <div className=" backgroundColor py-5 px-6 md:px-12 flex max-md:flex-col-reverse items-center gap-4 rounded-2xl">
        <div className="w-1/2 max-md:w-full md:p-6 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
            <span className="text-xs sm:text-sm font-semibold opacity-60">Yazar Kadromuza Katıl</span>
            <h6 className="heading !font-bold uppercase">Yazınızı sitemizde yayımlayalım.</h6>
            </div>
            <p className="text-xs sm:text-sm font-semibold opacity-60">
            Değerlendirilmek ve sonrasında yayımlamak için yazı havuzumuza güncel politik yazılarınızı gönderebilirsiniz. Detaylı bilgi için iletişime geçiniz.
            </p>

            <Link target="_blank" href={`mailto:${data.email}`}>
            <Button className="bg-thirth dark:bg-thirth" size='lg'>
                İletişime Geçiniz
            </Button>
            </Link>
        </div>
        <div className="w-1/2 max-md:w-full aspect-square overflow-hidden relative">
            <Image alt="writeWithus" fill quality={100} className="object-contain" src='/images/writewithus.webp'/>
        </div>
    </div>
    </div>
  )
}

export default WriteWithUs