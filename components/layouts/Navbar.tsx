'use client'

import Link from "next/link";

interface NavItem {
    name: string;
    seo: string;
    dropdown?: NavItem[];
  }
const Navbar: React.FC<{ items: NavItem[] }> = ({ items }) => {

    return ( 
    <nav className="h-[95px] max-md:hidden">
        <ul className="flex items-center justify-center gap-3 h-full">
            {items?.map((item, i) => (
                <li key={i} className="flex items-center justify-center min-h-full cursor-pointer relative group">
                <Link href={item?.seo}>
                <span className="hover:dark:bg-darkColor hover:bg-lightColor duration-300 rounded-full px-3 py-2 font-semibold text-[14px]">
                    {item?.name}
                </span>
                </Link>

               {item?.dropdown && 
               <div className="absolute left-0 z-[999] top-[100%] bg-white dark:bg-darkColor w-[220px] rounded-xl border border-thirth overflow-hidden group-hover:translate-x-0 duration-300 translate-x-[5000%] flex flex-col">
                {item?.dropdown?.map((subItem, i) => (
                    <Link href={subItem?.seo} key={i} className="p-3 hover:dark:bg-darkerColor hover:bg-lightColor duration-300 shrink-0 text-[13px] font-semibold">
                        {subItem?.name}
                    </Link>
                ))}
                </div>}
            </li>
            ))}
        </ul>
    </nav> 
    );
}
 
export default Navbar;