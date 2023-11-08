import { dateFormater, formatReadCount } from "@/components/utils"
import Comments from "../Article/Comments"
import Article from "./Article"
import Cover from "./Cover"
import Share from "./Share"

interface Props {
  data: Magazine
}

const SayiPage: React.FC<Props> = ({
  data
}) => {
  return (
    <>
    <section className="container min-h-[calc(100vh_-_416px)] grid grid-cols-4 gap-4 py-5">
        <main className="col-span-4 lg:col-span-3 rounded-xl p-2 md:p-5 backgroundColor flex flex-col gap-4 !max-h-fit">
          <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="heading">{data.title}</h1>
            <span className="text-xs sm:text-sm font-medium opacity-60">{dateFormater(data.createdAt)}</span>
          </div>
            <span className="text-xs sm:text-sm font-medium opacity-60">{formatReadCount(data.readCount)} okunma</span>
          </div>

          {data?.contributions?.map((v, i) => (
            <Article key={i} data={v}/>
          ))}
        </main>

        <aside className="lg:col-span-1 col-span-4 relative">
          <section className="sticky top-[100px] flex flex-col gap-4">
            <Cover data={data}/>
            <Share data={data}/>
            {data.desc &&
            <div className="w-full p-2 rounded-xl backgroundColor text-xs font-medium">
              {data.desc}
            </div>}
          </section>
        </aside>
    </section>
    <Comments data={data} magazine/>
    </>
  )
}

export default SayiPage