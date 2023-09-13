
import Image from "next/image"
import Link from "next/link"

const Category = () => {
  return (
    <Link href='/kategori/test' className="w-full rounded-xl p-3 backgroundColor aspect-square flex flex-col justify-evenly items-center">
        <div  className="400:w-20 w-16 aspect-square rounded-full overflow-hidden relative border-thirth border-2">
            <Image alt="" src='/images/category.webp' fill quality={100} className="object-cover hover:scale-105 duration-300"/>
        </div>

        <div className="flex flex-col gap-1 items-center">
        <h6 className="text-sm font-semibold sm:text-base hover:underline duration-300">Felsefe</h6>
        <p className="text-xs sm:text-sm font-medium opacity-60">21 Yazı</p>
        </div>
    </Link>
  )
}

export default Category