import { Facebook, Instagram, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const WriterProfile = () => {
  return (
    <div className="w-full rounded-xl p-3 backgroundColor flex flex-col gap-3">
        <div className="w-full max-md:aspect-[22/8] max-lg:aspect-[24/8] lg:aspect-video relative">
            <Image alt="banner" src='/images/wallpaper.jpg' fill quality={100} className="object-cover rounded-xl"/>

            <div className="w-full absolute -bottom-10 left-0 flex items-center justify-center">
                    <div className="w-24 aspect-square rounded-full overflow-hidden relative border-2 border-thirth">
                        <Image alt="banner" src='/images/user.png' fill quality={100} className="object-cover"/>
                    </div>
                </div>
        </div>

        <div className="mt-11 flex flex-col text-center gap-3">
            <div className="flex flex-col gap-1">
            <h1 className="heading">Yusuf İslam Gül</h1>
            <h2 className="text-xs sm:text-sm font-semibold opacity-60">@yusufislam</h2>
            </div>

            <div className="flex flex-col gap-1">
            <span className="articleHeading">Hakkında</span>
            <p className="text-xs font-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est impedit corporis ullam quia maiores asperiores, aperiam mollitia voluptate minus, eligendi quam iure placeat magni laudantium debitis, ut labore. Vitae id laudantium sequi laboriosam eveniet voluptatem.
            </p>
            </div>

            <div className="flex flex-col gap-2">
            <span className="articleHeading">Sosyal Medya Hesapları</span>
                <div className="flex items-center justify-center gap-2">
                    <Link href='/' className="hover:opacity-60 duration-300">
                    <Twitter/>
                    </Link>
                    <Link href='/' className="hover:opacity-60 duration-300">
                        <Instagram/>
                    </Link>
                    <Link href='/' className="hover:opacity-60 duration-300">
                        <Facebook/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WriterProfile