'use client'

import Image from "next/image"


const Subject = () => {
  return (
    <div className="flex gap-4 w-full p-2 backgroundColor rounded-xl">
        <div className="aspect-[1/1.3] shrink-0 h-[100px] relative overflow-hidden rounded-xl">
        <Image alt="banner" src='/images/kapak.png' fill quality={100} className="object-cover hover:scale-105 duration-300"/>
        </div>

        <div className="flex flex-col justify-between gap-2">
            <h1 className="articleHeading">Kafkasya Sayısı</h1>

            <p className="line-clamp-3 text-xs font-medium opacity-60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sapiente sunt vero optio eum iste, non modi, reiciendis velit id at obcaecati, voluptatum laborum? Sit dignissimos illo magni exercitationem vitae?
            </p>

            <div className="flex justify-between items-center text-xs opacity-60">
                <span>Yazı Sayısı: 12</span>
                <span>11/09/2023</span>
            </div>
        </div>
    </div>
  )
}

export default Subject