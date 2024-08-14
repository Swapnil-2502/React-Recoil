import './App.css'
import { jobsAtom, messagesAtom, networkAtom, notificationAtom } from './atoms'
import {useRecoilValue , RecoilRoot} from 'recoil'

function App() {
  
  return (
    <>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </>
  )
  
}

function MainApp(){
  const networkAtomCount = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobsAtom)
  const messagesAtomCount = useRecoilValue(messagesAtom)
  const notificationAtomCount = useRecoilValue(notificationAtom)

  return (
    <>
      <RecoilRoot>
        <button>Home</button>
        <button>My Network ({networkAtomCount >= 100 ? "99+" : networkAtomCount})</button>
        <button>Jobs ({jobsAtomCount})</button>
        <button>Messages ({messagesAtomCount})</button>
        <button>Notifications ({notificationAtomCount})</button>
        <button>Profile</button>
      </RecoilRoot>
    </>
  )
}

export default App
