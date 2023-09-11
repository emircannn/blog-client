'use client'

import SmallWrapper from "./SmallWrapper";
import BigWrapper from "./BigWrapper";

const MostReaded = () => {
    return ( 
        <section className="container py-[10px] flex flex-col gap-4">
            <h2 className="heading">En Çok Okunan Yazılar</h2>

            <div className="grid grid-cols-6 gap-4 grid-rows-4 md:grid-rows-2 w-full aspect-[3/1]">
                <BigWrapper/>
                <SmallWrapper/>
                <SmallWrapper/>
            </div>
        </section>
    );
}

export default MostReaded;