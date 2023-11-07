'use client'
import { useEffect, useState } from "react"
import Item from "./Item"
import { useToast } from "@/components/ui/use-toast"
import axios from "axios"
import Pagination from "@/components/Pagination"

const SayilarPage = () => {

  const [data, setData] = useState<Magazine[]>([])
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)

  const { toast } = useToast()
  useEffect(() => {
    const getData = async() => {
      try {
          const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}magazine/all?page=${page}`)
          if(res.data.error) {
            toast({title : res.data.message})
          } else {
            setData(res.data.data)
            setTotalPage(res.data.totalPages)
          }
      } catch (error: any) {
        toast({title : error.response.data.message.split(':')[1] || error.response.data.message})
      }
    }

    getData()
  }, [page, toast])

  return (
    <main className="container min-h-[calc(100vh_-_416px)] flex flex-col gap-4 py-5">
        <h1 className="heading">Sayılar</h1>

        <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {data?.map((v:Magazine, i: any) => (
              <Item key={i} data={v}/>
            ))}
        </article>

          {totalPage > 1 &&
            <div className="flex justify-center py-3">
            <Pagination
            siblingCount={3}
            onPageChange={setPage}
            totalPages={totalPage}
            />
            </div>}
    </main>
  )
}

export default SayilarPage