'use client'

import Article from "./Article";

const LastArticles = () => {
    return ( 
        <div className="flex flex-col gap-3 container">
            <h2 className="heading">Son Yazılar</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <Article/>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
            </div>
        </div>
     );
}
 
export default LastArticles;