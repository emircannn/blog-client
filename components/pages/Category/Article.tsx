import UserInfo from "@/components/UserInfo"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

const Article = () => {
  return (
    <div className="w-full p-2 rounded-xl backgroundColor">
            <Link href='/yazi/test' className="w-full aspect-[4/3] rounded-xl overflow-hidden relative flex">
            <Image alt="banner" src='/images/user.png' fill quality={100} className="object-cover hover:scale-105 duration-300"/>
            </Link>
            <div className="p-2 pb-0 flex flex-col gap-3">
                <Link href='/yazi/test' className="articleHeading !line-clamp-1 hover:underline duration-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem error ut provident est saepe sed?
                </Link>
                <p className="line-clamp-3 text-xs sm:text-sm opacity-60">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero ullam placeat perspiciatis a, labore, iure inventore aspernatur repellendus dicta maxime facere rerum voluptatibus veritatis? Velit reiciendis dolor quia earum corrupti.
                </p>
                <UserInfo
                readCount={false}/>
            </div>
        </div>
  )
}

export default Article