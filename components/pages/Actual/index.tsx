import Article from "../Home/LastArticles/Article"
import Social from "./Social"

const ActualPage = () => {
  return (
    <section className="container min-h-[calc(100vh_-_416px)] grid grid-cols-4 gap-4 py-5">
        <div className="col-span-4 lg:col-span-3 rounded-xl flex flex-col gap-4 !max-h-fit">
            <h1 className="heading">Aktüel</h1>
            <main className="col-span-4 lg:col-span-3 rounded-xl grid grid-cols-2 md:grid-cols-3 gap-3 !max-h-fit">
                <Article/>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
            </main>
        </div>

        <aside className="lg:col-span-1 col-span-4 relative">
            <section className="sticky top-[100px] flex flex-col gap-4">
                <h2 className="heading">Twitter Hesabımız</h2>
                <Social height={550}/>
            </section>
        </aside>
    </section>
  )
}

export default ActualPage