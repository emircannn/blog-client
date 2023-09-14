import Image from "next/image"
import Link from "next/link"

const WriterSubjects = () => {
  return (
    <div className="w-full rounded-xl p-3 backgroundColor flex gap-3">
        <Link href='/sayi/test' className="relative aspect-[1/1.35] h-[120px] shrink-0 rounded-xl overflow-hidden flex">
            <Image alt="banner" src='/images/kapak.png' fill quality={100} className="object-cover hover:scale-105 duration-300"/>
        </Link>

        <div className="flex justify-between flex-col gap-2 w-full">
            <div className="flex items-center justify-between w-full">
            <Link href='/sayi/test' className="font-semibold text-[17px]">Kafkasya Sayisi</Link>
            <span className="text-sm font-medium opacity-60">10/11/2023</span>
            </div>

            <Link href='/' className="articleHeading hover:underline">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, obcaecati.
            </Link>

            <span className="text-sm font-medium opacity-60">Sayfa: 1-12</span>
        </div>
    </div>
  )
}

export default WriterSubjects