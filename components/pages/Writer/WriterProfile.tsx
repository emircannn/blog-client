import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Props {
    data: User
}

const WriterProfile: React.FC<Props> = ({
    data
}) => {
  return (
    <div className="w-full rounded-xl p-3 backgroundColor flex flex-col gap-3">
        <div className="w-full max-md:aspect-[22/8] max-lg:aspect-[24/8] lg:aspect-video relative">
            <Image alt="banner" src={data?.coverImage ? data.coverImage : '/images/logo.png'} fill quality={100} className="object-cover rounded-xl"/>

            <div className="w-full absolute -bottom-10 left-0 flex items-center justify-center">
                    <div className="w-24 aspect-square rounded-full overflow-hidden relative border-2 border-thirth">
                        <Image alt="banner" src={data?.image ? data.image : '/images/logo.png'} fill quality={100} className="object-cover"/>
                    </div>
                </div>
        </div>

        <div className="mt-11 flex flex-col text-center gap-3">
            <div className="flex flex-col gap-1">
            <h1 className="heading">{data.name}</h1>
            <h2 className="text-xs sm:text-sm font-semibold opacity-60">@{data.username}</h2>
            </div>

            <div className="flex flex-col gap-1">
            <span className="articleHeading">Hakkında</span>
            <p className="text-xs font-medium">
                {data.about}
            </p>
            </div>

            <div className="flex flex-col gap-2">
            <span className="articleHeading">Sosyal Medya Hesapları</span>
                <div className="flex items-center justify-center gap-2">
                    {data.twitterLink &&
                    <Link href={data.twitterLink} className="hover:opacity-60 duration-300">
                    <Twitter/>
                    </Link>}
                    {data.instagramLink &&
                    <Link href={data.instagramLink} className="hover:opacity-60 duration-300">
                    <Instagram/>
                    </Link>}
                    {data.facebookLink &&
                    <Link href={data.facebookLink} className="hover:opacity-60 duration-300">
                    <Facebook/>
                    </Link>}
                    {data.youtubeLink &&
                    <Link href={data.youtubeLink} className="hover:opacity-60 duration-300">
                    <Youtube/>
                    </Link>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default WriterProfile