import Article from "../Category/Article"
import WriterProfile from "./WriterProfile"
import WriterSubjects from "./WriterSubjects"

const WriterPage = () => {
  return (
    <section className="container min-h-[calc(100vh_-_416px)] grid grid-cols-4 gap-4 py-5">
        <aside className="lg:col-span-1 col-span-4 relative">
            <section className="sticky top-[100px] flex flex-col gap-4">
                <WriterProfile/>
            </section>
        </aside>

        <div className="col-span-4 lg:col-span-3 rounded-xl flex flex-col gap-4 !max-h-fit">
            <h3 className="heading">Yazara Ait Yazılar</h3>
            <main className="col-span-4 lg:col-span-3 rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 !max-h-fit">
                <Article
                showUserInfo={false}
                showBadge/>
                <Article
                showUserInfo={false}
                showBadge/>
                <Article
                showUserInfo={false}
                showBadge/>
            </main>
            <h3 className="heading">Yazarın katkı sağladığı Sayılar</h3>

            <div className="flex flex-col gap-3">
                <WriterSubjects/>
                <WriterSubjects/>
                <WriterSubjects/>
            </div>
        </div>
    </section>
  )
}

export default WriterPage