'use client'

import { Button } from "@/components/ui/button";
import { Bookmark, Heart, MessageCircleIcon } from "lucide-react";
import Image from "next/image";

const BigWrapper = () => {
    return ( 
        <div className="col-span-6 md:col-span-3 row-span-2 bg-lightColor dark:bg-darkColor rounded-xl p-2">
                    <div className="w-full aspect-video rounded-xl relative overflow-hidden">
                    <Image alt="banner" src='/images/test.jpg' fill quality={100} className="object-cover"/>
                    <span className="absolute top-2 left-2 px-3 py-1 text-[12px] md:text-[14px] font-semibold bg-thirth rounded-full text-white dark:text-darkerColor">
                        Tarih
                    </span>
                    </div>
                    <div className="flex flex-col p-2 pb-0 gap-2">
                        <h3 className="line-clamp-1 font-semibold">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est non ipsam impedit quibusdam laborum!
                        </h3>

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
                </div>
     );
}
 
export default BigWrapper;