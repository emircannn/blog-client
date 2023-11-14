
import ClientOnly from "@/components/layouts/ClientOnly";
import Social from "../../Actual/Social";
import ActualItem from "./Actual";
import Subject from "./Subject"

interface Props {
  data: Actual[] | undefined
  magazines: Magazine[] | undefined
  settings: Settings | undefined
}


const Actual: React.FC<Props> = ({
  data,
  magazines,
  settings
}) => {
  return (
    <section className="flex max-lg:flex-col gap-4 container">
      <main className="w-2/3 max-lg:w-full flex flex-col gap-4">
          <h6 className="heading">Aktüel</h6>
        <article className="grid-cols-2 max-lg:grid-cols-3 max-md:grid-cols-2 grid gap-4">
          {data && data?.length > 0 ?
            data.map((_,i) => (
              <ActualItem key={i} data={_}/>
            )) : null
          }
        </article>
      </main>

      <aside className="w-1/3 max-lg:w-full flex flex-col gap-4">
          <h6 className="heading">Sayılar</h6>
        <article className="gap-4 grid grid-cols-1 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {magazines && 
          magazines?.length > 0 ?
            magazines?.map((data, i) => (
              <Subject key={i} data={data}/>
            )) : null}
          <ClientOnly>
            <Social settings={settings}/>
          </ClientOnly>
        </article>
      </aside>
    </section>
  )
}

export default Actual