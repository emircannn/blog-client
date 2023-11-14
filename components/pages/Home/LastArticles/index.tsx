
import Article from "./Article";

interface Props{
    data: Texts[] | undefined
}

const LastArticles: React.FC<Props> = ({
    data
}) => {
    return ( 
        <main className="flex flex-col gap-4 container">
            <h5 className="heading">Son Yazılar</h5>

            <article className="grid grid-cols-1 400:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-md:hidden">
                {data && data?.length > 0 ?
                data.slice(0, 3).map((_,i) => (
                    <Article
                    data={_}
                    key={i}
                    />
                ))
                : null
                }
            </article>
            <article className="grid grid-cols-1 400:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 md:hidden">
                {data && data?.length > 0 ?
                data?.map((_,i) => (
                    <Article
                    data={_}
                    key={i}
                    />
                ))
                : null
                }
            </article>
        </main>
     );
}

export default LastArticles;