/* eslint-disable react/no-unescaped-entities */

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

  interface Props {
    item: Texts;
}

const Slide: React.FC<Props> = ({item}) => {
    return ( 
        <div className="w-screen aspect-[3/1] relative overflow-hidden flex items-center justify-center p-3">
            <Image alt={item.title} title={item.title} src={item?.image} fill quality={75} className="object-cover blur-sm 2xl:hidden"/>
            <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 bg-white dark:bg-darkerColor/50"/>

            <div className="2xl:max-w-[1280px] max-w-[1024px] w-full flex aspect-[3/1] gap-3 bg-white dark:bg-darkerColor z-10 rounded-xl p-3">
                <div className="w-[45%] h-full flex flex-col justify-between gap-4 p-3 2xl:p-5 pb-0">
                    <h2 className="font-bold 2xl:text-xl line-clamp-2 shrink-0">{item?.title}</h2>
                    <p className="overflow-hidden h-fit line-clamp-6 text-[14px] text-sm 2xl:text-base"
                    dangerouslySetInnerHTML={{ __html: item.text }} />

                    <div className="shrink-0">
                        <Button size='lg'>
                            <Link href={`/yazi/${item.seo}`}>
                            Devamını Oku
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="w-[65%] h-full relative overflow-hidden rounded-xl">
                <Image alt={item.title} title={item.title} src={item?.image} fill className="object-cover"/>
                </div>
            </div>
    </div>
     );
}
 
export default Slide;