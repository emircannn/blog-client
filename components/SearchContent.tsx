'use client'

import Image from "next/image"
import { Badge } from "./ui/badge"

const SearchContent = () => {
  return (
    <div className="p-3 rounded-xl backgroundColor gap-4 md:gap-8 flex justify-between">
        <div className="flex gap-4">
            <div className="h-full shrink-0 aspect-square rounded-xl overflow-hidden relative">
                <Image alt="" src='/images/text.jpg' fill quality={100} className="object-cover"/>
            </div>

            <div className="flex flex-col gap-2">
                <h2 className="articleHeading !line-clamp-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis corrupti earum sunt a animi consequatur perspiciatis culpa error quidem rerum cum nemo nisi blanditiis dolores, incidunt repudiandae quia? Impedit, nemo.</h2>
                <p className="text-sm font-semibold opacity-60 line-clamp-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad corporis vel, minus nostrum fuga reiciendis odio natus commodi mollitia quae veniam ducimus sint recusandae facilis illo! Illo, sapiente repellat.
                </p>
            </div>
        </div>

        <span>
        <Badge>
            Tarih
        </Badge>
        </span>
    </div>
  )
}

export default SearchContent