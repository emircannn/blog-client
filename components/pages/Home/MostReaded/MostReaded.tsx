
import SmallWrapper from "./SmallWrapper";
import BigWrapper from "./BigWrapper";

const MostReaded = () => {
    return ( 
        <main className="container py-[10px] flex flex-col gap-4 h-fit">
            <h3 className="heading">En Çok Okunan Yazılar</h3>

            <article className="w-full flex gap-3 max-lg:flex-col h-full">
                <div className="flex w-full min-h-full flex-1">
                <BigWrapper/>
                </div>

                <div className="w-full flex flex-col gap-3 min-h-full flex-1">
                <SmallWrapper/>
                <SmallWrapper/>
                </div>
            </article>
        </main>
    );
}

export default MostReaded;