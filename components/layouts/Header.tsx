
import Logo from "../logo";
import { ModeToggle } from "../themeToggle";
import Navbar from "./Navbar";
import ResponsiveNavbar from "./ResponsiveNavbar";

export const getSettings = async() => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}settings/settings`, {
            cache: 'no-cache'
        }).then((res) => res.json()).then((data) => {
            return data.data
        })
        return res
    } catch (error) {
        console.log(error)
    }
}
export const getMagazineHeader = async() => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}home/getMagazineHeader`, {
            cache: 'no-cache'
        }).then((res) => res.json()).then((data) => {
            return data.data
        })
        return res
    } catch (error) {
        console.log(error)
    }
}
export const getCategoryHeader = async() => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}home/getCategoryHeader`, {
            cache: 'no-cache'
        }).then((res) => res.json()).then((data) => {
            return data.data
        })
        return res
    } catch (error) {
        console.log(error)
    }
}

const Header = async() => {

    const data = getMagazineHeader();
    const data2 = getCategoryHeader();

    const [magazines, category] = await Promise.all([data, data2])

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
                />
            </div>
        </div>
    </header>
    );
}
export default Header;