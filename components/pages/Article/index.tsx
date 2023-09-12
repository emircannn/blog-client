'use client'

import UserInfo from "@/components/UserInfo"
import Image from "next/image"
import Share from "./Share"
import { Badge } from "@/components/ui/badge"
import Aside from "./Aside"
export const TextPlaceholder = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque iste tenetur impedit eius debitis nihil nisi, eum perspiciatis blanditiis numquam dignissimos provident error, quas dolorem voluptatem soluta vero ea labore culpa doloribus rerum facere officiis! Pariatur beatae dolor veniam corporis dicta molestiae impedit similique debitis vero. Sint, quo assumenda nostrum amet eaque qui repellendus officia harum exercitationem magni quibusdam nobis delectus eveniet cum voluptates, aperiam voluptatum. Aperiam facere debitis deleniti! Vero reprehenderit nisi doloremque, eum nulla vel architecto quos aspernatur ad, sit dolor excepturi. Nihil eius ad beatae vero esse eligendi, nesciunt facilis reprehenderit natus odio tempore totam quod iste. Iste totam dolor eaque libero aliquid praesentium dolorem illum, delectus excepturi! Cum, ipsa. Vitae aspernatur id error velit in placeat possimus similique excepturi odit eum dolore, corporis laboriosam aut assumenda vel nostrum nam dolor perspiciatis ipsum voluptatum. Exercitationem consequuntur repellendus quam soluta assumenda sint dolor. Officiis quibusdam quasi eius iure quae, ea doloremque enim dolor numquam impedit neque natus a voluptas facere. Mollitia ab architecto ullam maxime eum deleniti beatae doloribus esse impedit hic! Vitae error tempore esse molestias commodi ea rerum fugit, illum debitis saepe voluptate magni cumque culpa! Inventore fugiat ipsa totam quia tempora. Accusamus accusantium quibusdam odio fugiat earum molestias alias dolorem in reprehenderit totam quos, delectus enim nostrum sequi eaque perspiciatis voluptatem dignissimos. Impedit corporis tempore debitis praesentium, inventore itaque deleniti velit quis temporibus aliquid dolorem ullam voluptas quia, error, aliquam est esse? Animi, pariatur eius quae similique iusto tempora exercitationem maiores sequi doloribus quisquam enim distinctio nisi iure molestias quo. Porro, ducimus? Ea similique accusamus ipsa. Cupiditate illo autem vel perspiciatis ab quam. Perferendis architecto perspiciatis error consectetur possimus ut exercitationem saepe sapiente amet nulla explicabo labore laudantium pariatur autem dolor reprehenderit, ducimus atque ratione unde id. Magnam veniam nostrum officiis necessitatibus reprehenderit consequuntur assumenda. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque iste tenetur impedit eius debitis nihil nisi, eum perspiciatis blanditiis numquam dignissimos provident error, quas dolorem voluptatem soluta vero ea labore culpa doloribus rerum facere officiis! Pariatur beatae dolor veniam corporis dicta molestiae impedit similique debitis vero. Sint, quo assumenda nostrum amet eaque qui repellendus officia harum exercitationem magni quibusdam nobis delectus eveniet cum voluptates, aperiam voluptatum. Aperiam facere debitis deleniti! Vero reprehenderit nisi doloremque, eum nulla vel architecto quos aspernatur ad, sit dolor excepturi. Nihil eius ad beatae vero esse eligendi, nesciunt facilis reprehenderit natus odio tempore totam quod iste. Iste totam dolor eaque libero aliquid praesentium dolorem illum, delectus excepturi! Cum, ipsa. Vitae aspernatur id error velit in placeat possimus similique excepturi odit eum dolore, corporis laboriosam aut assumenda vel nostrum nam dolor perspiciatis ipsum voluptatum. Exercitationem consequuntur repellendus quam soluta assumenda sint dolor. Officiis quibusdam quasi eius iure quae, ea doloremque enim dolor numquam impedit neque natus a voluptas facere. Mollitia ab architecto ullam maxime eum deleniti beatae doloribus esse impedit hic! Vitae error tempore esse molestias commodi ea rerum fugit, illum debitis saepe voluptate magni cumque culpa! Inventore fugiat ipsa totam quia tempora. Accusamus accusantium quibusdam odio fugiat earum molestias alias dolorem in reprehenderit totam quos, delectus enim nostrum sequi eaque perspiciatis voluptatem dignissimos. Impedit corporis tempore debitis praesentium, inventore itaque deleniti velit quis temporibus aliquid dolorem ullam voluptas quia, error, aliquam est esse? Animi, pariatur eius quae similique iusto tempora exercitationem maiores sequi doloribus quisquam enim distinctio nisi iure molestias quo. Porro, ducimus? Ea similique accusamus ipsa. Cupiditate illo autem vel perspiciatis ab quam. Perferendis architecto perspiciatis error consectetur possimus ut exercitationem saepe sapiente amet nulla explicabo labore laudantium pariatur autem dolor reprehenderit, ducimus atque ratione unde id. Magnam veniam nostrum officiis necessitatibus reprehenderit consequuntur assumenda."

const ArticlePage = () => {

  return (
    <main className="container min-h-[calc(100vh_-_416px)] grid grid-cols-4 gap-4 py-5">
        <article className="col-span-4 lg:col-span-3 backgroundColor rounded-xl p-3 md:p-6 flex flex-col gap-4">
            <span><Badge>Tarih</Badge></span>
            <h1 className="heading">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt nostrum dolore beatae molestiae!</h1>
            <UserInfo className="w-10" lg/>

            <div className="w-full aspect-[16/9] rounded-xl overflow-hidden relative">
                <Image alt="banner" src='/images/text.jpg' fill quality={100} className="object-cover"/>
            </div>

            <div className="sm:grid grid-cols-5 gap-4 max-sm:flex flex-col-reverse">
                <aside className="sm:col-span-1 col-span-5 relative">
                    <Share/>
                </aside>

                <p className="col-span-5 sm:col-span-4 text-sm sm:text-base">{TextPlaceholder}</p>
            </div>
        </article>

        <aside className="col-span-1 relative max-lg:hidden">
            <Aside/>
        </aside>
    </main>
  )
}

export default ArticlePage