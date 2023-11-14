
import SmallWrapper from "./SmallWrapper";
import BigWrapper from "./BigWrapper";

interface Props {
    data: Texts[] | undefined
}
const MostReaded: React.FC<Props> = ({
    data
}) => {
    return ( 
        <main className="container py-[10px] flex flex-col gap-4 h-fit">
            <h3 className="heading">En Çok Okunan Yazılar</h3>

            <article className="w-full flex gap-3 max-lg:flex-col h-full">
                <div className="flex w-full min-h-full flex-1">
                <BigWrapper data={data && data[0]}/>
                </div>

                <div className="w-full flex flex-col gap-3 min-h-full flex-1">
                <SmallWrapper data={data && data[1]}/>
                <SmallWrapper data={data && data[2]}/>
                </div>
            </article>
        </main>
    );
}

export default MostReaded;