import UserInfo from '@/components/UserInfo'
import Link from 'next/link'

interface Props {
  data: Contributions
}

const Article: React.FC<Props> = ({
  data
}) => {
  return (
    <article className="w-full rounded-xl p-2 md:p-5 bg-white dark:bg-darkerColor gap-4 flex flex-col">
            <Link target='_blank' href={data.file} className="articleHeading hover:underline">{data.title}</Link>
            <div className="flex items-center justify-between gap-2">
            <UserInfo
            className="w-8" lg data={data.user}/>
            <span className="text-xs sm:text-sm font-medium">Sayfa: {data.startPage}-{data.endPage}</span>
            </div>
          </article>
  )
}

export default Article