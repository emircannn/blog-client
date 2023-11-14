import Image from "next/image"
import Link from "next/link"
import { twMerge } from "tailwind-merge"

interface Props {
  imageClass? : string,
  data: CategoryType
}

const Category: React.FC<Props> = ({imageClass='w-12', data}) => {

  return (
    <Link href={`/kategori/${data?.seo}`} className="flex items-center gap-2 p-2 rounded-xl backgroundColor">
        <div className={twMerge(imageClass, "aspect-square rounded-full overflow-hidden relative border-2 border-thirth")}>
            <Image alt={data.name} title={data.name} src={data?.image} fill quality={100} className="object-cover hover:scale-105 duration-300"/>
        </div>
        <div className="flex flex-col justify-between gap-1 h-full">
            <h6 className="articleHeading">{data?.name}</h6>
            <p className="text-xs font-medium opacity-60">
                Yazı Adeti: {data?.articleCount || data?.articles.length}
            </p>
        </div>
    </Link>
  )
}

export default Category