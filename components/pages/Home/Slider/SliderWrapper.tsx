'use client'
import Slider from "react-slick";
import Slide from "./Slide";
import { settings } from "./sliderSettings";

  interface Props {
    data: Texts[] | any;
  }

const SliderWrapper: React.FC<Props> = ({data}) => {
    return ( 
        <div className="w-screen xl:aspect-[3/1] relative max-xl:hidden">
                {data &&
                <Slider {...settings}>
                    {data?.map((item: Texts, i: any ) => (
                        <Slide
                        key={i}
                        item={item}
                        />
                    ))}
                </Slider>}
        </div>
    );
}

export default SliderWrapper;