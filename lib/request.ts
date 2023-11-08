
    export const getAllTexts = async() => {
        try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}home/getAllTexts`, {
            next: { revalidate: 1*60*60*24 }
        }).then((res) => res.json()).then((data) => {
            return data.data as Texts[]
        })
        return res
    } catch (error) {
        console.log(error)
        throw new Error
    }
    }
    export const getAllActual = async() => {
        try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}home/getAllActual`, {
            next: { revalidate: 1*60*60*24 }
        }).then((res) => res.json()).then((data) => {
            return data.data as Actual[]
        })
        return res
    } catch (error) {
        console.log(error)
        throw new Error
    }
    }
    export const getAllMagazine = async() => {
        try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}home/getAllMagazine`, {
            next: { revalidate: 1*60*60*24 }
        }).then((res) => res.json()).then((data) => {
            return data.data as Magazine[]
        })
        return res
    } catch (error) {
        console.log(error)
        throw new Error
    }
    }
    export const getAllCategory = async() => {
        try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}home/getAllCategory`, {
            next: { revalidate: 1*60*60*24 }
        }).then((res) => res.json()).then((data) => {
            return data.data as CategoryType[]
        })
        return res
    } catch (error) {
        console.log(error)
        throw new Error
    }
    }
    export const getAllUsers = async() => {
        try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}home/getAllUsers`, {
            next: { revalidate: 1*60*60*12 }
        }).then((res) => res.json()).then((data) => {
            return data.data as User[]
        })
        return res
    } catch (error) {
        console.log(error)
        throw new Error
    }
    }