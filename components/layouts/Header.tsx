'use client'

import Avatar from "../Avatar";
import Logo from "../logo";
import { ModeToggle } from "../themeToggle";
import ClientOnly from "./ClientOnly";
import Navbar from "./Navbar";
import ResponsiveNavbar from "./ResponsiveNavbar";

const Header = () => {

    const navbar = [
        {label: 'Ana Sayfa', href: '/',},
        {label: 'Sayılar', href: '/', dropdown: [
            {label: 'Kırım Sayısı', href: '/'},
            {label: 'Türkistan Sayısı', href: '/'},
        ]},
        {label: 'Kategoriler', href: '/', dropdown: [
            {label: 'Tarih', href: '/'},
            {label: 'Siyaset', href: '/'},
            {label: 'Felsefe', href: '/'},
            {label: 'Aktüel', href: '/'},
        ]},
        {label: 'Hakkımızda', href: '/',},
    ]

    return ( 
    <ClientOnly>
    <header className=" bg-white dark:bg-darkerColor sticky top-0 border-b dark:border-darkColor border-lightColor">
        <div className="flex items-center justify-between gap-3 container min-h-full">
            <Logo/>

            <Navbar 
            items={navbar}
            />

            <div className="flex items-center gap-3">
                <div className="max-md:hidden">
                <ModeToggle/>
                </div>
                <Avatar/>
                <ResponsiveNavbar/>
            </div>
        </div>
    </header> 
    </ClientOnly>
    );
}
export default Header;