import Comments from "../Article/Comments"
import Article from "./Article"
import Cover from "./Cover"
import Share from "./Share"

const SayiPage = () => {
  return (
    <>
    <section className="container min-h-[calc(100vh_-_416px)] grid grid-cols-4 gap-4 py-5">
        <main className="col-span-4 lg:col-span-3 rounded-xl p-2 md:p-5 backgroundColor flex flex-col gap-4 !max-h-fit">
          <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="heading">Örnek Sayı</h1>
            <span className="text-xs sm:text-sm font-medium opacity-60">15/10/2023</span>
          </div>
            <span className="text-xs sm:text-sm font-medium opacity-60">1.8b okunma</span>
          </div>

          <Article/>
          <Article/>
          <Article/>
          <Article/>
          <Article/>
        </main>

        <aside className="lg:col-span-1 col-span-4 relative">
          <section className="sticky top-[100px] flex flex-col gap-4">
            <Cover/>
            <Share/>
          </section>
        </aside>
    </section>
    <Comments/>
    </>
  )
}

export default SayiPage