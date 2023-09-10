import ClientOnly from "@/components/layouts/ClientOnly";
import HomePage from "@/components/pages/Home/Responsive/HomePage";

export default function Home() {
  return (
    <ClientOnly>
      <HomePage/>
    </ClientOnly>
  )
}
