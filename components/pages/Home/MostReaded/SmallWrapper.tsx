
import UserInfo from "@/components/UserInfo";
import { Badge } from "@/components/ui/badge";
import { Bookmark, Heart, MessageCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SmallWrapper = () => {
    return ( 
        <div className="col-span-6 md:col-span-3 row-span-1 shrink-0 backgroundColor rounded-xl p-2 flex justify-between gap-3">
                    <div className="flex flex-col justify-between md:p-2">
                    <span>
                    <Badge>
                        Tarih
                    </Badge>
                    </span>
                    <Link href='/yazi/test' className="articleHeading hover:underline duration-300">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate omnis ratione commodi eaque distinctio?
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
                    <Link href='/yazi/test' className="h-full shrink-0 rounded-xl aspect-square overflow-hidden relative ">
                    <Image alt="banner" src='/images/test.jpg' fill quality={100} className="object-cover hover:scale-105 duration-300"/>
                    </Link>
                </div>
     );
}
 
export default SmallWrapper;