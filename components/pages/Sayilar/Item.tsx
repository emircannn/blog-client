import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

const Item = () => {
  return (
    <div className="w-full flex flex-col p-3 backgroundColor rounded-xl gap-3">
        <Link href='/sayi/test' className="aspect-[1/1.35] shrink-0 w-full relative overflow-hidden rounded-xl flex">
        <Image alt="banner" src='/images/kapak.webp' fill quality={100} className="object-cover hover:scale-105 duration-300"/>

        <span className="absolute bottom-2 right-2">
            <Badge>11/10/2023</Badge>
        </span>

        </Link >

        <Link href='/sayi/test' className="articleHeading hover:underline">
            Örnek Sayı
        </Link>
    </div>
  )
}

export default Item