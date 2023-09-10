'use client'

import Avatar from "../Avatar";
import Logo from "../logo";
import { ModeToggle } from "../themeToggle";
import Navbar from "./Navbar";

const Header = () => {
    return ( 
    <header className="p-[10px] bg-white dark:bg-darkerColor sticky top-0 border-b dark:border-darkColor border-lightColor">
        <div className="flex items-center justify-between gap-3 container">
            <Logo/>

                <Navbar/>

            <div className="flex items-center gap-3">
                <ModeToggle/>
                <Avatar/>
            </div>
        </div>
    </header> 
    );
}
export default Header;