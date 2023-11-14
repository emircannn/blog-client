'use client'
import Actual from "./Actual";
import Categories from "./Categories";
import LastArticles from "./LastArticles";
import MostReaded from "./MostReaded/MostReaded";
import ResponsiveSlider from "./Responsive/ResponsiveSlider";
import SliderWrapper from "./Slider/SliderWrapper";
import WriteWithUs from "./WriteWithUs";
import Writers from "./Writers";
import axios from "axios";
import { useEffect, useState } from "react";
import HomeLoading from "@/app/loading";
import { useSettings } from "@/lib/context";

const HomePage = () => {

    const getAllUsers = async() => {
        try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}home/getAllUsers`)
        console.log(res.data.data)
        return res.data.data as User[]
    } catch (error) {
        console.log(error)
        throw new Error
    }
    }

    

    const getSlider = async() => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}settings/getSlider`)
            return res.data.data
        } catch (error) {
            console.log(error)
        }
    }
    const getMostReaded = async() => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}home/getMostReaded`)
            return res.data.data
        } catch (error) {
            console.log(error)
        }
      }
    const getLastLoaded = async() => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}home/getLastLoaded`)
            return res.data.data
        } catch (error) {
            console.log(error)
        }
      }
    const getLastActual = async() => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}home/getLastActual`)
            return res.data.data
        } catch (error) {
            console.log(error)
        }
      }
    const getCategories = async() => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}home/getCategories`)
            return res.data.data
        } catch (error) {
            console.log(error)
        }
      }
    const getMagazines = async() => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}home/getMagazines`)
            return res.data.data
        } catch (error) {
            console.log(error)
        }
      }
    const getEditors = async() => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}home/getEditors`)
            return res.data.data
        } catch (error) {
            console.log(error)
        }
      }

    const [sliderData, setSliderData] = useState<Texts[]>()
    const [mostReadedData, setMostReadedData] = useState<Texts[]>()
    const [lastLoadedData, setLastLoadedData] = useState<Texts[]>()
    const [actualData, setActualData] = useState<Actual[]>()
    const [magazinesData, setMagazinesData] = useState<Magazine[]>()
    const [categoriesData, setCategoriesData] = useState<CategoryType[]>()
    const [editorsData, setEditorsData] = useState<User[]>()
    const [loading, setLoading] = useState(false)

    const { settings  } = useSettings();

    useEffect(() => {
      const getDatas = async () => {
        setLoading(true)
        const data = getSlider();
        const data2 = getMostReaded();
        const data3 = getLastLoaded();
        const data4 = getLastActual();
        const data5 = getMagazines();
        const data6 = getCategories();
        const data7 = getEditors();
        const [slider, mostReaded, lastLoaded, actual, magazines, categories, editors] = await Promise.all([data, data2, data3, data4, data5, data6, data7])
        setMostReadedData(mostReaded)
        setLastLoadedData(lastLoaded)
        setSliderData(slider)
        setActualData(actual)
        setMagazinesData(magazines)
        setCategoriesData(categories)
        setEditorsData(editors)
        const a = await getAllUsers()
        setLoading(false)
      }

      getDatas()
    }, [])

    if(loading) {
        return <HomeLoading/>
    }
    

    return ( 
    <div className="flex flex-col gap-5 lg:gap-8 pb-5">
        <SliderWrapper data={sliderData}/>

        <ResponsiveSlider data={sliderData}/>

        <MostReaded data={mostReadedData}/>

        <LastArticles data={lastLoadedData}/>

        <Writers data={editorsData}/>

        <Actual data={actualData} magazines={magazinesData} settings={settings}/>

        <WriteWithUs data={settings}/>

        <Categories data={categoriesData} settings={settings}/>
    </div> 
    );
}
 
export default HomePage;