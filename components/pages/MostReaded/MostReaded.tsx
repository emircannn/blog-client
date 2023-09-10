'use client'

import SmallWrapper from "./SmallWrapper";
import BigWrapper from "./BigWrapper";

const MostReaded = () => {
    return ( 
        <section className="container py-[10px] flex flex-col gap-3">
            <h2 className="xl:text-xl font-semibold">En Çok Okunan Yazılar</h2>

            <div className="grid grid-cols-6 gap-3 grid-rows-4 md:grid-rows-2 w-full aspect-[3/1]">
                <BigWrapper/>
                <SmallWrapper/>
                <SmallWrapper/>
            </div>
        </section>
    );
}

export default MostReaded;