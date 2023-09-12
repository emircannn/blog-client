'use client'

import { Instagram, Mail, Phone, Twitter } from "lucide-react";
import Logo from "../logo";
import ClientOnly from "./ClientOnly";

const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    const info = [
        {label: '@mesniu_0', icon: <Twitter/>, href: 'https://twitter.com/mesniu_0'},
        {label: '@muverrih0', icon: <Instagram/>, href: 'https://www.instagram.com/muverrih0/'},
        {label: 'test@test.com', icon: <Mail/>, href: 'mailto:destek@example.com'},
        {label: '05525779332', icon: <Phone/>, href: 'tel:05525779332'},
    ]
    const sayilar = [
        {label: 'Kırım Sayısı', href: '/sayilar/kirim_sayisi'},
        {label: 'Türkistan Sayısı', href: '/sayilar/turkistan_sayisi'},
        {label: 'Kafkasya Sayısı', href: '/sayilar/kafkasya_sayisi'},
    ]
    const categories = [
        {label: 'Tarih', href: '/kategori/tarih'},
        {label: 'Siyaset', href: '/kategori/siyaset'},
        {label: 'Felsefe', href: '/kategori/felsefe'},
        {label: 'Aktüel', href: '/kategori/aktuel'},
    ]

  return (
    <ClientOnly>
    <footer className="w-full border-t py-4 md:py-8">
        <div className="container flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <div className="flex flex-col gap-4 max-md:items-center">
                    <Logo/>

                    <div className="flex flex-col gap-2">
                        {info?.map((item, i) => (
                            <a key={i} href={item.href} target="_blank" className="flex items-center gap-2 text-sm hover:opacity-60 duration-300 max-md:text-center">
                                {item.icon}
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <h4 className="font-semibold md:text-lg mt-4">Sayılar</h4>

                    <div className="flex flex-col gap-2 text-center">
                        {sayilar?.map((item, i) => (
                            <a key={i} href={item.href} className="text-sm hover:opacity-60 duration-300">
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <h4 className="font-semibold md:text-lg mt-4">Kategoriler</h4>

                    <div className="flex flex-col gap-2 text-center">
                        {categories?.map((item, i) => (
                            <a key={i} href={item.href} className="text-sm hover:opacity-60 duration-300">
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <h4 className="font-semibold md:text-lg mt-4">Bize Dair</h4>

                    <div className="flex flex-col gap-2 text-end">
                            <a href='/hakkimizda' className="text-sm hover:opacity-60 duration-300 text-center">
                                Hakkımızda
                            </a>
                            <a href='/hakkimizda' className="text-sm hover:opacity-60 duration-300 text-center">
                                Bağış Yap
                            </a>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center gap-1 text-sm font-medium">
            Copyright © {currentYear > 2023 ? `2023 - ${currentYear}` : currentYear} {/* Tüm Hakları Saklıdır. */} | 
            <a href="https://www.linkedin.com/in/emircan-ya%C5%9Far-97a564265/" 
            target="_blank"
            className="duration-300 hover:text-thirth">Emircan Yaşar</a>
            </div>
        </div>
    </footer>
    </ClientOnly>
  )
}

export default Footer