
import { ArrowRight, Instagram, Twitter } from 'lucide-react';
import Category from './Category';

const Categories = () => {
  return (
    <section className="flex max-lg:flex-col gap-4 container">
        <div className="w-2/3 max-lg:w-full flex flex-col gap-4">
            <h6 className="heading">Kategoriler</h6>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                <Category/>
                <Category/>
                <Category/>
                <Category/>
            </div>
        </div>

        <aside className="w-1/3 max-lg:w-full flex flex-col gap-4">
            <p className="heading">Sosyal Medya Hesaplarımız</p>
            <div className="gap-4 grid grid-cols-1 max-lg:grid-cols-2 max-sm:grid-cols-1">
                <div className='w-full rounded-xl backgroundColor p-3 flex items-center justify-between gap-4'>
                    <span className='flex items-center gap-3'>
                    <Twitter size={28}/>
                    <span className='font-medium cursor-pointer hover:underline duration-300'>@mesniu_0</span>
                    </span>

                    <button className='p-3 rounded-full hover:bg-white hover:dark:bg-darkerColor duration-300'>
                    <ArrowRight size={22}/>
                    </button>
                </div>
                <div className='w-full rounded-xl backgroundColor p-3 flex items-center justify-between gap-4'>
                    <span className='flex items-center gap-3'>
                    <Instagram size={28}/>
                    <span className='font-medium cursor-pointer hover:underline duration-300'>@muverrih0</span>
                    </span>

                    <button className='p-3 rounded-full hover:bg-white hover:dark:bg-darkerColor duration-300'>
                    <ArrowRight size={22}/>
                    </button>
                </div>
            </div>
        </aside>
    </section>
)
}

export default Categories