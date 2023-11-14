
    export const getAllTexts = async() => {
        try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}home/getAllTexts`).then((res) => res.json()).then((data) => {
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
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}home/getAllActual`).then((res) => res.json()).then((data) => {
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
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}home/getAllMagazine`).then((res) => res.json()).then((data) => {
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
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}home/getAllCategory`).then((res) => res.json()).then((data) => {
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
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}home/getAllUsers`).then((res) => res.json()).then((data) => {
            return data.data as User[]
        })
        return res
    } catch (error) {
        console.log(error)
        throw new Error
    }
    }