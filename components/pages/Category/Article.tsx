import UserInfo from "@/components/UserInfo"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

interface Props {
    showBadge?: boolean,
    data: Texts
}

const Article: React.FC<Props> = ({ showBadge,data}) => {
  return (
    <div className="w-full rounded-xl">
            <Link href={`/yazi/${data.seo}`} className="w-full aspect-[5/3] rounded-xl overflow-hidden relative flex">
            <Image alt="banner" src={data.image} fill quality={100} className="object-cover hover:scale-105 duration-300"/>
            </Link>
            <div className="p-2 pb-0 flex flex-col gap-3">
                {showBadge &&
                <span>
                    <Badge>
                        {data.category.name}
                    </Badge>
                </span>}
                <Link href={`/yazi/${data?.seo}`} className="articleHeading hover:underline duration-300  h-fit md:h-[48px] line-clamp-2 overflow-hidden">
                    {data?.title}
                </Link>
                <UserInfo data={data?.user} date={data?.createdAt} readCount={data?.readCount}/>
            </div>
        </div>
  )
}

export default Article