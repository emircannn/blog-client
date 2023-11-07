'use client'
import { useToast } from "@/components/ui/use-toast"
import Social from "./Social"
import { useEffect, useState } from "react"
import axios from "axios"
import Pagination from "@/components/Pagination"
import ActualItem from "../Home/Actual/Actual"
import { getSettings } from "@/components/layouts/Header"

const ActualPage = () => {

    const { toast } = useToast()
    const [data, setData] = useState<Actual[]>([])
    const [settings, setSettings] = useState<any>()
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        const getData = async() => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}actual/getAll?page=${page}`)
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

    useEffect(() => {
        const getData = async() => {
            const res = await getSettings()
            setSettings(res)
        }

        getData()
    }, [])

    console.log(settings)
  return (
    <section className="container min-h-[calc(100vh_-_416px)] grid grid-cols-4 gap-4 py-5">
        <div className="col-span-4 lg:col-span-3 rounded-xl flex flex-col gap-4 !max-h-fit">
            <h1 className="heading">Aktüel</h1>
            <main className="col-span-4 lg:col-span-3 rounded-xl grid grid-cols-2 md:grid-cols-3 gap-3 !max-h-fit">
                {data?.map((item, i) => (
                <ActualItem data={item} key={i}/>
                ))}
            </main>

            {totalPages > 1 &&
            <div className="flex justify-center">
            <Pagination
            siblingCount={3}
            onPageChange={setPage}
            totalPages={totalPages}
            />
            </div>}
        </div>

        <aside className="lg:col-span-1 col-span-4 relative">
            <section className="sticky top-[100px] flex flex-col gap-4">
                <h2 className="heading">Twitter Hesabımız</h2>
                {settings &&
                <Social settings={settings} height={550}/>
                }
            </section>
        </aside>
    </section>
  )
}

export default ActualPage