'use client'

import Subject from "../Home/Actual/Subject"
import OtherArticles from "./OtherArticles"

const Aside = () => {
  return (
    <div className="sticky top-[100px] flex flex-col gap-4">
        <p className="text-sm font-semibold">Yazının Yayımlandığı Sayı</p>
        <Subject/>

        <p className="text-sm font-semibold">Bu Sayıya Ait Diğer Yazılar</p>

        <div className="flex flex-col gap-2">
            <OtherArticles/>
            <OtherArticles/>
            <OtherArticles/>
            <OtherArticles/>
        </div>
    </div>
  )
}

export default Aside