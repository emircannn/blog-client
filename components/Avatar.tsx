'use client'

import { User2 } from "lucide-react";

const Avatar = () => {
    return ( 
    <div className="border dark:border-neutral-800 border-lightColor bg-white dark:bg-darkColor hover:dark:bg-darkColor/80 
    hover:bg-lightColor h-10 w-10 rounded-md flex items-center justify-center relative overflow-hidden cursor-pointer duration-300">
        <User2/>
    </div> 
    );
}
 
export default Avatar;