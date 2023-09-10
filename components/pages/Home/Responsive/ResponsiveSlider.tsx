'use client'

import Image from "next/image";
import Slider from "react-slick";

interface DataItem {
    title?: string;
    text?: string;
    image: string;
  }
  
  interface Props {
    data: DataItem[];
  }

const ResponsiveSlider: React.FC<Props> = ({data}) => {

    const settings = {
        dots: false,
        infinite: true,
        fade: false,
        arrows:false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    return ( 
    <div className="xl:hidden p-3">
        <Slider {...settings}>
            {data?.map((item, i) => (
                <div key={i} className="w-full aspect-video lg:aspect-[3/1] overflow-hidden rounded-xl relative group">
                <Image alt="" src={item.image} fill quality={100} className="object-cover"/>
    
                <div className="absolute bottom-0 left-0 z-40 w-full flex flex-col translate-y-[50%] group-hover:translate-y-0 duration-300 bg-gradient-to-t from-darkerColor">
                <h1 className="w-full z-40 font-semibold p-3 text-white">
                    {item.title}
                </h1>
                <h2 className="flex items-center justify-between text-xs text-white w-full z-40 p-3 gap-3">
                    <span>Yusuf Islam</span>
                    <span>10/09/2023 - 1.8b okunma</span>
                </h2>
                </div>
            </div>
            ))}
        </Slider>
    </div> 
    );
}
 
export default ResponsiveSlider;