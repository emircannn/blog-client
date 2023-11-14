import { getAllActual, getAllCategory, getAllMagazine, getAllTexts, getAllUsers } from "@/lib/request"

export default async function sitemap () {
    const baseUrl = process.env.NEXT_PUBLIC_SITE

    const texts = await getAllTexts()
    const textsUrl= texts?.map((text) => (
        {url: `${baseUrl}/yazi/${text.seo}`, lastModified: text.updatedAt}
    ))
    const actual = await getAllActual()
    const actualUrl= actual?.map((text) => (
        {url: `${baseUrl}/aktuel/${text.seo}`, lastModified: text.updatedAt}
    ))
    const magazine = await getAllMagazine()
    const magazineUrl= magazine?.map((text) => (
        {url: `${baseUrl}/sayi/${text.seo}`, lastModified: text.updatedAt}
    ))
    const category = await getAllCategory()
    const categoryUrl= category?.map((text) => (
        {url: `${baseUrl}/sayi/${text.seo}`, lastModified: text.updatedAt}
    ))
    const user = await getAllUsers()
    const userUrl= user?.map((text) => (
        {url: `${baseUrl}/sayi/${text.username}`, lastModified: text.updatedAt}
    ))

    return [
        {url: baseUrl, lastModified: new Date()},
        {url: `${baseUrl}/hakkimizda`, lastModified: new Date()},
        {url:  `${baseUrl}/yazilar`, lastModified: new Date()},
        {url:  `${baseUrl}/aktuel`, lastModified: new Date()},
        {url:  `${baseUrl}/sayilar`, lastModified: new Date()},

        ...textsUrl, 
        ...actualUrl,
        ...magazineUrl,
        ...categoryUrl,
        ...userUrl,
    ]
}