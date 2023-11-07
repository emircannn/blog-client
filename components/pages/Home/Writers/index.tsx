'use client'

import Slider from "react-slick";
import Writer from "./Writer";
import {writterSettings} from './settings'

interface Props {
    data: User[]
}

const Writers: React.FC<Props> = ({
    data
}) => {
    return ( 
        <section className="container">
            <div className="p-5 sm:p-7 lg:p-9 rounded-2xl backgroundColor flex flex-col gap-5">
                <h6 className="heading lg:!text-2xl uppercase !font-bold text-center">
                    Yazar Kadromuz
                </h6>
                
                {data?.length > 5 ?
                <div className="w-full relative overflow-visible px-2 md:px-4">
                <Slider {...writterSettings}>
                    {data.map((_,i) => (
                            <Writer key={i} data={_}/>
                    ))}
                </Slider>
                </div>
                    :
                <div className="w-full relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-2 md:px-4">
                    {data?.map((_,i) => (
                            <Writer key={i} data={_}/>
                    ))}
                </div>}
            </div>
            
        </section>
     );
}
 
export default Writers;