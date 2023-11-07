
import ClientOnly from "@/components/layouts/ClientOnly"
import ArticlePage from "@/components/pages/Article"

import {redirect} from 'next/navigation'
const getAllTexts = async(seo: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}article/getTextWithSeo?seo=${seo}`, {
        cache: 'no-cache'
    }).then((res) => res.json()).then((data) => {
        return data.data
    })
    return res
} catch (error) {
    console.log(error)
}
}

const Page = async ({ params }: { params: { seo: string } }) => {
  const data = await getAllTexts(params.seo)

  if(!data) {
    redirect('/')
  }

  return (
    <ClientOnly>
        <ArticlePage data={data}/>
    </ClientOnly>
  )
}

export default Page
