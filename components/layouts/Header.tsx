'use client'
import { useSettings } from "@/lib/context";
import Logo from "../logo";
import { ModeToggle } from "../themeToggle";
import Navbar from "./Navbar";
import ResponsiveNavbar from "./ResponsiveNavbar";


const Header =() => {

    const { settings, magazines, category  } = useSettings();

    const categories = [{name: 'Aktüel', seo: `/aktuel`}, {name: 'Tüm Yazılar', seo: `/yazilar`}]
    const newData = category?.map((item: CategoryType) => ({
        ...item,
        seo: `/kategori/${item.seo}`
    }));
    const mergedCategories = newData?.concat(categories)

    const navbar = [
        {name: 'Ana Sayfa', seo: '/',},
        {name: 'Sayılar', seo: '/sayilar', dropdown: magazines?.map((data: Magazine) => (
            {name: data.title, seo: `/sayi/${data.seo}`}
        ))},
        {name: 'Kategoriler', seo: '/', dropdown: mergedCategories},
        {name: 'Hakkımızda', seo: '/hakkimizda',},
    ]

    return ( 
    <header className=" bg-white dark:bg-darkerColor sticky top-0 border-b dark:border-darkColor border-lightColor z-50">
        <div className="flex items-center justify-between gap-3 container min-h-full">
            <div className="w-1/2 md:w-[20%] flex">
            <Logo/>
            </div>

            <div className="w-[60%] flex items-center justify-center">
            <Navbar 
            items={navbar}
            />
            </div>

            <div className="flex items-center gap-3 w-1/2 md:w-[20%] justify-end">
                {/* <SearchModal/> */}
                <div className="max-md:hidden">
                <ModeToggle/>
                </div>
                <ResponsiveNavbar
                items={navbar}
                settings={settings}
                />
            </div>
        </div>
    </header>
    );
}
export default Header;