import { dateFormater } from "@/components/utils"
import Image from "next/image"
import Link from "next/link"

interface Props {
  data: Contributions
}

const WriterSubjects: React.FC<Props> = ({
  data
}) => {
  return (
    <div className="w-full rounded-xl p-3 backgroundColor flex gap-3">
        <Link href={`/sayi/${data?.magazine.seo}`} className="relative aspect-[1/1.35] h-[120px] shrink-0 rounded-xl overflow-hidden flex">
            <Image alt="banner" src={data?.magazine.image} fill quality={100} className="object-cover hover:scale-105 duration-300"/>
        </Link>

        <div className="flex justify-between flex-col gap-2 w-full">
            <div className="flex items-center justify-between w-full">
            <Link target="_blank" href={`/sayi/${data?.magazine.seo}`} className="font-semibold text-[17px]">{data?.magazine.title}</Link>
            <span className="text-sm font-medium opacity-60">{dateFormater(data.createdAt)}</span>
            </div>

            <Link href={data?.file} className="articleHeading hover:underline">
                {data?.title}
            </Link>

            <span className="text-sm font-medium opacity-60">Sayfa: {data.startPage}-{data.endPage}</span>
        </div>
    </div>
  )
}

export default WriterSubjects