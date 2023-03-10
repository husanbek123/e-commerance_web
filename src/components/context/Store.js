import {create} from 'zustand'
import {persist} from 'zustand/middleware'


let Store = (set, get) => ({
    currentLang: 'Uz',
    setCurrentLang: (lang) => set({
        currentLang: lang
    })
})

let useMyStore = create(persist(Store, {
    name: "State"
}))
export default useMyStore