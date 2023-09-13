
import Image from "next/image"


const Subject = () => {
  return (
    <div className="flex gap-3 w-full p-2 backgroundColor rounded-xl">
        <div className="aspect-[1/1.3] shrink-0 h-[100px] relative overflow-hidden rounded-xl">
        <Image alt="banner" src='/images/kapak.png' fill quality={100} className="object-cover hover:scale-105 duration-300"/>
        </div>

        <div className="flex flex-col justify-between gap-2">
            <h6 className="articleHeading !line-clamp-1">Kafkasya Sayısı</h6>

            <p className="line-clamp-3 text-xs font-medium opacity-60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sapiente sunt vero optio eum iste, non modi, reiciendis velit id at obcaecati, voluptatum laborum? Sit dignissimos illo magni exercitationem vitae?
            </p>

            <div className="flex justify-between items-center gap-1 text-xs opacity-60">
                <span className="line-clamp-1">Yazı Adeti: 12</span>
                <span>11/09/2023</span>
            </div>
        </div>
    </div>
  )
}

export default Subject