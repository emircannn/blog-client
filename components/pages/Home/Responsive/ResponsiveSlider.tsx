'use client'
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import {dateFormater, formatReadCount} from '@/components/utils'
import Slide from "./Slide";
  interface Props {
    data: Texts[] | any;
  }

const ResponsiveSlider: React.FC<Props> = ({data}) => {

    const settings = {
        dots: false,
        infinite: true,
        fade: true,
        arrows:false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return ( 
    <div className="xl:hidden p-3">
        {data && <Slider {...settings}>
            {data?.map((item: Texts, i: any) => (
                <Slide key={i} item={item}/>
            ))}
        </Slider>}
    </div> 
    );
}
 
export default ResponsiveSlider;