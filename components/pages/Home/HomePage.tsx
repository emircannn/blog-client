'use client'

import Actual from "./Actual";
import Categories from "./Categories";
import LastArticles from "./LastArticles";
import MostReaded from "./MostReaded/MostReaded";
import ResponsiveSlider from "./Responsive/ResponsiveSlider";
import SliderWrapper from "./Slider/SliderWrapper";
import WriteWithUs from "./WriteWithUs";
import Writers from "./Writers";

const HomePage = () => {

    const data = [
        {title: `İstanbul'un Fethi`, text: ` 1453 yılında İstanbul, Büyük İskender'den beri birçok imparatorluğun hedefi olmuştu. Ancak bu tarih, Fatih Sultan Mehmet'in kahramanca liderliği altında gerçekleşen unutulmaz bir zaferin başlangıcıydı. 6 Nisan'da başlayan kuşatma, 29 Mayıs'ta zaferle sonuçlandı.
        Fatih Sultan Mehmet'in kararlılığı ve ordusunun cesareti, şehrin surlarını aşmayı başardı. Topkapı Sarayı'ndan Aya İrini'ye kadar uzanan surların düşüşü, İstanbul'u fethin simgesi haline getirdi.
        Fetih günü, İstanbul halkı için yeni bir başlangıçtı. Ayasofya camiye çevrildi ve şehir, İslam'ın merkezi haline geldi. İstanbul, Osmanlı İmparatorluğu'nun başkenti oldu ve 16. yüzyılda dünyanın en büyük şehirlerinden biri haline geldi.
        İstanbul'un fethi, tarih boyunca büyük bir öneme sahiptir. Fatih Sultan Mehmet'in cesareti ve vizyonu, İstanbul'u hem kültürel hem de stratejik anlamda dünya sahnesinde öne çıkardı. Bu zafer, İstanbul'un köprü olduğu Batı ve Doğu'nun buluştuğu bir nokta olarak tarihe yazıldı ve hala büyüleyici bir geçmişi hatırlatır.`, image: '/images/text.jpg'},
        {title: 'Kanuni Sultan Süleyman', text: `Kanuni Sultan Süleyman, Osmanlı İmparatorluğu'nun en büyük hükümdarlarından biriydi. 1520-1566 yılları arasında tahtta kalan Sultan Süleyman, adaleti ve kültürel gelişmeyi teşvik etti. "Muhteşem Süleyman" olarak da bilinen hükümdar, güçlü bir ordu kurdu ve Osmanlı İmparatorluğu'nu zirveye taşıdı. Ayrıca, ünlü şair Rumi ve sanatçılara da büyük destek verdi. Kanuni Sultan Süleyman, Osmanlı tarihinde eşsiz bir lider olarak hatırlanır.`, image: '/images/test.jpg'}
    ]

    return ( 
    <div className="flex flex-col gap-5 lg:gap-8 pb-5">
        <SliderWrapper
            data={data}
        />
        <ResponsiveSlider
        data={data}/>

        <MostReaded/>

        <LastArticles/>

        <Writers/>

        <Actual/>

        <WriteWithUs/>

        <Categories/>
    </div> 
    );
}
 
export default HomePage;