
import { User2 } from "lucide-react";
import Image from "next/image";

interface AvatarProps {
    src?: string ;
}

const Avatar: React.FC<AvatarProps> = ({src}) => {
    return ( 
    <div className="border dark:border-neutral-800 border-lightColor bg-white dark:bg-darkColor hover:dark:bg-darkColor/80 
    hover:bg-lightColor h-10 w-10 rounded-md flex items-center justify-center relative overflow-hidden cursor-pointer duration-300">
        {src ? 
        <Image alt="avatar" src={src} fill quality={100} className="object-cover"/>
        :
        <User2/>
        }
    </div> 
    );
}
 
export default Avatar;