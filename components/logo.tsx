import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return ( 
        <>
        <div className="relative overflow-hidden w-[120px] sm:w-[200px] h-[60px] sm:h-[75px] dark:hidden items-center">
        <Link href='/'>
            <Image alt="" src='/images/logolight.png' fill quality={100} className="object-contain"/>
        </Link>
        {/* <span className="text-2xl font-semibold">Logo</span> */}
        </div>
        <div className="relative overflow-hidden w-[120px] sm:w-[200px] h-[60px] sm:h-[75px] hidden dark:flex items-center">
        <Link href='/'>
            <Image alt="" src='/images/logodark.png' fill quality={100} className="object-contain"/>
        </Link>
        {/* <span className="text-2xl font-semibold">Logo</span> */}
        </div>
        </>
     );
}
 
export default Logo;