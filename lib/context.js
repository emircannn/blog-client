'use client'
import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {

  const getSettings = async() => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}settings/settings`)
        return res.data.data
    } catch (error) {
        console.log(error)
    }
}
const getMagazineHeader = async() => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}home/getMagazineHeader`)
        return res.data.data
    } catch (error) {
        console.log(error)
    }
}
const getCategoryHeader = async() => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}home/getCategoryHeader`)
        return res.data.data
    } catch (error) {
        console.log(error)
    }
}

  const [settings, setSettings] = useState();
  const [magazines, setMagazines] = useState();
  const [category, setCategory] = useState();

  useEffect(() => {
    const getData = async() => {
      const data = getMagazineHeader();
      const data2 = getCategoryHeader();
      const data3 = getSettings();

      const [magazines, category, settings] = await Promise.all([data, data2, data3])
      setMagazines(magazines)
      setCategory(category)
      setSettings(settings)
    }

    getData()
  }, [])
  


  return (
    <SettingsContext.Provider value={{ settings, magazines, category }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  return useContext(SettingsContext);
};
