import ClientOnly from "@/components/layouts/ClientOnly"
import SayiPage from "@/components/pages/Sayi"
import { seoDesc } from "@/components/utils"
import { Metadata } from "next"
import { redirect } from "next/navigation"

const getMagazine = async(seo: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}magazine/getMagazine?seo=${seo}`, {
        cache: 'no-cache'
    }).then((res) => res.json()).then((data) => {
        return data.data as Magazine
    })
    return res
} catch (error) {
    console.log(error)
}
}

interface Props {
  params: { seo: string }
}

  export async function generateMetadata({params}: Props): Promise<Metadata> {
    const data = await getMagazine(params.seo)
    if(!data) return {
      title: "Sayfa Bulunamadı",
      description: "Üzgünüz, sayfa bulunamadı...",
    }
    

    return {
      title: data.title,
      description: data.desc || '',
      robots: 'index, follow',
      applicationName: 'ZİNCİRKIRAN',
      assets: data.image,
      alternates: {
        canonical: `/sayi/${data.seo}`
      },
      openGraph: {
        type: 'website',
        title: data.title,
        description: data.desc || '',
        siteName: "ZİNCİRKIRAN",
        images: [{
          url: data.image,
        }],
        url: `${process.env.NEXT_PUBLIC_SITE}/sayi/${data.seo}`
      },
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