'use client'

import { Bookmark, Heart, MessageCircleIcon } from "lucide-react";
import Image from "next/image";

const SmallWrapper = () => {
    return ( 
        <div className="col-span-6 md:col-span-3 row-span-1 shrink-0 bg-lightColor dark:bg-darkColor rounded-xl p-2 flex justify-between gap-3">
                    <div className="flex flex-col justify-between">
                    <span className="px-3 py-1 w-fit text-[12px] md:text-[14px] font-semibold bg-thirth rounded-full text-white dark:text-darkerColor">
                        Tarih
                    </span>
                    <h4 className="font-semibold line-clamp-2 max-md:text-sm max-md:leading-4">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate omnis ratione commodi eaque distinctio?
                    </h4>
                    <div className="flex items-center gap-2">
                        <div className="w-7 aspect-square rounded-full relative overflow-hidden">
                        <Image alt="banner" src='/images/user.png' fill quality={100} className="object-cover"/>
                        </div>
                        <span className="text-xs font-semibold">Yusuf İslam</span>
                        <span className="opacity-50 text-xs">10/09/2023</span>
                    </div>
                    <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                            <button className="flex items-center bg-thirth hover:bg-thirth/80 duration-300 px-3 py-1 rounded-xl gap-2 text-white dark:text-darkerColor font-semibold text-[13px]">
                                <Heart size={13}/>
                                33
                            </button>
                            <button className="flex items-center bg-thirth hover:bg-thirth/80 duration-300 px-3 py-1 rounded-xl gap-2 text-white dark:text-darkerColor font-semibold text-[13px]">
                                <MessageCircleIcon size={13}/>
                                12
                            </button>
                            </div>
                            <button className="flex items-center bg-thirth hover:bg-thirth/80 duration-300 px-3 py-1 rounded-xl gap-2 text-white dark:text-darkerColor font-semibold text-[13px]">
                                <Bookmark size={13}/>
                                18
                            </button>
                        </div>
                    </div>
                    <div className="h-full shrink-0 rounded-xl aspect-square overflow-hidden relative">
                    <Image alt="banner" src='/images/test.jpg' fill quality={100} className="object-cover"/>
                    </div>
                </div>
     );
}
 
export default SmallWrapper;