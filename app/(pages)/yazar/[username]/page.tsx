import ClientOnly from "@/components/layouts/ClientOnly"
import WriterPage from "@/components/pages/Writer"

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const Page = async ({ params }: { params: { username: string } }) => {
  return (
    <ClientOnly>
        <WriterPage/>
    </ClientOnly>
  )
}

export default Page