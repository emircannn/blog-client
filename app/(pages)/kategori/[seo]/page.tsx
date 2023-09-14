import ClientOnly from "@/components/layouts/ClientOnly"
import CategoryPage from "@/components/pages/Category"


const Page = async ({ params }: { params: { seo: string } }) => {

  return (
    <ClientOnly>
      <CategoryPage
      seo={params.seo}
      />
    </ClientOnly>
  )
}

export default Page