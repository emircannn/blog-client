import Image from "next/image";

const Logo = () => {
    return ( 
        <>
        <div className="relative overflow-hidden w-[100px] sm:w-[200px] h-[50px] sm:h-[75px] dark:hidden">
            <Image alt="" src='/images/logolight.png' fill quality={100} className="object-contain"/>
        </div>
        <div className="relative overflow-hidden w-[100px] sm:w-[200px] h-[50px] sm:h-[75px] hidden dark:flex">
            <Image alt="" src='/images/logodark.png' fill quality={100} className="object-contain"/>
        </div>
        </>
     );
}
 
export default Logo;