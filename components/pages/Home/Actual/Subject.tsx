
import { dateFormater } from "@/components/utils"
import Image from "next/image"
import Link from "next/link"

interface Props {
  data: Magazine
}

const Subject: React.FC<Props> = ({
  data
}) => {
  return (
    <div className="flex gap-3 w-full p-2 backgroundColor rounded-xl">
        <Link href={`/sayi/${data.seo}`} className="aspect-[1/1.3] shrink-0 h-[100px] relative overflow-hidden rounded-xl flex">
        <Image alt="banner" src={data.image} fill quality={100} className="object-cover hover:scale-105 duration-300"/>
        </Link>

        <div className="flex flex-col justify-between gap-2">
            <Link href={`/sayi/${data.seo}`}className="articleHeading !line-clamp-1 hover:underline duration-300">{data.title}</Link>

            <p className="line-clamp-3 text-xs font-medium opacity-60">
                {data.desc}
            </p>

            <div className="flex justify-between items-center gap-2 text-xs opacity-60">
                <span className="line-clamp-1">Yazı Adeti: {data.contributions.length}</span>
                <span>{dateFormater(data.createdAt)}</span>
            </div>
        </div>
    </div>
  )
}

export default Subject