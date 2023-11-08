
import UserInfo from "@/components/UserInfo";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

interface Props {
    data: Texts
}
const SmallWrapper: React.FC<Props> = ({
    data
}) => {
    return ( 
        <div className="backgroundColor h-1/2 rounded-xl p-2 flex justify-between gap-3 flex-1">
                    <div className="flex flex-col gap-2 justify-between md:p-2 !h-full">
                    <span>
                    <Badge>
                        {data.category.name}
                    </Badge>
                    </span>
                    <Link href={`/yazi/${data.seo}`} className="articleHeading max-sm:line-clamp-3 hover:underline duration-300">
                        {data.title}
                    </Link>
                    <UserInfo data={data.user} date={data.createdAt} readCount={data.readCount}/>
                    </div>
                    <Link href={`/yazi/${data.seo}`} className="min-h-full w-1/3 shrink-0 rounded-xl overflow-hidden relative">
                    <Image alt={data.title} title={data.title} src={data.image} fill quality={100} className="object-cover hover:scale-105 duration-300"/>
                    </Link>
                </div>
     );
}
 
export default SmallWrapper;