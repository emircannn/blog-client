
import Category from "./Category"
import OtherArticles from "./OtherArticles"

const Aside = () => {
  return (
    <section className="sticky top-[100px] flex flex-col gap-4">
        <p className="text-sm font-semibold">Yazının Yayımlandığı Kategori</p>
        <Category/>

        <p className="text-sm font-semibold">Bu Kategoriye Ait Diğer Yazılar</p>

        <div className="flex flex-col gap-2">
            <OtherArticles/>
            <OtherArticles/>
            <OtherArticles/>
            <OtherArticles/>
        </div>
    </section>
  )
}

export default Aside