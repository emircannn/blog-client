

export default async function sitemap () {
    const baseUrl = process.env.NEXT_PUBLIC_SITE


    return [
        {url: baseUrl, lastModified: new Date()},
        {url: `${baseUrl}/hakkimizda`, lastModified: new Date()},
        {url:  `${baseUrl}/yazilar`, lastModified: new Date()},
        {url:  `${baseUrl}/aktuel`, lastModified: new Date()},
        {url:  `${baseUrl}/sayilar`, lastModified: new Date()}
    ]
}