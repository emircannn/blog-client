
import ClientOnly from "@/components/layouts/ClientOnly"
import ActualPage from "@/components/pages/Actual/ActualPage"
import {redirect} from 'next/navigation'

const getAllTexts = async(seo: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}actual/getTextWithSeo?seo=${seo}`, {
        cache: 'no-cache'
    }).then((res) => res.json()).then((data) => {
        return data.data
    })
    return res
} catch (error) {
    console.log(error)
}
}
const getOtherTexts = async(seo: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}actual/getOtherTexts?seo=${seo}`, {
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

  const data = getAllTexts(params.seo)
  const data2 = getOtherTexts(params.seo)

  const [_data, _data2] = await Promise.all([data, data2])

  if(!data) {
    redirect('/')
  }

  return (
    <ClientOnly>
        <ActualPage data={_data} data2={_data2}/>
    </ClientOnly>
  )
}

export default Page
