
import UserInfo from "@/components/UserInfo";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

interface Props {
    data: Texts
}

const Article: React.FC<Props> = ({
    data
}) => {
    return ( 
        <div className="w-full rounded-xl">
            <Link href={`/yazi/${data?.seo}`} className="w-full aspect-[5/3] rounded-xl overflow-hidden relative flex shadow-md">
            <Image alt="banner" src={data?.image} fill quality={100} className="object-cover hover:scale-105 duration-300 "/>
                    <span className="absolute top-1 left-1 sm:top-2 sm:left-2">
                    <Badge>
                        {data?.category.name}
                    </Badge>
                    </span>
            </Link>
            <div className="p-2 pb-0 flex flex-col gap-3">
                <Link href={`/yazi/${data?.seo}`} className="articleHeading hover:underline duration-300  h-fit md:h-[48px] line-clamp-2 overflow-hidden">
                    {data?.title}
                </Link>
                <UserInfo data={data?.user} date={data?.createdAt} readCount={data?.readCount}/>
            </div>
        </div>
     );
}
 
export default Article;
