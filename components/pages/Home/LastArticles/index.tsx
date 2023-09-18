
import Article from "./Article";

const LastArticles = () => {
    return ( 
        <main className="flex flex-col gap-4 container">
            <h5 className="heading">Son Yazılar</h5>

            <article className="grid grid-cols-1 400:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                <Article/>
                <Article/>
                <Article/>
            </article>
        </main>
     );
}
 
export default LastArticles;