
import UserInfo from "@/components/UserInfo";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

const SmallWrapper = () => {
    return ( 
        <div className="backgroundColor h-1/2 rounded-xl p-2 flex justify-between gap-3 flex-1">
                    <div className="flex flex-col gap-2 justify-between md:p-2 !h-full">
                    <span>
                    <Badge>
                        Tarih
                    </Badge>
                    </span>
                    <Link href='/yazi/test' className="articleHeading max-sm:line-clamp-3 hover:underline duration-300">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate omnis ratione commodi eaque distinctio?
                    </Link>
                    <UserInfo/>
                    </div>
                    <Link href='/yazi/test' className="min-h-full w-1/3 shrink-0 rounded-xl overflow-hidden relative">
                    <Image alt="banner" src='/images/test.jpg' fill quality={100} className="object-cover hover:scale-105 duration-300"/>
                    </Link>
                </div>
     );
}
 
export default SmallWrapper;