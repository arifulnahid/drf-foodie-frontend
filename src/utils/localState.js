import localforage from "localforage"

export const storeData = async (key, value) => {
    const res = await localforage.setItem(key, value)
    console.log(res);
}

export const getData  = async (key) => {
    const data = await localforage.getItem(key)
    return data;
}

