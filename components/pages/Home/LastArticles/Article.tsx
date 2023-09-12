'use client'

import UserInfo from "@/components/UserInfo";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const Article = () => {
    return ( 
        <div className="w-full p-2 rounded-xl backgroundColor">
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden relative">
            <Image alt="banner" src='/images/user.png' fill quality={100} className="object-cover hover:scale-105 duration-300"/>
            </div>
            <div className="p-2 pb-0 flex flex-col gap-3">
                    <span>
                    <Badge>
                        Tarih
                    </Badge>
                    </span>
                <h4 className="articleHeading !line-clamp-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem error ut provident est saepe sed?
                </h4>
                <p className="line-clamp-3 text-xs sm:text-sm opacity-60">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero ullam placeat perspiciatis a, labore, iure inventore aspernatur repellendus dicta maxime facere rerum voluptatibus veritatis? Velit reiciendis dolor quia earum corrupti.
                </p>
                <UserInfo/>
            </div>
        </div>
     );
}
 
export default Article;
