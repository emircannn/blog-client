'use client'

import Article from "./Article";

const LastArticles = () => {
    return ( 
        <div className="flex flex-col gap-4 container">
            <h2 className="heading">Son Yazılar</h2>

            <div className="grid grid-cols-1 400:grid-cols-2 md:grid-cols-3 gap-4">
                <Article/>
                <Article/>
                <Article/>
            </div>
        </div>
     );
}
 
export default LastArticles;