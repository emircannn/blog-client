import { Badge } from "@/components/ui/badge"
import { dateFormater } from "@/components/utils"
import Image from "next/image"
import Link from "next/link"

interface Props {
  data: Magazine
}

const Item: React.FC<Props> = ({
  data
}) => {
  return (
    <div className="w-full flex flex-col p-3 backgroundColor rounded-xl gap-3">
        <Link href={`/sayi/${data.seo}`} className="aspect-[1/1.35] shrink-0 w-full relative overflow-hidden rounded-xl flex">
        <Image alt="banner" src={data.image} fill quality={100} className="object-cover hover:scale-105 duration-300"/>

        <span className="absolute bottom-2 right-2">
            <Badge>{dateFormater(data.createdAt)}</Badge>
        </span>

        </Link >

        <Link href={`/sayi/${data.seo}`} className="articleHeading hover:underline">
            {data.title}
        </Link>
    </div>
  )
}

export default Item