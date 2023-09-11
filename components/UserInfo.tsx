'use client'

import Image from "next/image";

const UserInfo = () => {
    return ( 
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="w-7 aspect-square rounded-full relative overflow-hidden">
                <Image alt="banner" src='/images/user.png' fill quality={100} className="object-cover"/>
                </div>
                <span className="text-xs font-semibold line-clamp-1">Yusuf İslam</span>
                <span className="opacity-50 text-xs">10/09/2023</span>
            </div>

            <div className="text-xs opacity-50 max-lg:hidden">
            1.8b okunma
            </div>
        </div>
     );
}
 
export default UserInfo
;  