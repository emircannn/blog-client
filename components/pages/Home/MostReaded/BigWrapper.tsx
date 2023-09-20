
import UserInfo from "@/components/UserInfo";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

const BigWrapper = () => {
    return ( 
        <div className="w-full h-full backgroundColor rounded-xl p-2 flex flex-col">
                    <div className="w-full aspect-video shrink-0 rounded-xl relative overflow-hidden">
                        <Link href='yazi/test' className="w-full h-full">
                            <Image alt="banner" src='/images/test2.jpg' fill quality={100} className="object-cover hover:scale-105 duration-300"/>
                        </Link>
                    <span className="absolute top-2 left-2">
                        <Badge>
                            Tarih
                        </Badge>
                    </span>
                    </div>
                    <div className="flex flex-col p-2 pb-0 gap-2 h-full justify-between">
                        <Link href='/yazi/test' className="articleHeading hover:underline duration-300">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est non ipsam impedit quibusdam laborum!
                        </Link>

                        <UserInfo/>
                    </div>
                </div>
     );
}
 
export default BigWrapper;