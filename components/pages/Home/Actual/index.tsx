'use client'

import Article from "../LastArticles/Article"
import Subject from "./Subject"
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const Actual = () => {
  return (
    <section className="flex max-lg:flex-col gap-4 container">
      <div className="w-2/3 max-lg:w-full flex flex-col gap-4">
          <h6 className="heading">Aktüel</h6>
        <div className="grid-cols-2 max-lg:grid-cols-3 max-md:grid-cols-2 grid gap-4">
          <Article/>
          <Article/>
          <Article/>
          <Article/>
        </div>
      </div>

      <aside className="w-1/3 max-lg:w-full flex flex-col gap-4">
          <h6 className="heading">Sayılar</h6>
        <div className="gap-4 grid grid-cols-1 max-lg:grid-cols-2 max-sm:grid-cols-1">
          <Subject/>
          <Subject/>
          <Subject/>
          
          <div className="rounded-xl overflow-hidden">
          <TwitterTimelineEmbed
          sourceType="profile"
          screenName="mesniu_0"
          options={{height: 460}}
          />
          </div>
        </div>
      </aside>
    </section>
  )
}

export default Actual