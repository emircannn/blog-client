import UserInfo from "@/components/UserInfo"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

interface Props {
    showUserInfo?: boolean
    showBadge?: boolean
}

const Article: React.FC<Props> = ({showUserInfo=true, showBadge}) => {
  return (
    <div className="w-full rounded-xl">
            <Link href='/yazi/test' className="w-full aspect-[5/3] rounded-xl overflow-hidden relative flex">
            <Image alt="banner" src='/images/test2.jpg' fill quality={100} className="object-cover hover:scale-105 duration-300"/>
            </Link>
            <div className="p-2 pb-0 flex flex-col gap-3">
                {showBadge &&
                <span>
                    <Badge>
                        Tarih
                    </Badge>
                </span>}
                <Link href='/yazi/test' className="articleHeading hover:underline duration-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Link>
                {showUserInfo && 
                <UserInfo/>}
            </div>
        </div>
  )
}

export default Article