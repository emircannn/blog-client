
import Image from "next/image"
import Link from "next/link"

interface Props {
    data: User
}

const Writer: React.FC<Props> = ({
    data
}) => {

    return (
    <Link href={`/yazar/${data.username}`} className="px-2 w-full flex ">
        <div className="w-full aspect-[1/1.3] rounded-xl bg-white dark:bg-darkerColor flex flex-col overflow-hidden border border-secondary">
            <div className="w-full h-[40%] md:h-1/2 relative">
                <Image alt="banner" src={data.coverImage ? data.coverImage : '/images/logo.png'} fill quality={100} className="object-cover"/>

                <div className="w-full absolute -bottom-5 md:-bottom-10 left-0 flex items-center justify-center">
                    <div className="w-1/4 md:w-20 aspect-square rounded-full overflow-hidden relative border-2 border-thirth">
                        <Image alt={data.name} title={data.name} src={data.image ? data.image : '/images/logo.png'} fill quality={100} className="object-cover"/>
                    </div>
                </div>
            </div>

            <div className="w-full h-[60%] md:h-1/2 pt-8 md:pt-14 px-4 pb-4 flex flex-col gap-2 text-center">
                <p className="line-clamp-1 font-semibold text-sm sm:text-base hover:underline duration-300">{data.name}</p>
                <p className="line-clamp-1 font-semibold text-xs sm:text-sm opacity-60">@{data.username}</p>
            </div>
        </div>
    </Link>
  )
}

export default Writer