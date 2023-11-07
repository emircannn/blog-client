'use client'
import { dateFormater, formatReadCount } from '@/components/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
    item: Texts
}

const Slide: React.FC<Props> = ({
    item
}) => {
  return (
    <div className="w-full aspect-video lg:aspect-[3/1] overflow-hidden rounded-xl relative group">
        <div  className="w-full h-full">
        <Image alt="" src={item.image} fill quality={100} className="object-cover"/>
        </div>

        <div className="absolute bottom-0 left-0 z-40 w-full flex flex-col translate-y-[50%] group-hover:translate-y-0 duration-300 bg-gradient-to-t from-darkerColor">
        <Link href={`/yazi/${item?.seo}`} className="w-full z-40 text-sm md:text-base font-semibold p-3 text-white line-clamp-2">
            {item.title}
        </Link>
        <p className="flex items-center justify-between text-xs text-white w-full z-40 p-3 gap-3">
            <Link href={`/yazar/${item?.user?.username}`}>{item?.user?.name}</Link>
            <span>{dateFormater(item?.createdAt)} - {formatReadCount(item?.readCount)} okunma</span>
        </p>
        </div>
    </div>
  )
}

export default Slide