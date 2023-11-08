import { FileDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Props {
  data: Magazine
}

const Cover: React.FC<Props> = ({
  data
}) => {
  return (
    <div className="backgroundColor p-3 flex lg:flex-col rounded-xl gap-3">
        <div className="lg:w-full max-lg:h-[100px] shrink-0 aspect-[1/1.35] rounded-xl relative overflow-hidden">
            <Image alt={data.title} title={data.title} src={data.image} fill quality={100} className="object-cover hover:scale-105 duration-300"/>
        </div>

        <Link target="_blank" href={data.file} className="text-xs sm:text-sm font-medium flex items-center justify-between w-full line-clamp-1 gap-2 hover:underline">
            Sayı Tam Dosyası
            <FileDown/>
        </Link>
    </div>
  )
}

export default Cover