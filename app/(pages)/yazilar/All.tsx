'use client'

import Article from "@/components/pages/Home/LastArticles/Article"
import { useToast } from "@/components/ui/use-toast"
import axios from "axios"
import { useEffect, useState } from "react"
import Pagination from '@/components/Pagination'

const All = () => {

    const { toast } = useToast()
    const [data, setData] = useState<Texts[]>([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        const getData = async() => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}article/getAll?page=${page}`)
            if(res.data.error) {
                toast({title : res.data.message})
            } else {
                setData(res.data.data)
                setTotalPages(res.data.totalPages)
            }
        } catch (error: any) {
            toast({title : error.response.data.message.split(':')[1] || error.response.data.message})
        }
        }

        getData()
    }, [page, toast])

  return (
    <div className="py-8 px-3 flex flex-col gap-4 w-full max-w-[1280px] mx-auto">

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {data?.map((item, i) => (
            <Article data={item} key={i}/>
            ))}
        </div>

        {totalPages > 1 &&
        <div className="flex justify-center">
            <Pagination
            siblingCount={3}
            onPageChange={setPage}
            totalPages={totalPages}
            />
        </div>}
    </div>
  )
}

export default All