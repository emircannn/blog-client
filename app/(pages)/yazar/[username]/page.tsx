import ClientOnly from "@/components/layouts/ClientOnly"
import WriterPage from "@/components/pages/Writer"


const Page = async ({ params }: { params: { username: string } }) => {
  return (
    <ClientOnly>
        <WriterPage/>
    </ClientOnly>
  )
}

export default Page