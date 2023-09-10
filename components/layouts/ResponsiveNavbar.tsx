'use client'

import { Facebook, Instagram, Menu, Twitter, X } from "lucide-react";
import { Button } from "../ui/button"
import { useState } from "react";
import Logo from "../logo";
import { ModeToggle } from "../themeToggle";
import ListItem from "./ResNavLi";

const ResponsiveNavbar = () => {
    const [open, setOpen] = useState(false)

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
    <>
    <div className="md:hidden">
    <Button 
    onClick={() => setOpen(true)}
    variant='outline' 
    size='icon'>
        <Menu/>
    </Button>
    </div>

    <div className={`fixed z-50 top-0 ${open ? 'right-0' : 'right-[-100%]'} w-full h-full dark:bg-darkerColor bg-white duration-300 flex flex-col p-[15px] gap-4 overflow-y-auto`}>
        <div className="flex items-center justify-between w-full">
            <Logo/>

            <Button 
            onClick={() => setOpen(false)}
            variant='outline' 
            size='icon'>
                <X/>
            </Button>
            
        </div>  

        <p className="text-[13px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, corporis ea voluptatibus molestias inventore nesciunt.</p>

        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <Twitter/>
                <Facebook/>
                <Instagram/>
            </div>

            <ModeToggle/>
        </div>

        <hr />

        <ul className="flex flex-col w-full">
            {navbar?.map((item, i) => (
                <ListItem
                label={item.label}
                href={item.href}
                dropdown={item.dropdown}
                key={i}
                />
            ))}
        </ul>
    </div> 
    </>
    );
}
 
export default ResponsiveNavbar;