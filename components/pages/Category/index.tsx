'use client'
import { useEffect, useState } from "react"
import Category from "../Article/Category"
import Article from "./Article"
import axios from "axios"
import Pagination from "@/components/Pagination"
import LoadingScreen from "@/components/LoadingScreen"
import { redirect } from "next/navigation"

interface Props {
    seo: string
}

const CategoryPage: React.FC<Props> = ({seo}) => {

  const [data, setData] = useState<any>()
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if(seo) {
      const getData = async () => {
        try {
          setLoading(true)
          const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}category/getWithSeo?seo=${seo}&page=${page}`)
          if(!res.data) {
            redirect('/')
          }
          setData(res.data)
          setLoading(false)
        } catch (error) {
          setLoading(false)
          console.log(error)
        }
      }
      getData()
    }
  }, [page, seo])

  console.log(data)

  if(loading) {
    return <LoadingScreen/>
  }
  
  return (
    <section className="container min-h-[calc(100vh_-_416px)] grid grid-cols-4 gap-4 py-5">
        <main className="col-span-4 lg:col-span-3 flex flex-col items-center gap-3 !max-h-fit">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {data?.texts?.map((v: Texts,i: any) => (
              <Article data={v} key={i} />
            ))}
            </div>

          {data?.totalPages > 1 &&
            <div className="flex justify-center">
            <Pagination
            siblingCount={3}
            onPageChange={setPage}
            totalPages={data?.totalPages}
            />
            </div>}
        </main>
        <aside className="lg:col-span-1 col-span-4 relative">
            <section className="sticky top-[100px] flex flex-col gap-4">
            {data?.data && <Category imageClass="w-16" data={data?.data}/>}
            <p className="text-sm font-semibold">Diğer Kategoriler</p>
              {
                data?.otherCategory?.map((v: CategoryType,i: any) => (
                  <Category data={v} key={i}/>
                ))
              }
            </section>
        </aside>
    </section>
  )
}

export default CategoryPage