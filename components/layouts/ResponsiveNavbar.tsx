'use client'

import { Facebook, Instagram, Menu, Twitter, X } from "lucide-react";
import { Button } from "../ui/button"
import { useState } from "react";
import Logo from "../logo";
import { ModeToggle } from "../themeToggle";
import ListItem from "./ResNavLi";
import { seoDesc } from "../utils";
import Link from "next/link";

interface NavItem {
    name: string;
    seo: string;
    dropdown?: NavItem[] | any
}

interface Props {
    settings?: Settings
    items: NavItem[]
}

const ResponsiveNavbar: React.FC<Props> = ({ items, settings }) => {
    const [open, setOpen] = useState(false)

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

        <p className="text-[13px]">{seoDesc(settings?.about_us) || ''}</p>

        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                {settings?.twitterLink && 
                <Link href={settings.twitterLink}>
                <Twitter/>
                </Link>}
                {settings?.instagramLink && 
                <Link href={settings.instagramLink}>
                <Facebook/>
                </Link>}
            </div>

            <ModeToggle/>
        </div>

        <hr />

        <ul className="flex flex-col w-full">
            {items?.map((item, i) => (
                <ListItem
                name={item.name}
                seo={item.seo}
                dropdown={item?.dropdown}
                key={i}
                setOpen={setOpen}
                />
            ))}
        </ul>
    </div> 
    </>
    );
}
 
export default ResponsiveNavbar;