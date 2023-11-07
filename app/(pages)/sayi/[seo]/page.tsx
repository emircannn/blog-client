import ClientOnly from "@/components/layouts/ClientOnly"
import SayiPage from "@/components/pages/Sayi"
import { redirect } from "next/navigation"

const getMagazine = async(seo: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}magazine/getMagazine?seo=${seo}`, {
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

  const data = await getMagazine(params.seo)

  if(!data) {
    redirect('/')
  }

  return (
    <ClientOnly>
      <SayiPage data={data}/>
    </ClientOnly>
  )
}

export default Page