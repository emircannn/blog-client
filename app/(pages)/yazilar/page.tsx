import ClientOnly from "@/components/layouts/ClientOnly"
import All from "./All"

const AllText = () => {
  return (
    <ClientOnly>
        <All/>
    </ClientOnly>
  )
}

export default AllText