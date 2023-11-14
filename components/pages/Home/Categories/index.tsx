
import { ArrowRight, Instagram, Twitter } from 'lucide-react';
import Category from './Category';
import Link from 'next/link';

interface Props {
    data: CategoryType[] | undefined
    settings : Settings | undefined
}

const Categories: React.FC<Props> = ({
    data,
    settings
}) => {
  return (
    <section className="flex max-lg:flex-col gap-4 container">
        <div className="w-2/3 max-lg:w-full flex flex-col gap-4">
            <h6 className="heading">Kategoriler</h6>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                {data && data?.length > 0 ?
                    data?.map((_,i) => (
                        <Category key={i} data={_}/>
                    )) : null}
            </div>
        </div>

        <aside className="w-1/3 max-lg:w-full flex flex-col gap-4">
            <p className="heading">Sosyal Medya Hesaplarımız</p>
            <div className="gap-4 grid grid-cols-1 max-lg:grid-cols-2 max-sm:grid-cols-1">
                {settings?.twitter &&
                <div className='w-full rounded-xl backgroundColor p-3 flex items-center justify-between gap-4'>
                    <span className='flex items-center gap-3'>
                    <Twitter size={28}/>
                    <Link target='_blank' href={settings?.twitterLink ? settings?.twitterLink : '/'} 
                    className='font-medium cursor-pointer hover:underline duration-300'>@{settings.twitter}</Link>
                    </span>

                    <Link target='_blank' href={settings?.twitterLink ? settings?.twitterLink : '/'}  
                        className='p-3 rounded-full hover:bg-white hover:dark:bg-darkerColor duration-300'>
                        <ArrowRight size={22}/>
                    </Link>
                </div>}
                {settings?.instagram &&
                <div className='w-full rounded-xl backgroundColor p-3 flex items-center justify-between gap-4'>
                    <span className='flex items-center gap-3'>
                    <Instagram size={28}/>
                    <Link target='_blank' href={settings?.instagramLink ? settings?.instagramLink : '/'}  
                    className='font-medium cursor-pointer hover:underline duration-300'>@{settings?.instagram}</Link>
                    </span>

                    <Link target='_blank' href={settings?.instagramLink ? settings?.instagramLink : '/'} 
                        className='p-3 rounded-full hover:bg-white hover:dark:bg-darkerColor duration-300'>
                        <ArrowRight size={22}/>
                    </Link>
                </div>}
            </div>
        </aside>
    </section>
)
}

export default Categories