import ClientOnly from "@/components/layouts/ClientOnly"
import CategoryPage from "@/components/pages/Category"
import { Metadata } from "next"

interface Props {
  params: { seo: string }
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  return {
      title: 'Kategori',
      description: 'Güncel Olaylar ve Analizler: Siyaset, Din, Gündem ve Tarihle İlgili En İyi Yazılar. Öğrenin, Tartışın ve Bilgilerinizi Genişletin!',
      robots: 'index, follow',
  }
}

const Page = async ({ params }: { params: { seo: string } }) => {
  return (
    <ClientOnly>
      <CategoryPage seo={params.seo}/>
    </ClientOnly>
  )
}

export default Page