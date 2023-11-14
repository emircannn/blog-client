'use client'
import ClientOnly from "@/components/layouts/ClientOnly"
import ArticlePage from "@/components/pages/Article"
import axios from "axios"
import {redirect} from 'next/navigation'
import { useEffect, useState } from "react"

const Page = ({ params }: { params: { seo: string } }) => {

  const getTextWithSeo = async(seo: string) => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}article/getTextWithSeo?seo=${seo}`)
      return res.data.data as Texts
  } catch (error) {
      console.log(error)
  }
  }

  const [text, setText] = useState<Texts>()

  useEffect(() => {
    const getData = async() => {
      const data = await getTextWithSeo(params.seo)
      if(!data) {
        redirect('/')
      }
      setText(data)
    }

    if(params.seo) {
      getData()
    }
  }, [params.seo])
  return (
    <ClientOnly>
        <ArticlePage data={text}/>
    </ClientOnly>
  )
}

export default Page
