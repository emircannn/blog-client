
import UserInfo from "@/components/UserInfo";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

const Article = () => {
    return ( 
        <div className="w-full rounded-xl">
            <Link href='/yazi/test' className="w-full aspect-[4/3] sm:aspect-[5/3] rounded-xl overflow-hidden relative flex">
            <Image alt="banner" src='/images/user.png' fill quality={100} className="object-cover hover:scale-105 duration-300"/>
                    <span className="absolute top-1 left-1 sm:top-2 sm:left-2">
                    <Badge>
                        Tarih
                    </Badge>
                    </span>
            </Link>
            <div className="p-2 pb-0 flex flex-col gap-3">
                <Link href='/yazi/test' className="articleHeading hover:underline duration-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Link>
                <UserInfo/>
            </div>
        </div>
     );
}
 
export default Article;
