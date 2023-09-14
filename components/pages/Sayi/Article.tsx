import UserInfo from '@/components/UserInfo'

const Article = () => {
  return (
    <article className="w-full rounded-xl p-2 md:p-5 bg-white dark:bg-darkerColor gap-4 flex flex-col">
            <h2 className="articleHeading">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, officiis.</h2>
            <div className="flex items-center justify-between gap-2">
            <UserInfo
            className="w-8"
            lg
            date={false}
            readCount={false}/>
            <span className="text-xs sm:text-sm font-medium">Sayfa: 1-12</span>
            </div>
          </article>
  )
}

export default Article