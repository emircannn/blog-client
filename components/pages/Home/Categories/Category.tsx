
import Image from "next/image"
import Link from "next/link"

interface Props {
  data: CategoryType;
}

const Category: React.FC<Props> = ({
  data
}) => {
  return (
    <Link href={`/kategori/${data.seo}`} className="w-full rounded-xl p-3 backgroundColor aspect-square flex flex-col justify-evenly items-center">
        <div  className="400:w-20 w-16 aspect-square rounded-full overflow-hidden relative border-thirth border-2">
            <Image alt={data.name} title={data.name} src={data.image} fill quality={100} className="object-cover hover:scale-105 duration-300"/>
        </div>

        <div className="flex flex-col gap-1 items-center">
        <h6 className="text-sm font-semibold sm:text-base hover:underline duration-300">{data.name}</h6>
        <p className="text-xs sm:text-sm font-medium opacity-60">{data.articles.length} Yazı</p>
        </div>
    </Link>
  )
}

export default Category