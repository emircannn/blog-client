'use client'
import ClientOnly from "@/components/layouts/ClientOnly"
import ActualPage from "@/components/pages/Actual/ActualPage"
import {redirect} from 'next/navigation'
import { useEffect, useState } from "react";
import axios from "axios";


const Page = ({ params }: { params: { seo: string } }) => {

  const getTextWithSeo = async (seo: string) => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}actual/getTextWithSeo?seo=${seo}`)
      return res.data.data as Actual;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  const getOtherTexts = async(seo: string) => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}actual/getOtherTexts?seo=${seo}`)
      return res.data.data as Actual[]
  } catch (error) {
      console.log(error)
  }
  }

  const [data, setData] = useState<Actual>()
  const [dataOther, setDataOther] = useState<Actual[] | undefined>([])

  useEffect(() => {
    if(params.seo) {
      const getData = async() => {
        const data1 = getTextWithSeo(params.seo)
        const data2 = getOtherTexts(params.seo)
        const [_data, _data2] = await Promise.all([data1, data2])
        setDataOther(_data2)
        setData(_data)

        if(!_data) {
          redirect('/')
        }
      }
      getData()
    }
  }, [params.seo])
  

  return (
    <>
    <ClientOnly>
        <ActualPage data={data} data2={dataOther}/>
    </ClientOnly>
    </>
  )
}

export default Page
