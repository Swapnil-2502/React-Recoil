import {atom,selector} from 'recoil'

export const networkAtom = atom({
    key: "networkAtom",
    default: 104
})

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 9
})

export const messagesAtom = atom({
    key: "messagesAtom",
    default: 12
})

export const notificationAtom = atom({
    key: "notificationAtom",
    default: 35
})

export const totalnotificationSelector = selector({
    key:'totalnotificationSelector',
    get: ({get})=>{
        const networkAtomValue = get(networkAtom)
        const jobsAtomValue = get(jobsAtom)
        const messagesAtomValue = get(messagesAtom)
        const notificationAtomValue = get(notificationAtom)
        
        return networkAtomValue + jobsAtomValue + messagesAtomValue + notificationAtomValue
    }
})