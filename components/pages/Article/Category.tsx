import Image from "next/image"
import Link from "next/link"

const Category = () => {

  return (
    <Link href='/kategori/test' className="flex items-center gap-2 p-2 rounded-xl backgroundColor">
        <div className="w-12 aspect-square rounded-full overflow-hidden relative border-2 border-thirth">
            <Image alt="" src='/images/category.webp' fill quality={100} className="object-cover hover:scale-105 duration-300"/>
        </div>
        <div className="flex flex-col justify-between gap-1 h-full">
            <h6 className="articleHeading">Tarih</h6>
            <p className="text-xs font-medium opacity-60">
                Yazı Adeti: 12
            </p>
        </div>
    </Link>
  )
}

export default Category