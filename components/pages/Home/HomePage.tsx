import { getSettings } from "@/components/layouts/Header";
import Actual from "./Actual";
import Categories from "./Categories";
import LastArticles from "./LastArticles";
import MostReaded from "./MostReaded/MostReaded";
import ResponsiveSlider from "./Responsive/ResponsiveSlider";
import SliderWrapper from "./Slider/SliderWrapper";
import WriteWithUs from "./WriteWithUs";
import Writers from "./Writers";

const getSlider = async() => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}settings/getSlider`, {
            next: { revalidate: 1*60*5 }
        }).then((res) => res.json()).then((data) => {
            return data.data
        })
        return res
    } catch (error) {
        console.log(error)
    }
}
const getMostReaded = async() => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}home/getMostReaded`, {
            next: { revalidate: 1*60*5 }
        }).then((res) => res.json()).then((data) => {
            return data.data
        })
        return res
    } catch (error) {
        console.log(error)
    }
  }
const getLastLoaded = async() => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}home/getLastLoaded`, {
            next: { revalidate: 1*60*5 }
        }).then((res) => res.json()).then((data) => {
            return data.data
        })
        return res
    } catch (error) {
        console.log(error)
    }
  }
const getLastActual = async() => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}home/getLastActual`, {
            next: { revalidate: 1*60*5 }
        }).then((res) => res.json()).then((data) => {
            return data.data
        })
        return res
    } catch (error) {
        console.log(error)
    }
  }
const getCategories = async() => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}home/getCategories`, {
            next: { revalidate: 1*60*5 }
        }).then((res) => res.json()).then((data) => {
            return data.data
        })
        return res
    } catch (error) {
        console.log(error)
    }
  }
const getMagazines = async() => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}home/getMagazines`, {
            next: { revalidate: 1*60*5 }
        }).then((res) => res.json()).then((data) => {
            return data.data
        })
        return res
    } catch (error) {
        console.log(error)
    }
  }
const getEditors = async() => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}home/getEditors`, {
            next: { revalidate: 1*60*5 }
        }).then((res) => res.json()).then((data) => {
            return data.data
        })
        return res
    } catch (error) {
        console.log(error)
    }
  }

const HomePage = async() => {

    const data = getSlider();
    const data2 = getMostReaded();
    const data3 = getLastLoaded();
    const data4 = getLastActual();
    const data5 = getMagazines();
    const data6 = getCategories();
    const data7 = getEditors();
    const data8 = getSettings();

    const [slider, mostReaded, lastLoaded, actual, magazines, categories, editors, settings] = await Promise.all([data, data2, data3, data4, data5, data6, data7, data8])

    

    return ( 
    <div className="flex flex-col gap-5 lg:gap-8 pb-5">
        <SliderWrapper data={slider}/>

        <ResponsiveSlider data={slider}/>

        <MostReaded data={mostReaded}/>

        <LastArticles data={lastLoaded}/>

        <Writers data={editors}/>

        <Actual data={actual} magazines={magazines} settings={settings}/>

        <WriteWithUs data={settings}/>

        <Categories data={categories} settings={settings}/>
    </div> 
    );
}
 
export default HomePage;