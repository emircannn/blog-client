'use client'
import Image from "next/image";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { dateFormater, formatReadCount } from "./utils";
import { useSettings } from "@/lib/context";

interface Props {
    className?: string;
    lg?: boolean ,
    date?: string ,
    readCount?: number,
    data: User | undefined
}

const UserInfo: React.FC<Props> = ({className = 'w-7', lg=false, date, readCount, data}) => {
    const { settings  } = useSettings();

    return ( 
        <div className="flex items-center flex-wrap gap-2">
            <HoverCard>
                <HoverCardTrigger>
                <Link href={`/yazar/${data?.username}`} className="flex items-center gap-2 cursor-pointer">
                    <div className={twMerge(className, "aspect-square rounded-full relative overflow-hidden shadow-md")}>
                        <Image alt={data?.name || ''} title={data?.name} src={data?.image ? data.image: '/images/logo.png'} fill quality={100} className="object-cover"/>
                    </div>
                    <span className={`${lg ? 'text-sm' : 'text-xs'} font-semibold line-clamp-1`}>{data?.name}</span>
                </Link>
                </HoverCardTrigger>

                <HoverCardContent className="backgroundColor border dark:border-darkerColor/60 shadow-md w-80">
                    <div className="flex space-x-4">
                        <Avatar>
                            <AvatarImage src={data?.image ? data.image: '/images/logo.png'}/>
                        </Avatar>
                        <div className="space-y-1">
                            <h4 className="text-sm font-semibold line-clamp-1">{data?.name} - @{data?.username}</h4>
                            <p className="text-xs line-clamp-2">
                                {data?.about}
                            </p>

                            <div className="flex items-center gap-2 mt-2">
                                {data?.twitterLink &&
                                <Link target="_blank" href={data?.twitterLink}>
                                    <Twitter size={20} className="duration-300 hover:opacity-60"/>
                                </Link>
                                }
                                {data?.instagramLink &&
                                <Link target="_blank" href={data?.instagramLink}>
                                    <Instagram size={20} className="duration-300 hover:opacity-60"/>
                                </Link>
                                }
                                {data?.facebookLink &&
                                <Link target="_blank" href={data?.facebookLink}>
                                    <Facebook size={20} className="duration-300 hover:opacity-60"/>
                                </Link>
                                }
                                {data?.youtubeLink &&
                                <Link target="_blank" href={data?.youtubeLink}>
                                    <Youtube size={20} className="duration-300 hover:opacity-60"/>
                                </Link>
                                }
                            </div>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
            {date && <span className={`opacity-60 ${lg ? 'text-sm' : 'text-xs'}`}>{dateFormater(date)}</span>}

            {settings?.showReadCount ?
            readCount && readCount > 0 ?
            <div className={`${lg ? 'text-sm' : 'text-xs'} opacity-60`}>
            {formatReadCount(readCount)} okunma
            </div>
            :
            <div className={`${lg ? 'text-sm' : 'text-xs'} opacity-60`}>
            0 okunma
            </div>
            : null}
        </div>
     );
}
 
export default UserInfo
;  