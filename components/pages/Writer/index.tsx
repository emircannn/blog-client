'use client'
import { useEffect, useState } from "react"
import Article from "../Category/Article"
import WriterProfile from "./WriterProfile"
import WriterSubjects from "./WriterSubjects"
import Pagination from "@/components/Pagination"
import ActualItem from "../Home/Actual/Actual"

interface Props {
    data: User,
    username: string
}



const WriterPage: React.FC<Props> = ({
    data
}) => {

    const [article, setArticle] = useState<Texts[]>([])
    const [texts, setTexts] = useState<Contributions[]>([])
    const [actual, setActual] = useState<Actual[]>([])
    const [page1, setPage1] = useState<number>(1)
    const [page2, setPage2] = useState<number>(1)
    const [page3, setPage3] = useState<number>(1)
    const [totalPage1, setTotalPage1] = useState<number>(1)
    const [totalPage2, setTotalPage2] = useState<number>(1)
    const [totalPage3, setTotalPage3] = useState<number>(1)

    useEffect(() => {
        if(data?.username) {
            const getUserTexts = async() => {
                try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_URL}user/getUserTexts?username=${data.username}&page=${page1}`, {
                    cache: 'no-cache'
                }).then((res) => res.json()).then((data) => {
                    setArticle(data.data)
                    setTotalPage1(data.totalPages)
                })
                return res
            } catch (error) {
                console.log(error)
            }
            }
            getUserTexts()
        }
    }, [data, page1])

    useEffect(() => {
        if(data?.username) {
            const getUserActual = async() => {
                try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_URL}user/getUserActual?username=${data.username}&page=${page2}`, {
                    cache: 'no-cache'
                }).then((res) => res.json()).then((data) => {
                    setActual(data.data)
                    setTotalPage2(data.totalPages)
                })
                return res
            } catch (error) {
                console.log(error)
            }
            }
            getUserActual()
        }
    }, [data, page2])

    useEffect(() => {
        if(data?.username) {
            const getUserContribution = async() => {
                try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_URL}user/getUserContribution?username=${data.username}&page=${page3}`, {
                    cache: 'no-cache'
                }).then((res) => res.json()).then((data) => {
                    setTexts(data.data)
                    setTotalPage3(data.totalPages)
                })
                return res
            } catch (error) {
                console.log(error)
            }
            }
            getUserContribution()
        }
    }, [data, page3])

    console.log(texts, actual, article)

    return (
    <section className="container min-h-[calc(100vh_-_416px)] grid grid-cols-4 gap-4 py-5">
        <aside className="lg:col-span-1 col-span-4 relative">
            <section className="sticky top-[100px] flex flex-col gap-4">
                <WriterProfile data={data}/>
            </section>
        </aside>

        <div className="col-span-4 lg:col-span-3 rounded-xl flex flex-col gap-4 !max-h-fit">
        {  article?.length > 0 &&
            <>
            <h3 className="heading">Yazara Ait Yazılar</h3>
            <main className="col-span-4 lg:col-span-3 rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 !max-h-fit">
                {article?.map((v, i) => (
                    <Article key={i} data={v} showBadge/>
                ))}
            </main>

            {totalPage1 > 1 &&
            <div className="flex justify-center py-3">
            <Pagination
            siblingCount={3}
            onPageChange={setPage1}
            totalPages={totalPage1}
            />
            </div>}
            </>
            }

            {actual?.length > 0 &&
            <>
            <h3 className="heading">Yazara Aktüel Yazılar</h3>
            <main className="col-span-4 lg:col-span-3 rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 !max-h-fit">
                {actual?.map((v, i) => (
                    <ActualItem key={i} data={v}/>
                ))}
            </main>

            {totalPage2 > 1 &&
            <div className="flex justify-center py-3">
            <Pagination
            siblingCount={3}
            onPageChange={setPage2}
            totalPages={totalPage2}
            />
            </div>}
            </>
            }

            {texts?.length > 0 &&
            <>
            <h3 className="heading">Yazarın Katkı Sağladığı Sayılar</h3>

            <div className="flex flex-col gap-3">
                {texts?.map((v,i) => (
                    <WriterSubjects key={i} data={v}/>
                ))}
            </div>

            {totalPage3 > 1 &&
            <div className="flex justify-center py-3">
            <Pagination
            siblingCount={3}
            onPageChange={setPage3}
            totalPages={totalPage3}
            />
            </div>}
            </>}
        </div>
    </section>
  )
}

export default WriterPage