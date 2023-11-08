
import ClientOnly from "@/components/layouts/ClientOnly"
import ArticlePage from "@/components/pages/Article"
import { seoDesc } from "@/components/utils"
import { Metadata } from "next"
import {redirect} from 'next/navigation'

const getTextWithSeo = async(seo: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}article/getTextWithSeo?seo=${seo}`, {
      next: { revalidate: 1*60*5 }
    }).then((res) => res.json()).then((data) => {
        return data.data as Texts
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
    const data = await getTextWithSeo(params.seo)
    if(!data) return {
      title: "Sayfa Bulunamadı",
      description: "Üzgünüz, sayfa bulunamadı...",
    }
    

    return {
      title: data.title,
      description: seoDesc(data.text),
      category: data.category.name,
      robots: 'index, follow',
      applicationName: 'ZİNCİRKIRAN',
      alternates: {
        canonical: `/yazi/${data.seo}`
      },
      authors: {
        name: data.user.name,
        url: `${process.env.NEXT_PUBLIC_SITE}/yazar/${data.user.username}`
      },
      assets: data.image,
      openGraph: {
        type: 'website',
        title: data.title,
        description: seoDesc(data.text),
        siteName: "ZİNCİRKIRAN",
        images: [{
          url: data.image,
        }],
        url: `${process.env.NEXT_PUBLIC_SITE}/yazi/${data.seo}`
      },
    }
  }

const Page = async ({ params }: { params: { seo: string } }) => {
  const data = await getTextWithSeo(params.seo)

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
