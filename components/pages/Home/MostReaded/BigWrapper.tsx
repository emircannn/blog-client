
import UserInfo from "@/components/UserInfo";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

interface Props {
    data: Texts
}
const BigWrapper: React.FC<Props> = ({
    data
}) => {
    return ( 
        <div className="w-full h-full backgroundColor rounded-xl p-2 flex flex-col">
                    <div className="w-full aspect-video shrink-0 rounded-xl relative overflow-hidden">
                        <Link href={`yazi/${data.seo}`} className="w-full h-full">
                            <Image alt={data.title} title={data.title} src={data.image} fill quality={100} className="object-cover hover:scale-105 duration-300"/>
                        </Link>
                    <span className="absolute top-2 left-2">
                        <Badge>
                            {data.category.name}
                        </Badge>
                    </span>
                    </div>
                    <div className="flex flex-col p-2 pb-0 gap-2 h-full justify-between">
                        <Link href={`yazi/${data.seo}`} className="articleHeading hover:underline duration-300">
                            {data.title}
                        </Link>

                        <UserInfo
                        date={data.createdAt}
                        readCount={data.readCount}
                        data={data.user}/>
                    </div>
                </div>
     );
}
 
export default BigWrapper;