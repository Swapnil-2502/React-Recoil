import {atom} from 'recoil'

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