'use client'

import Avatar from "../Avatar";
import Logo from "../logo";
import SearchModal from "../modals/SearchModal";
import { ModeToggle } from "../themeToggle";
import ClientOnly from "./ClientOnly";
import Navbar from "./Navbar";
import ResponsiveNavbar from "./ResponsiveNavbar";

const Header = () => {

    const navbar = [
        {label: 'Ana Sayfa', href: '/',},
        {label: 'Sayılar', href: '/sayilar', dropdown: [
            {label: 'Kırım Sayısı', href: '/sayi/kirim'},
            {label: 'Türkistan Sayısı', href: '/sayi/turkistan'},
        ]},
        {label: 'Kategoriler', href: '/', dropdown: [
            {label: 'Tarih', href: '/kategori/tarih'},
            {label: 'Siyaset', href: '/kategori/siyaset'},
            {label: 'Felsefe', href: '/kategori/felsefe'},
            {label: 'Aktüel', href: '/aktuel'},
        ]},
        {label: 'Hakkımızda', href: '/',},
    ]

    return ( 
    <header className=" bg-white dark:bg-darkerColor sticky top-0 border-b dark:border-darkColor border-lightColor z-50">
        <div className="flex items-center justify-between gap-3 container min-h-full">
            <Logo/>

            <Navbar 
            items={navbar}
            />

            <div className="flex items-center gap-3">
                <SearchModal/>
                <div className="max-md:hidden">
                <ModeToggle/>
                </div>
                <Avatar/>
                <ResponsiveNavbar/>
            </div>
        </div>
    </header>
    );
}
export default Header;