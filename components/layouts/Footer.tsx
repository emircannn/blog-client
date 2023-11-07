import { Instagram, Mail, Phone, Twitter } from "lucide-react";
import Logo from "../logo";
import ClientOnly from "./ClientOnly";
import { getCategoryHeader, getMagazineHeader, getSettings } from "./Header";
import Link from "next/link";

const Footer = async() => {
    const data = getSettings();
    const data2 = getMagazineHeader();
    const data3 = getCategoryHeader();
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    const [settings, magazines, category] = await Promise.all([data, data2, data3])

    const info = [
        {label: `@${settings?.twitter}`, icon: <Twitter/>, href: settings?.twitterLink, exist: settings?.twitterLink && settings?.twitter},
        {label: `@${settings?.instagram}`, icon: <Instagram/>, href: settings?.instagramLink, exist: settings?.instagramLink && settings?.instagram},
        {label: settings?.email, icon: <Mail/>, href: `mailto:${settings?.email}`, exist: settings?.email},
        {label: settings?.phone, icon: <Phone/>, href: `tel:${settings?.phone}`, exist: settings?.phone},
    ]
    const sayilar = magazines?.slice(0,4).map((item: Magazine) => (
        {label: item.title, href: `/sayi/${item.seo}`}
    ))
    const categories = category?.slice(0,4).map((item: CategoryType) => (
        {label: item.name, href: `/kategori/${item.seo}`}
    ))
        

  return (
    <ClientOnly>
    <footer className="w-full border-t py-4 md:py-8">
        <div className="container flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <div className="flex flex-col gap-4 max-md:items-center">
                    <Logo/>

                    <div className="flex flex-col gap-2">
                        {info?.map((item, i) => (
                            <Link key={i} href={item.href} target="_blank" 
                            className={`flex items-center gap-2 text-sm hover:opacity-60 duration-300 max-md:text-center ${!item.exist && 'hidden'}`}>
                                {item.icon}
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <Link href={'/sayilar'} className="font-semibold md:text-lg mt-4 hover:underline">Sayılar</Link>

                    <div className="flex flex-col gap-2 text-center">
                        {sayilar?.map((item: any, i: any) => (
                            <Link key={i} href={item.href} className="text-sm hover:opacity-60 duration-300">
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <p className="font-semibold md:text-lg mt-4 hover:underline">Kategoriler</p>

                    <div className="flex flex-col gap-2 text-center">
                        {categories?.map((item: any, i: any) => (
                            <Link key={i} href={item.href} className="text-sm hover:opacity-60 duration-300">
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <h4 className="font-semibold md:text-lg mt-4">Bize Dair</h4>

                    <div className="flex flex-col gap-2 text-end">
                            <Link href='/hakkimizda' className="text-sm hover:opacity-60 duration-300 text-center">
                                Hakkımızda
                            </Link>
                            {settings?.patreon &&
                            <Link href={settings.patreon} className="text-sm hover:opacity-60 duration-300 text-center">
                                Bağış Yap
                            </Link>}
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center gap-1 text-sm font-medium">
            Copyright © {currentYear > 2023 ? `2023 - ${currentYear}` : currentYear} Tüm Hakları Saklıdır. | 
            <Link href={settings?.twitterLink}
            target="_blank"
            className="duration-300 hover:text-thirth">ZİNCİRKIRAN</Link>
            </div>
        </div>
    </footer>
    </ClientOnly>
  )
}

export default Footer