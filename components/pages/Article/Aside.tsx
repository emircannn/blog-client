import OtherArticles from "./OtherArticles"

interface Props {
  data: Actual[] | Texts
  actual?: boolean
}

const Aside: React.FC<Props> = ({
  data,
  actual= false
}) => {
  return (
    <section className="sticky top-[100px] flex flex-col gap-4">
        <p className="text-sm font-semibold">Diğer Yazılar</p>

        <div className="flex flex-col gap-2">
            { actual ?
              (data as Actual[])?.length > 0 &&
                (data as Actual[])?.map((v: Actual,i: any) => (
                  <OtherArticles data={v} key={i}/>
                ))
                :
                (data as Texts)?.category.articles?.map((v: Texts,i: any) => (
                  <OtherArticles data={v} key={i}/>
                ))
            }
        </div>
    </section>
  )
}

export default Aside