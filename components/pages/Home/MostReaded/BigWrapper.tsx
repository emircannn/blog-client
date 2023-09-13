
import UserInfo from "@/components/UserInfo";
import { Badge } from "@/components/ui/badge";
import { Bookmark, Heart, MessageCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BigWrapper = () => {
    return ( 
        <div className="col-span-6 md:col-span-3 row-span-2 backgroundColor rounded-xl p-2">
                    <div className="w-full aspect-video rounded-xl relative overflow-hidden">
                        <Link href='yazi/test' className="w-full h-full">
                            <Image alt="banner" src='/images/test.jpg' fill quality={100} className="object-cover hover:scale-105 duration-300"/>
                        </Link>
                    <span className="absolute top-2 left-2">
                        <Badge>
                            Tarih
                        </Badge>
                    </span>
                    </div>
                    <div className="flex flex-col p-2 pb-0 gap-2">
                        <Link href='/yazi/test' className="articleHeading !line-clamp-1 hover:underline duration-300">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est non ipsam impedit quibusdam laborum!
                        </Link>

                        <UserInfo/>

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