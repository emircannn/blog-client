
import UserInfo from "@/components/UserInfo";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

interface Props {
    data: Actual
}

const ActualItem: React.FC<Props> = ({
    data
}) => {
    return ( 
        <div className="w-full rounded-xl">
            <Link href={`/aktuel/${data?.seo}`} className="w-full aspect-[5/3] rounded-xl overflow-hidden relative flex shadow-md">
            <Image alt={data.title} title={data.title} src={data?.image} fill quality={100} className="object-cover hover:scale-105 duration-300"/>
            </Link>
            <div className="p-2 pb-0 flex flex-col gap-3">
                <Link href={`/aktuel/${data?.seo}`} className="articleHeading hover:underline duration-300 h-fit md:h-[48px] line-clamp-2 overflow-hidden">
                    {data?.title}
                </Link>
                <UserInfo data={data?.user} date={data.createdAt} readCount={data.readCount}/>
            </div>
        </div>
     );
}
 
export default ActualItem;
