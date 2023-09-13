
import ClientOnly from "@/components/layouts/ClientOnly"
import ArticlePage from "@/components/pages/Article"


const Page = () => {
  return (
    <ClientOnly>
        <ArticlePage/>
    </ClientOnly>
  )
}

export default Page