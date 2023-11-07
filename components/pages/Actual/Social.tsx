'use client'

import { TwitterTimelineEmbed } from 'react-twitter-embed'

interface Props {
    height?: number
    settings: Settings
}

const Social: React.FC<Props> = ({height=300, settings}) => {
  return (
    <>
    <div className="rounded-xl overflow-hidden hidden dark:inline-block">
        <TwitterTimelineEmbed
        sourceType="profile"
        screenName={settings?.twitter ? settings.twitter : ''}
        theme="dark"
        noScrollbar
        options={{height: height}}
        />
        </div>
        <div className="rounded-xl overflow-hidden dark:hidden">
        <TwitterTimelineEmbed
        sourceType="profile"
        screenName={settings?.twitter ? settings.twitter : ''}
        noScrollbar
        theme="light"
        options={{height: height}}
        />
        </div>
    </>
  )
}

export default Social