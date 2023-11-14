'use client'
import UserInfo from "@/components/UserInfo"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Comments from "../Article/Comments"
import Aside from "../Article/Aside"
import Share from "../Article/Share"

interface Props {
    data: Actual | undefined
    data2: Actual[] | undefined
}

const ActualPage: React.FC<Props> = ({data, data2}) => {

  return (
    <>
    <section className="container min-h-[calc(100vh_-_416px)] grid grid-cols-4 gap-4 py-5">
        <main className="col-span-4 lg:col-span-3 backgroundColor rounded-xl p-3 md:p-6 flex flex-col gap-4">
            <span className="flex items-center justify-between">
                <Badge>Aktüel</Badge>
                <a href="#comment" className="text-xs font-semibold opacity-60">
                    Yorum Yap
                </a>
            </span>
            <h1 className="heading">{data?.title}</h1>
            <UserInfo data={data?.user} date={data?.createdAt} readCount={data?.readCount} className="w-10" lg/>

            <div className="w-full aspect-[16/9] rounded-xl overflow-hidden relative">
                <Image alt={data?.title || ''} title={data?.title} src={data?.image || '/images/logo.png'} fill quality={100} className="object-cover"/>
            </div>

            <div className="sm:grid grid-cols-5 gap-4 max-sm:flex flex-col-reverse">
                <aside className="sm:col-span-1 col-span-5 relative">
                    <Share data={data}/>
                </aside>

                <p className="col-span-5 sm:col-span-4 gap-3 text-sm !leading-[22.4px] sm:!leading-[25.5px] sm:text-base" 
                dangerouslySetInnerHTML={{ __html: data?.text || '' }} />
            </div>
            {data?.note &&
            <div className="p-2 sm:p-5 rounded-xl bg-white dark:bg-darkColor w-full col-span-4 lg:col-span-3 gap-3 flex flex-col">
                <p className="font-semibold text-sm">Notlar</p>
                <p className="text-xs sm:text-sm !leading-[19.2px] sm:!leading-[22.4px]" dangerouslySetInnerHTML={{ __html: data?.note }} />
            </div>}
        </main>

        <aside className="lg:col-span-1 col-span-4 relative">
            <Aside data={data2} actual/>
        </aside>

    </section>
    
    <Comments data={data} actual/>
    </>
  )
}

export default ActualPage