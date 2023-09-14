import Category from "../Article/Category"
import Article from "./Article"

interface Props {
    seo: string
}

const CategoryPage: React.FC<Props> = ({seo}) => {
  return (
    <section className="container min-h-[calc(100vh_-_416px)] grid grid-cols-4 gap-4 py-5">
        <main className="col-span-4 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 !max-h-fit">
            <Article/>
            <Article/>
            <Article/>
            <Article/>
            <Article/>
            <Article/>
        </main>
        <aside className="lg:col-span-1 col-span-4 relative">
            <section className="sticky top-[100px] flex flex-col gap-4">
            <Category imageClass="w-16"/>
            <p className="text-sm font-semibold">Diğer Kategoriler</p>
            <Category/>
            <Category/>
            <Category/>
            <Category/>
            </section>
        </aside>
    </section>
  )
}

export default CategoryPage