
import ClientOnly from "@/components/layouts/ClientOnly"
import ArticlePage from "@/components/pages/Article"

const Page = async ({ params }: { params: { seo: string } }) => {
  return (
    <ClientOnly>
        <ArticlePage seo={params.seo}/>
    </ClientOnly>
  )
}

export default Page