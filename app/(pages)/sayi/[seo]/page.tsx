'use client'
import ClientOnly from "@/components/layouts/ClientOnly"
import SayiPage from "@/components/pages/Sayi"
import axios from "axios"
import { redirect } from "next/navigation"
import { useEffect, useState } from "react"

const Page = ({ params }: { params: { seo: string } }) => {

  const getMagazine = async(seo: string) => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}magazine/getMagazine?seo=${seo}`)
      return res.data.data as Magazine
  } catch (error) {
      console.log(error)
  }
  }

  const [magazine, setMagazine] = useState<Magazine>()

  useEffect(() => {
    const getData = async() => {
      const data = await getMagazine(params.seo)
      if(!data) {
        redirect('/')
      }
      setMagazine(data)
    }

    if(params.seo) {
      getData()
    }
  }, [params.seo])
  
  return (
    <ClientOnly>
      <SayiPage data={magazine}/>
    </ClientOnly>
  )
}

export default Page