
import ClientOnly from "@/components/layouts/ClientOnly"
import ActualPage from "@/components/pages/Actual/ActualPage"
import { seoDesc } from "@/components/utils";
import { Metadata } from "next"
import {redirect} from 'next/navigation'

const getTextWithSeo = async (seo: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}actual/getTextWithSeo?seo=${seo}`, {
      cache: 'no-cache'
    }).then((res) => res.json()).then((data) => {
      return data.data as Actual;
    });
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
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
      category: 'Aktüel',
      robots: 'index, follow',
      applicationName: 'ZİNCİRKIRAN',
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
        url: `${process.env.NEXT_PUBLIC_SITE}/aktuel/${data.seo}`
      },
    }
  }


const Page = async ({ params }: { params: { seo: string } }) => {

  const data = getTextWithSeo(params.seo)
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
