'use client'

import Slider from "react-slick";
import Writer from "./Writer";
import {writterSettings} from './settings'
const Writers = () => {

     

    return ( 
        <div className="container">
            <div className="p-5 sm:p-7 lg:p-9 rounded-2xl backgroundColor flex flex-col gap-5">
                <h4 className="heading lg:!text-2xl uppercase !font-bold text-center">
                    Yazar Kadromuz
                </h4>
                
                <div className="w-full relative overflow-visible px-2 md:px-4">
                <Slider {...writterSettings}>
                <Writer/>
                <Writer/>
                <Writer/>
                <Writer/>
                <Writer/>
                <Writer/>
                </Slider>
                </div>
            </div>
            
        </div>
     );
}
 
export default Writers;