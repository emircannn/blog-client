
import Social from "../../Actual/Social";
import Article from "../LastArticles/Article"
import Subject from "./Subject"

const Actual = () => {
  return (
    <section className="flex max-lg:flex-col gap-4 container">
      <main className="w-2/3 max-lg:w-full flex flex-col gap-4">
          <h6 className="heading">Aktüel</h6>
        <article className="grid-cols-2 max-lg:grid-cols-3 max-md:grid-cols-2 grid gap-4">
          <Article/>
          <Article/>
          <Article/>
          <Article/>
        </article>
      </main>

      <aside className="w-1/3 max-lg:w-full flex flex-col gap-4">
          <h6 className="heading">Sayılar</h6>
        <article className="gap-4 grid grid-cols-1 max-lg:grid-cols-2 max-sm:grid-cols-1">
          <Subject/>
          <Subject/>
          <Subject/>
          
          <Social/>
        </article>
      </aside>
    </section>
  )
}

export default Actual