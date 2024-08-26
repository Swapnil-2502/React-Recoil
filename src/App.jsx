import './App.css'
import { jobsAtom, messagesAtom, networkAtom, notificationAtom } from './atoms'
import {useRecoilValue , RecoilRoot, useRecoilState,useSetRecoilState} from 'recoil'

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
  //const [notificationAtomCount,setNotificationAtomCount] = useRecoilState(notificationAtom)
  const notificationAtomCount = useRecoilValue(notificationAtom)

  return (
    <>
      
        <button>Home</button>
        <button>My Network ({networkAtomCount >= 100 ? "99+" : networkAtomCount})</button>
        <button>Jobs ({jobsAtomCount})</button>
        <button>Messages ({messagesAtomCount})</button>
        <button>Notifications ({notificationAtomCount})</button>
        <ButtonUpdater />
        {/* <button onClick={()=>{
          setNotificationAtomCount(c=>c+1)
        }}
        >Profile</button> */}
      
    </>
  )
}

function ButtonUpdater(){
  
  const setNotificationAtomCount = useSetRecoilState(notificationAtom)
  return (
    <button onClick={()=>{
      setNotificationAtomCount(c=>c+1)
    }}
    >Profile</button>
  )
}

export default App
