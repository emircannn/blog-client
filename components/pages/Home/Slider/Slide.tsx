/* eslint-disable react/no-unescaped-entities */
'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";

interface DataItem {
    title?: string;
    text?: string;
    image: string;
  }
  
  interface Props {
    item: DataItem;
  }

const Slide: React.FC<Props> = ({item}) => {
    return ( 
        <div className="w-screen aspect-[3/1] relative overflow-hidden flex items-center justify-center p-3">
            <Image alt="banner" src={item?.image} fill quality={100} className="object-cover blur-sm"/>
            <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 bg-white dark:bg-darkerColor/50"/>

            <div className="max-w-[1280px] w-full flex md:aspect-[3/1] gap-3 bg-white dark:bg-darkerColor z-10 rounded-xl p-5">
                <div className="w-[45%] h-full flex flex-col gap-4 p-3 2xl:p-5 pb-0 2xl:pb-0">
                    <h1 className="font-bold 2xl:text-xl line-clamp-2 shrink-0">{item?.title}</h1>
                    <p className="overflow-hidden h-full text-[14px] 2xl:text-base">
                        {item?.text}
                    </p>

                    <div className="shrink-0">
                        <Button size='lg'>
                            Devamını Oku
                        </Button>
                    </div>
                </div>

                <div className="w-[65%] h-full relative overflow-hidden rounded-xl">
                <Image alt="banner" src={item?.image} fill quality={100} className="object-cover"/>
                </div>
            </div>
    </div>
     );
}
 
export default Slide;