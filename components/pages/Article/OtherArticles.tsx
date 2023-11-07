
import UserInfo from "@/components/UserInfo"
import Link from "next/link"

interface Props {
  data: Texts | Actual
}
const OtherArticles: React.FC<Props> = ({
  data
}) => {
  return (
    <div className="backgroundColor rounded-xl p-2 w-full flex gap-2">
        <div className="flex flex-col gap-3">
            <Link href={`/yazi/${data.seo}`} className="text-sm font-semibold line-clamp-2 hover:underline">{data.title}</Link>
            <UserInfo data={data.user} date={data.createdAt} readCount={data.readCount}/>
        </div>
    </div>
  )
}

export default OtherArticles